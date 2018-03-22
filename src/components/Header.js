import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Charlie Villalobos</strong>,
                    Web Developer<br />
                    and Designer focused on digital <br />
                    marketing and sales.<br /></h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
