import './Header.css'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
const Header = ({Path}) => {
  const header = document.getElementById("header")
  document.addEventListener('scroll',() => {
    if (window.screenY>0) {
      header.classList.add('scrolled-header')
    }else{
      header.classList.remove('scrolled-header');
    }
  })
  
  return (
    <header id='header' style={{backgroundColor:`${Path  !== "/" && "#294B29"} `}} className=''>
        <div className="header-logo">
            <Link to={"/"}>
            <h1>Zaph Tours</h1>
            {/* <img src={logo} width={200} alt="zaph tours logo" /> */}
            </Link>
        </div>
        <nav className="header-nav">
            <ul className="header-nav-links">
                <li className="header-nav-link-item"><Link to={"/"}>home</Link></li>
                <li className="header-nav-link-item"><Link to={"/destinations"}>destinations</Link></li>
                <li className="header-nav-link-item"><Link to={"/trips"}>trip types</Link></li>
                <li className="header-nav-link-item"><Link to={"/contact"}>contact us</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header