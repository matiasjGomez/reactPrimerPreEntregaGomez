import './style.css'
import CartWidget from './CartWidget'
import logoImage from '../img/tgbg-lowres.png'

const NavBar = () => {
    return (
        <div className='container-fluid'>
            <header className='row navbar-custom'>
                <div className='col-lg-12 col-12'>
                <nav className="navbar navbar-custom navbar-expand-lg">
                <div className="container-fluid">
                <a className="navbar-brand" href="../public/index.html"><img src={logoImage} className="logo" alt='LOGO'></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="text-white navbar-nav me-auto mb-2 mb-lg-0 text-uppercase">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="../public/index.html">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Gaming
                    </a>
                    <ul class="dropdown-menu text-uppercase custom-dropdown">
                        <li><a className="dropdown-item" href="#">Playstation 4</a></li>
                        <li><a className="dropdown-item" href="#">Playstation 5</a></li>
                        <li><a className="dropdown-item" href="#">Xbox Series S/X</a></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><a className="dropdown-item" href="#">Accesories & Peripherals</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Contact</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-danger" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
                </div>
            </div>
            <CartWidget />
            </nav>
                </div>
            </header>
        </div>
    );
};

export default NavBar