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
            <div className='mx-60'>
                {props.children}
            </div>
        </div>
    )
}

export default Layout