import { useRef } from "react";
import Homepage from "../../pages/HomePage/HomePage";
import Cars from "../../pages/Cars/Cars";


function Navbar() {
const navRef = useRef();
const showNavBar = () => {
    return navRef.current.classList.toggle("responsive_nav");
}
   return (
        <header>
        
        <nav ref={navRef} className="navbar navbar-expand-lg bg-body-tertiary"> 
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Extend<b>Rent</b></a>
    
        <button onClick={showNavBar} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Ana Sayfa</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Kampanyalar</a>
            </li>
        
            <li className="nav-item dropdown">
             <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Araçlar
             </a>
            <ul className="dropdown-menu">
             <li><a className="dropdown-item" href="/cars" >Tüm Araçlar</a></li>
              <li><a className="dropdown-item" href="#">Popüler Araçlar</a></li>
              <li><a className="dropdown-item" href="#">Arazi Araçları</a></li>
               <li><a className="dropdown-item" href="#">Ekonomik Araçlar</a></li>
               <li><hr className="dropdown-divider"/></li>
            </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Hakkımızda</a>
        </li>
      </ul>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Ara</button>
      </form>
    </div>
  </div>

</nav>

</header>
    );
    
}
export default Navbar;
