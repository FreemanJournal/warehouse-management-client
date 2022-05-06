import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
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
    
    if (isLoading) {
        return <Loader isLoading={isLoading} />
    }
    return (
        <div className='relative'>
            <Helmet>
                <title>Add new product</title>
            </Helmet>
            <Navbar />
            <UploadNewProducts />
            <Footer />
        </div>
    )
}
