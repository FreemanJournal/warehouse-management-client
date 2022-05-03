import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import useErrorMassageHandler from '../../hooks/useErrorMassageHandler';

function LoginForm() {
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();

  const { signInWithGoogle, signInWithEmailAndPassword, setAuthenticationProvider } = useErrorMassageHandler()

  const navigate = useNavigate();

  // const loginTost = "Hello";
  // const passToast = "mom";

  const onSubmitHandler = (value) => {
    const { email, password } = value;
    signInWithEmailAndPassword({ email, password })
      .then(() => {
        setAuthenticationProvider('logIn')
      })

  }
  const googleSignInHandler = () => {
    setAuthenticationProvider('googleSignIn')
    signInWithGoogle()
  }

  return (
    <>
      <section className="bg-amber-300  m-3 rounded-lg flex flex-col pt-10">
        <div className="px-6 py-8 pt-24 ">
          <div className="w-full md:w-6/12 mx-auto  rounded-md shadow-lg  bg-white ">
            <div className="flex items-center justify-between p-4 border-b border-white">
              <h4 className="text-lg text-slate-600 font-mont font-semibold">
                Log In
              </h4>
            </div>
            <div className=" w-full flex-wrap flex flex-col md:flex-row justify-center items-center gap-5  space-y-2 p-4 mt-3 text-[15.5px] leading-relaxed text-gray-500">
              <div className="w-full md:w-1/2">
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


                    </div>

                  </div>
                  <div className="flex items-center justify-end gap-3 p-4 mt-5 border-t border-white relative">
                    <button type='submit' className="px-6 py-2 text-white bg-indigo-500 rounded-md outline-none upload_btn"
                      onClick={() => setValue('productId', uuidv4())}>
                      Log In
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
              <div className="flex justify-center items-center pb-10 md:pb-0">
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
export default LoginForm;