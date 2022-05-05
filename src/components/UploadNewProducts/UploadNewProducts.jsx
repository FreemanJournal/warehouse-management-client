import { useContext, useState } from 'react';
import FileBase64 from 'react-file-base64';
import { useForm } from 'react-hook-form';
import { Slide } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { createItem } from '../../api/api';
import { GlobalContext } from '../../context/GlobalContext';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../utilities/firebase.init';
function UploadNewProducts() {
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    const [user] = useAuthState(auth)

    const { mutate } = useContext(GlobalContext);
    const [imgFile, setImgFile] = useState();

    const customId = "custom-id-yes";
    const imageToast = "custom-id-no";




    const onCreateProductHandler = async (value) => {
        if (!value?.image) {
            toast.error("Please provide a image!!", { toastId: imageToast })
            return;
        }
        const result = await createItem(value)
        if (result) {
            mutate()
            toast.success("Product added successfully.")
            reset()
            setImgFile()
        } else {
            toast.error("Product added failed.", { toastId: customId })
        }
    }

    return (
        <>
            <section className="bg-amber-300 m-3 pt-10 rounded-lg flex flex-col relative" >
                <div className="px-6 py-8 pt-24">
                    <div className=" sm:w-8/12 mx-auto  rounded-sm shadow-lg  bg-white ">
                        <div className="flex items-center justify-between p-4 border-b border-white">
                            <h4 className="text-lg text-slate-600 font-mont font-semibold">
                                Add new product
                            </h4>
                        </div>
                        <div className="space-y-2 p-4 mt-3 text-[15.5px] leading-relaxed text-gray-500">
                            <form className="" onSubmit={handleSubmit(onCreateProductHandler)}>
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className="flex flex-col sm:flex-row  gap-5">
                                    <div className="sm:w-1/2 flex flex-col gap-5">
                                        <div className='border rounded-sm'>
                                            <label htmlFor="title" className="sr-only">
                                                Title
                                            </label>
                                            <input
                                                id="title"
                                                name="title"
                                                type="text"
                                                autoComplete="title"
                                                required
                                                className="appearance-none rounded-sm relative block w-full px-3 py-3 shadow-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm border "
                                                placeholder="Write product name..."
                                                {...register("title", { required: true, maxLength: 100 })}
                                            />
                                        </div>

                                        <div className='border rounded-sm'>
                                            <label htmlFor="description" className="sr-only">
                                                Product Description
                                            </label>
                                            <textarea
                                                id="description"
                                                name="description"
                                                type="textarea"
                                                required
                                                className="appearance-none  rounded-sm relative block w-full px-3 py-3 shadow-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 border focus:z-10 sm:text-sm"
                                                placeholder="Write your product description..."
                                                {...register("description", { required: true, maxLength: 20000 })}
                                            />
                                        </div>
                                        <div className='border rounded-sm'>
                                            <label htmlFor="price" className="sr-only">
                                                Price
                                            </label>
                                            <input
                                                id="price"
                                                name="price"
                                                type="number"
                                                autoComplete="price"
                                                required
                                                className="appearance-none border  rounded-sm relative block w-full px-3 py-3 shadow-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                                                placeholder="Enter product price..."
                                                {...register("price", { required: true, maxLength: 10 })}
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:w-1/2 flex flex-col gap-5">
                                        <div className='border rounded-sm'>
                                            <label htmlFor="quantity" className="sr-only">
                                                quantity
                                            </label>
                                            <input
                                                id="quantity"
                                                name="quantity"
                                                type="number"
                                                autoComplete="quantity"
                                                required
                                                className="appearance-none border rounded-sm relative block w-full px-3 py-3 shadow-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                                                placeholder="Enter product quantity..."
                                                {...register("quantity", { required: true, maxLength: 10 })}
                                            />
                                        </div>
                                        <div className='border rounded-sm'>
                                            <label htmlFor="supplier" className="sr-only">
                                                supplier
                                            </label>
                                            <input
                                                id="supplier"
                                                name="supplier"
                                                type="text"
                                                autoComplete="supplier"
                                                required
                                                className="appearance-none border rounded-sm relative block w-full px-3 py-3 shadow-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                                                placeholder="Enter supplier name..."
                                                {...register("supplier", { required: true, maxLength: 100 })}
                                            />
                                        </div>
                                        <div className='relative'>
                                            <label className="block text-sm font-medium text-slate-500">Photo</label>
                                            <div className="mt-1 flex items-center">
                                                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                                    {imgFile ? <img src={imgFile} alt="product" /> :
                                                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                        </svg>}
                                                </span>
                                                <label
                                                    htmlFor='file-upload'
                                                    className="ml-5 bg-white py-2 px-3 border  border-gray-300 rounded-sm shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 "
                                                >

                                                    <div className="input-file">
                                                        <FileBase64
                                                            id="file-upload"
                                                            type="file"
                                                            multiple={false}
                                                            onDone={({ base64 }) => {
                                                                setImgFile(base64)
                                                                setValue('image', base64)
                                                            }}
                                                        />
                                                    </div>

                                                </label>

                                            </div>
                                        </div>
                                    </div>



                                </div>
                                <div className="flex items-center justify-end gap-3 p-4 mt-5 border-t border-white relative">
                                    <button type='submit' className="px-6 py-2 text-white bg-blue-400 rounded-sm outline-none upload_btn"
                                        onClick={() => {
                                            setValue('productId', uuidv4())
                                            setValue('userEmail',user?.email)
                                        }}
                                    >
                                        Create new product
                                    </button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
                <div className="mx-auto relative">
                    <Slide bottom>
                        <button type="button" onClick={() => navigate('/manageInventory')} className=" py-2 px-4  mb-10 bg-slate-600 hover:bg-slate-700  text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-sm   rounded-lg ">
                            Manage Inventories
                        </button>
                    </Slide>
                </div>

            </section>

        </>

    );
}
export default UploadNewProducts;