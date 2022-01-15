import "../Navbar/Navbar.css";
import cart from "../../images/shopping-cart.svg";
import { NavLink, Link,useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate()

    const handleRegister =()=>{
        navigate('/register',{replace:true})
    }

  return (
    <div className="Navbar">
      <span className="Navbar_logo"> Foodie </span>
      <ul type="none">
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "red" } : { color: "white" };
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "red" } : { color: "white" };
            }}
            to="/restaurants"
          >
            Restaurants
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "red" } : { color: "white" };
            }}
            to="/foods"
          >
            Foods
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "red" } : { color: "white" };
            }}
            to="/offers"
          >
            Offers
          </NavLink>
        </li>
        <li>
          <NavLink to="#">Service</NavLink>
        </li>
        <li>
          <NavLink to="#">
            <span className="cart-circle">
              <img src={cart} className="" alt="Cart picture" />
            </span>
          </NavLink>
        </li>
        <li>
          <button onClick={handleRegister} className="registerbtn">Register Now</button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
