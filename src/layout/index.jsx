import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'

const RootLayout = ({children}) => {
    return (
        <Fragment>
            <Header />
            <main>{children}</main>
            {/* <Footer /> */}
        </Fragment>
    )
}

export default RootLayout