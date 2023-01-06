import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi"
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>BLOG</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;