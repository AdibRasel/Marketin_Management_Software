import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Header = () => {
  return (
        <header className="header-style3 site-header mobile-sider-drawer-menu">
            {/* Header left part */}
            <div className="hdr-left-section">
                <div className="logo-header">
                    <div className="logo-header-inner logo-header-one">
                        <a href="index.html">
                            <img src="images/Logo.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            {/* Header mid part */}
            <div className="container hrd-mid-section">


                <div className="top-bar">
                    <div className="d-flex justify-content-between align-content-center">
                        <Row className="sx-topbar-left">
                            <div className="top-bar-nav">
                                <ul>
                                    <li><a href="about-us.html">Terms &amp; Condition</a></li>
                                    <li><a href="faq-page.html">Privacy Policy</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                        </Row>
                        <Row className="sx-topbar-right">
                            {/* EXTRA NAV */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <ul className="list-unstyled social-bx d-flex flex-wrap align-content-center">
                                        <li><a href="https://www.facebook.com/"><i className="feather-facebook"></i></a></li>
                                        <li><a href="https://twitter.com/"><i className="feather-twitter"></i></a></li>
                                        <li><a href="https://www.linkedin.com/"><i className="feather-linkedin"></i></a></li>
                                        <li><a href="https://www.instagram.com/"><i className="feather-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* EXTRA Nav */}
                        </Row>
                    </div>
                </div>


                <div className="sticky-wrapper">
                    <div className="sticky-header main-bar-wraper navbar-expand-lg">
                        <div className="main-bar">
                            <div className="container">
                                {/* NAV Toggle Button */}
                                <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggler collapsed">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar icon-bar-first"></span>
                                    <span className="icon-bar icon-bar-two"></span>
                                    <span className="icon-bar icon-bar-three"></span>
                                </button>
                                {/* MAIN NAVIGATION */}
                                <div className="header-nav navbar-collapse collapse collapse ">
                                    <ul className="nav navbar-nav ">
                                        {/* Add your navigation items here */}
                                    </ul>
                                </div>
                                {/* EXTRA NAV */}
                                <div className="extra-nav">
                                    <div className="extra-cell">
                                        {/* Add your extra navigation content here */}
                                    </div>
                                </div>
                                {/* EXTRA Nav */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header right part */}
            <div className="hrd-right-section">
                <ul className="e-p-bx">
                    <li>kali.me@gmail.com</li>
                    <li><a href="tel:(1)245-45678">(1)245-45678 call</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header