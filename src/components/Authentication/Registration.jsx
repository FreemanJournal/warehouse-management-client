import { useState } from 'react';
import FileBase64 from 'react-file-base64';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { FcGoogle } from "react-icons/fc";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../utilities/firebase.init';

function Registration() {
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate()
  const [imgFile, setImgFile] = useState()
  const customId = "custom-id-yes";
  const imageToast = "custom-id-no";



  const onSubmitHandler = async (value) => {

    if (value.password !== value.confirmPassword) {
      toast.error("Password and Confirm Password does not match !")
      return;
    }
    console.log('value', value);
  }
  const googleSignInHandler = () => {
    signInWithGoogle()
  }

  return (
    <>
      <ToastContainer />
      <section className="bg-amber-300 m-3 pt-10 rounded-lg flex flex-col" >
        <div className="px-6 py-8 pt-24">
          <div className="w-full md:w-6/12 mx-auto  rounded-md shadow-lg  bg-white ">
            <div className="flex items-center justify-between p-4 border-b border-white">
              <h4 className="text-lg text-slate-600 font-mont font-semibold">
                Registration
              </h4>
            </div>
            <div className=" w-full flex-wrap flex flex-col md:flex-row justify-center items-center gap-5  space-y-2 p-4 mt-3 text-[15.5px] leading-relaxed text-gray-500">
              <div className="">
                <form className="" onSubmit={handleSubmit(onSubmitHandler)}>
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="flex  gap-5">
                    <div className="w-full flex flex-col gap-5">
                      <div>
                        <label htmlFor="username" className="sr-only">
                          Name
                        </label>
                        <input
                          id="username"
                          name="username"
                          type="text"
                          autoComplete="username"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                          placeholder="Username"
                          {...register("username", { required: true, maxLength: 20 })}
                        />
                      </div>

                      <div>
                        <label htmlFor="email-address" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email-address"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                          placeholder="Email address"
                          {...register("email", { required: true, maxLength: 30 })}
                        />
                      </div>
                      <div>
                        <label htmlFor="password" className="sr-only">
                          Password
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                          placeholder="Password"
                          {...register("password", { required: true, minLength: 6 })}
                        />
                      </div>
                      <div>
                        <label htmlFor="password" className="sr-only">
                          Confirm Password
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                          placeholder="Confirm Password"
                          {...register("confirmPassword", { required: true, minLength: 6 })}
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
                            className="ml-5 bg-white py-2 px-3 border  border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 "
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
                    <button type='submit' className="px-6 py-2 text-white bg-indigo-500 rounded-md outline-none upload_btn"
                      onClick={() => setValue('productId', uuidv4())}>
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex md:flex-col gap-3 justify-center items-center">
                <hr className='w-32 md:w-0 md:h-32 border border-b-0  md:border-r-0 border-zinc-300' />
                <p className=" mt-2 mb-4 text-center text-sm text-gray-600">
                  Or{' '}
                </p>
                <hr className='w-32 md:w-0 md:h-32  border border-b-0  border-r-0 border-zinc-300' />
              </div>
              <div className="flex justify-center items-center">
                <button onClick={googleSignInHandler}
                  className=" mx-auto flex gap-1 justify-center font-semibold border border-zinc-400 py-2 px-10 shadow-md rounded-md  text-emerald-600 hover:text-emerald-500" >
                  <FcGoogle className='font-bold text-2xl' /><span>Continue with google</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>

  );
}
export default Registration;