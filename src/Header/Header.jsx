import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const logo = "https://fa-fa.ch/storage/images/Ohne%2520Titel%2520(110%2520x%252036%2520mm)%2520(19).png?hash=c2c2620baa98f1f4f508639317eb32c5e40925a2&height=200&width=2560&shop=184078"
    const imgCart = "https://cdn-icons-png.flaticon.com/512/107/107831.png";
    const likeBtn = "https://cdn-icons-png.flaticon.com/512/54/54966.png";

    return (
        <header>
            <div className="logo">
                <Link to={'/'}><img className="imageLogo" src={logo} alt="" /></Link>
            </div>
            <div>
                <nav className="navbar">
                    <ul>
                        <NavLink to={'/'}><li><h2>Home</h2></li></NavLink>
                        <NavLink to={'/men'}><li><h2>Men</h2></li></NavLink>
                        <NavLink to={'/women'}><li><h2>Women</h2></li></NavLink>
                        <li><h2>Bags</h2></li>
                        <li><h2>Accesories</h2></li>
                    </ul>
                </nav>
            </div>
            <div className="search">
                <input className="searchBar" type="text" placeholder="Search.." />
                <img className="likeBtn" src={likeBtn} alt="" />
                <img className="imgCart" src={imgCart} alt="" />
            </div>
        </header>
    )
}

export default Header