import { Link } from "react-router-dom";
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-sm">
                <Link className="navbar-brand" to="/">
                    Task Manager
                </Link>
            </div>
        </nav>
    );
};

export default Header;
