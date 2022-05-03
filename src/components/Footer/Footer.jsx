import React from 'react'

export default function Footer() {

    let date = new Date();
    return (
        <footer className="bg-slate-700 text-gray-200 px-3 py-8">
            <div className="flex gap-1 items-center justify-center">
                <span className="">
                    &#169; {date.getFullYear()}
                </span>
                <span className="">
                    Copyright
                </span>
                <span>
                    theGreenWarehouse.com
                </span>
                <span>All Rights Reserved.</span>
            </div>
        </footer>
    )
}
