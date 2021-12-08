import './LandingNavBar.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import MagmartLogo from '../../../../resources/images/logo__magmart.svg'
function LandingNavBar() {
    return (
        <div className="LandingNavBar">
            <Link className="nav-links-link" to="/">
                <div className="LandingNavBar--logo">
                    {/* <h4>MagMart</h4> */}
                    <img src={MagmartLogo}/>
                </div>
            </Link>
            <div className="LandingNavBar--center">
                <div className="LandingNavBar-items">
                    <h4>Contact us</h4>
                </div>
                <div className="LandingNavBar-items">
                    <h4>Pricing</h4>
                </div>
                <div className="LandingNavBar-items">
                    <h4>About us</h4>
                </div>
            </div>
            <div className="LandingNavBar--right">
                <div className="LandingNavBar-items">
                    <div className="btn-container">
                    <Link className="nav-links-link" to="/shop">
                        <div className="LandingNavBar-glassBtn">
                            <ShoppingCartIcon style={{height:15,width:15}}/>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="LandingNavBar-items">
                <Link className="nav-links-link" to="/signin">
                    <div className="btn-container">
                        <div className="LandingNavBar-glassBtn">Login</div>
                    </div>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingNavBar
