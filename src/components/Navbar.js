import {
    Link,
    BrowserRouter as Router,
  } from "react-router-dom";
function Navbar(){
    return(
        <div>
            <ul>
                <li>
                    <Link to='/Mobiles'>Mobile</Link>
                </li>
                <li>
                    <Link to='/Blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/Career'>Career</Link>
                </li>
                <li>
                    <Link to='/Design'>Design</Link>
                </li>
                <li>
                    <Link to='/Login'>Login</Link>
                </li>
                <li>
                    <Link to='/OpenSource'>OpenSource</Link>
                </li>
                <li>
                    <Link to='/Events'>Events</Link>
                </li>
            </ul>

        </div>

    )
}

export default Navbar;




