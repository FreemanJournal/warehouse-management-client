import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import useErrorMassageHandler from '../../hooks/useErrorMassageHandler';

function LoginForm() {
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
  const { signInWithGoogle, googleUser, signInWithEmailAndPassword, setAuthenticationProvider } = useErrorMassageHandler()
  const navigate = useNavigate()


  const onSubmitHandler = (value) => {
    const { email, password } = value;
    setAuthenticationProvider('logIn')
    signInWithEmailAndPassword(email, password)
  }
  const googleSignInHandler = async () => {
    setAuthenticationProvider('googleSignIn')
    signInWithGoogle()
  }

  return (
    <>
      <section className="bg-amber-300  m-3 rounded-lg flex flex-col pt-10">
        <div className="px-6 py-8 pt-24 ">
          <div className="w-full sm:w-6/12 mx-auto  rounded-sm shadow-lg  bg-white ">
            <div className="flex items-center justify-between p-4 border-b border-white">
              <h4 className="text-lg text-slate-600 font-mont font-semibold">
                Welcome back
              </h4>
            </div>
            <div className=" w-full flex-wrap flex flex-col sm:flex-row justify-center items-center gap-5  space-y-2 p-4 mt-3 text-[15.5px] leading-relaxed text-gray-500">
              <div className="w-full sm:w-1/2">
                <form className="" onSubmit={handleSubmit(onSubmitHandler)}>
                  <div className="flex">
                    <div className="w-full flex flex-col gap-5">


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
                          className="appearance-none rounded-sm relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
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
                          className="appearance-none rounded-sm relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                          placeholder="Password"
                          {...register("password", { required: true, minLength: 6 })}
                        />
                      </div>


                    </div>

                  </div>
                  <div className="flex items-center justify-end gap-3 p-4 mt-5 border-t border-white relative">
                    <button type='submit' className="px-6 py-2 text-white bg-indigo-500 rounded-sm outline-none upload_btn"
                    >
                      Log In
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex sm:flex-col gap-3 justify-center items-center">
                <hr className='w-32 sm:w-0 sm:h-32 border border-b-0  sm:border-r-0 border-zinc-300' />
                <p className=" mt-2 mb-4 text-center text-sm text-gray-600">
                  Or{' '}
                </p>
                <hr className='w-32 sm:w-0 sm:h-32  border border-b-0  border-r-0 border-zinc-300' />
              </div>
              <div className="flex flex-col relative justify-center items-center pb-10 sm:pb-0">
                <button onClick={googleSignInHandler}
                  className="mx-auto flex gap-1 justify-center font-semibold  py-2 px-10 shadow-sm rounded-sm duration-300 text-slate-600 hover:text-pink-600 border hover:border-pink-500" >
                  <FcGoogle className='font-bold text-2xl' /><span>Continue with google</span>
                </button>
                <p className='absolute -bottom-1 sm:-bottom-28 cursor-pointer hover:underline hover:text-pink-500 duration-300' onClick={() => navigate("/registration")}>Need an account ?</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>

  );
}
export default LoginForm;