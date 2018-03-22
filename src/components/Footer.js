import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/charlievilla" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/charlievillacr" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                        <li><a href="mailto:charlievilla@gmail.com" className="icon fa-envelope-o"><span className="label">charlievilla@gmail.com</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Carlos Villalobos Argüello</li><li>Front-End & Design</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
