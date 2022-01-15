
import '../Navbar/Navbar.css';
import cart from '../../images/shopping-cart.svg';

function Navbar() {
    return (
        <div className='Navbar'>
            <span className='Navbar_logo'> Foodie </span>
            <ul type='none'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Restaurants</a></li>
                <li><a href='#'>Foods</a></li>
                <li><a href='#'>Offers</a></li>
                <li><a href='#'>Service</a></li>
                <li>
                    <a href='#'>
                        <span className='cart-circle'>
                            <img src={cart} className='' alt="Cart picture"/>
                        </span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <button className='registerbtn'>Register Now</button>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;