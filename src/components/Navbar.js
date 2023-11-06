import { useState } from "react";
import {
    Link,
    BrowserRouter as Router,
  } from "react-router-dom";
function Navbar(){
    {/*form start*/}
    const [state, setState] = useState({
        email: ""
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
        
      };{/*form end*/}
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
        <form onSubmit={handleSubmit}> {/*form start*/}
                <div className="form-control">
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    value={state.email}
                    onChange={handleInputChange}
                />
                </div>
                <div className="form-control">
                <label></label>
                <button type="submit" >Login</button>
                </div>
            </form>{/*form end*/}
            </ul>

        </div>

    )
}

export default Navbar;




