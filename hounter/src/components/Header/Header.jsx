import './Header.css';
import logo from '../../assets/logo.png'
import pop from '../../assets/pop.svg'


function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <div className='dot'>
                    <div className='bg-1 bg-shape'>1</div>
                    <div className='bg-2 bg-shape'>2</div>
                </div>
                <img className="header-logo_img" alt="logo" src={logo}></img>
                <h2 className="header-logo_title">Hounter</h2>
            </div>
            <div className="header-nav">
                <ul className="header-nav-list">
                    <li className="header-nav_item" id="aboutUs">
                        <a>About Us</a>
                    </li>
                    <li className="header-nav_item" id="article">
                        <a>Article</a>
                    </li>
                    <li className="header-nav_item" id="property">
                        <a>Property</a>
                        <img alt='popUp' src={pop}></img>
                    </li>
                    <li className="header-nav_item header-signUp" id="signUp">
                        <a>Sign Up!</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
export default Header;