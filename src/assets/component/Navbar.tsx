
function Navbar() {
    return (
        <nav>

            <div className="logo">
                <img className="" src="asset_pic/logo-text.png" alt="" />
            </div>

            <ul className="nav-links">

                <li ><a href="">Home</a></li>
                <li><a href="">Technologies</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>

            </ul>

            <div className="btn">
                <button className="In">Sign In</button>
                <button className="Up">Sign Up</button>
            </div>

        </nav>
    );
}

export default Navbar;