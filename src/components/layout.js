import React from 'react'

import Header from './header'
import Footer from './footer'

function layout(props) {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default layout
