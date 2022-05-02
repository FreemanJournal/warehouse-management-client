import React, { useContext, useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import UploadNewProducts from '../components/UploadNewProducts/UploadNewProducts'
import { GlobalContext } from '../context/GlobalContext'
import Loader from '../utilities/Loader'

export default function NewInventoryPage() {
    const { isLoading } = useContext(GlobalContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    console.log('isLoading', isLoading);
    if (isLoading) {
        return <Loader isLoading={isLoading} />
    }
    return (
        <>
            <Navbar />
            <UploadNewProducts />
            <Footer />
        </>
    )
}
