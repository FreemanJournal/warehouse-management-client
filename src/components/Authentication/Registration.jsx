import { useContext, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../../context/GlobalContext';
import useErrorMassageHandler from '../../hooks/useErrorMassageHandler';
import auth from '../../utilities/firebase.init';

function Registration() {
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
  const { signInWithGoogle, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, setAuthenticationProvider } = useErrorMassageHandler()
  const navigate = useNavigate();
  
  // const [user,loading] = useAuthState(auth)
  // const {createToken} = useContext(GlobalContext)

  // useEffect(()=>{createToken(user)},[user])



  const onSubmitHandler = (value) => {
    if (value.password !== value.confirmPassword) {
      toast.error("Password and Confirm Password does not match !", { toastId: "Hello" })
      return;
    }

    const { displayName, email, password } = value;
    setAuthenticationProvider('register')
    createUserWithEmailAndPassword(email, password)
      .then(async () => {
        setAuthenticationProvider('updating')
        await updateProfile({ displayName });
        setAuthenticationProvider('verification')
        await sendEmailVerification();
        toast.success(`A verification email has been sent to ${email}`, { toastId: "Mom" })
      })
  }
  const googleSignInHandler = () => {
    setAuthenticationProvider('googleSignIn')
    signInWithGoogle()
  }

  return (
    <>
      <section className="bg-amber-300 m-3 pt-10 rounded-lg flex flex-col" >
        <div className="px-6 py-8 pt-24">
          <div className="w-full md:w-6/12 mx-auto  rounded-md shadow-lg  bg-white ">
            <div className="flex items-center justify-between p-4 border-b border-white">
              <h4 className="text-lg text-slate-600 font-mont font-semibold">
                Registration
              </h4>
            </div>
            <div className=" w-full flex-wrap flex flex-col md:flex-row justify-center items-center gap-5  space-y-2 p-4 mt-3 text-[15.5px] leading-relaxed text-gray-500">
              <div className="w-full md:w-1/2">
                <form className="" onSubmit={handleSubmit(onSubmitHandler)}>
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="flex">
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
                          {...register("displayName", { required: true, maxLength: 20 })}
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
                          autoComplete='off'
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
                          id="confirm-password"
                          name="confirm-password"
                          type="password"
                          autoComplete='off'
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                          placeholder="Confirm Password"
                          {...register("confirmPassword", { required: true, minLength: 6 })}
                        />
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
              <div className="flex relative  justify-center items-center pb-10 md:pb-0">
                <button onClick={googleSignInHandler}
                  className="mx-auto flex gap-1 justify-center font-semibold duration-300  py-2 px-10 shadow-md rounded-md  text-slate-600 hover:text-pink-600 border hover:border-pink-500" >
                  <FcGoogle className='font-bold text-2xl' /><span>Continue with google</span>
                </button>
                <p className='absolute -bottom-1 md:-bottom-28  cursor-pointer duration-300 hover:underline hover:text-pink-500' onClick={() => navigate("/login")}>Already have an account ?</p>

              </div>
            </div>

          </div>
        </div>
      </section>

    </>

  );
}
export default Registration;