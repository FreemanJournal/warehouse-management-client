import React, { useState } from 'react'
import { css } from "@emotion/react";
import { PropagateLoader } from 'react-spinners';
import "./loader.css"
export default function Loader({isLoading}) {
    // let [loading, setLoading] = useState(true);
 
    return (
        <div className="relative w-screen h-screen bg-slate-200">
            <div className="loader relative">
                <PropagateLoader color='#36D7B7' loading={isLoading} size={40} margin={2}  />
            </div>
        </div>
    )
}
