import React, { useEffect, useState } from 'react'
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../utilities/firebase.init';

export default function useErrorMassageHandler() {
    const [authenticationProvider, setAuthenticationProvider] = useState();

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, createUser, createLoading, createError] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, errorUpdating] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);
    const [signInWithEmailAndPassword, user, loading, loginError] = useSignInWithEmailAndPassword(auth);


    const errorMessageHandler = (er) => {
        const errorMessage = er?.message
        switch (errorMessage) {
            case 'Firebase: Error (auth/popup-closed-by-user).':
                break;
            case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
                toast.error('Password should be at least 6 characters long.',{toastId:errorMessage})
                break;
            case 'Firebase: Error (auth/email-already-in-use).':
                toast.error('This email is used once.',{toastId:errorMessage})
                break;
            case 'No user is logged in':
                toast.error('This email is used once.',{toastId:errorMessage})
                break;
            case 'Firebase: Error (auth/wrong-password).':
                toast.error('Oops,looks like password is incorrect.',{toastId:errorMessage})
                break;
            case 'Firebase: Error (auth/user-not-found).':
                toast.error('Please give valid account info.',{toastId:errorMessage})
                break;
            case 'Firebase: Error (auth/operation-not-allowed)':
                toast.error('Please consider another signIn/signUp option.',{toastId:errorMessage})
                break;
            default:
                toast.error(errorMessage,{toastId:errorMessage})
                break;
        }
    }

    useEffect(() => {
        switch (authenticationProvider) {
            case 'register':
                errorMessageHandler(createError)
                break;
            case 'updating':
                errorMessageHandler(errorUpdating)
                break;
            case 'verification':
                errorMessageHandler(verificationError)
                break;
            case 'logIn':
                errorMessageHandler(loginError)
                break;
            case 'googleSignIn':
                errorMessageHandler(googleError)
                break;
            default:
                errorMessageHandler('')
        }
    }, [createError, loginError, errorUpdating, verificationError,googleError, authenticationProvider])



    return { signInWithGoogle,googleUser, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithEmailAndPassword, setAuthenticationProvider };

}
