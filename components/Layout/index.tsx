import React from 'react'
import Navbar from "../Navbar";

type Props = {
    children: React.ReactNode
    className?: string
}

const Layout = (props: Props) => {
    return (
        <div className={`w-screen max-w-screen min-h-screen ${props.className}`}>
            <Navbar />
            <div className='lg:mx-96 md:mx-40 mx-5'>
                {props.children}
            </div>
        </div>
    )
}

export default Layout