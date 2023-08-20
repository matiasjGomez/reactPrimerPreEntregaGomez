import './style.css'
import {    Link    } from 'react-router-dom'
import CartWidget from './CartWidget'
import logoImage from '../img/tgbg-lowres.png'

const NavBar = () => {
    return (
        <div className='container-fluid'>
            <header className='row navbar-custom'>
                <div className='col-lg-12 col-12'>
                <nav className="navbar navbar-custom navbar-expand-lg">
                <div className="container-fluid">
                <Link to="/" className="navbar-brand" ><img src={logoImage} className="logo" alt='LOGO'></img></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="text-white navbar-nav me-auto mb-2 mb-lg-0 text-uppercase">
                    <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Gaming
                    </a>
                    <ul class="dropdown-menu text-uppercase custom-dropdown">
                        <li><Link to="/category/Playstation 4" className="dropdown-item">Playstation 4</Link></li>
                        <li><Link to="/category/Playstation 5"
                        className="dropdown-item">Playstation 5</Link></li>
                        <li><Link to="/category/Xbox Series X"className="dropdown-item">Xbox Series X</Link></li>
                        <li><Link to="/category/Nintendo Switch" className="dropdown-item">Nintendo Switch </Link></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><Link to="/category/Accesories and Peripherals"className="dropdown-item">Accesories & Peripherals</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <Link to="/contact" className="nav-link" aria-current="page">Contact</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-danger" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
                </div>
            </div>
            <Link to="/cart">
            <CartWidget />
            </Link>
            </nav>
                </div>
            </header>
        </div>
    );
};

export default NavBar