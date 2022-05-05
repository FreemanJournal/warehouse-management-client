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
                                                className="appearance-none rounded-sm relative block w-full px-3 py-3 shadow-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm "
                                                placeholder="PRODUCT NAME"
                                                {...register("title", { required: true, maxLength: 100 })}
                                            />
                                        </div>
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
                                                className="appearance-none  rounded-sm relative block w-full px-3 py-3 shadow-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                                                placeholder="QUALITY"
                                                {...register("quantity", { required: true, maxLength: 10 })}
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
                                                className="appearance-none   rounded-sm relative block w-full px-3 py-3 shadow-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                                                placeholder="PRICE"
                                                {...register("price", { required: true, maxLength: 10 })}
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:w-1/2 flex flex-col gap-5">
                                        
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
                                                className="appearance-none  rounded-sm relative block w-full px-3 py-3 shadow-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                                                placeholder="SUPPLIER NAME"
                                                {...register("supplier", { required: true, maxLength: 100 })}
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
                                                rows={5}
                                                className="appearance-none  rounded-sm relative block w-full px-3 py-3 shadow-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500  focus:z-10 sm:text-sm"
                                                placeholder="DESCRIPTIONS"
                                                {...register("description", { required: true, maxLength: 20000 })}
                                            />
                                        </div>
                                        <div className='relative'>
                                            <label className="block text-sm font-medium text-slate-500">Product Image</label>
                                            <div className="mt-1 flex items-center">
                                                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                                    {imgFile ? <img src={imgFile} alt="product" /> :
                                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M22 8a.76.76 0 0 0 0-.21v-.08a.77.77 0 0 0-.07-.16.35.35 0 0 0-.05-.08l-.1-.13-.08-.06-.12-.09-9-5a1 1 0 0 0-1 0l-9 5-.09.07-.11.08a.41.41 0 0 0-.07.11.39.39 0 0 0-.08.1.59.59 0 0 0-.06.14.3.3 0 0 0 0 .1A.76.76 0 0 0 2 8v8a1 1 0 0 0 .52.87l9 5a.75.75 0 0 0 .13.06h.1a1.06 1.06 0 0 0 .5 0h.1l.14-.06 9-5A1 1 0 0 0 22 16V8zm-10 3.87L5.06 8l2.76-1.52 6.83 3.9zm0-7.72L18.94 8 16.7 9.25 9.87 5.34zM4 9.7l7 3.92v5.68l-7-3.89zm9 9.6v-5.68l3-1.68V15l2-1v-3.18l2-1.11v5.7z"></path></svg>
                                                        }
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
                                    <button type='submit' className="px-6 py-2 text-white bg-blue-400 hover:bg-blue-600 duration-300 rounded-sm outline-none upload_btn"
                                        onClick={() => {
                                            reset()
                                        }}
                                    >
                                       Cancel
                                    </button>
                                    <button type='submit' className="px-6 py-2 text-white bg-blue-400 hover:bg-blue-600 duration-300 rounded-sm outline-none upload_btn"
                                        onClick={() => {
                                            setValue('productId', uuidv4())
                                            setValue('userEmail',user?.email)
                                        }}
                                    >
                                       Save
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