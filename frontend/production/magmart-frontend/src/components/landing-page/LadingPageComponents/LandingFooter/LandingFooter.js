import './LandingFooter.scss'
import NavigationIcon from '@mui/icons-material/Navigation';
function LandingFooter() {
    return (
        <div className="landing__footer">
            <div className="landing__footer--container">
                    <h2>MagMart</h2>
                <div className="landing__footer--left">
                    <div className="footer--address">
                        <span>
                            <NavigationIcon/>
                        </span>
                        <span>
                            <h4>dev street, India</h4>
                        </span>
                    </div>
                </div>
                <div className="landing__footer--right">
                    <h4>Contact us</h4>
                    <h4>Pricing</h4>
                    <h4>About us</h4>
                </div>
            </div>
            <center>
                © Magmart | 2021
            </center>
        </div>
    )
}

export default LandingFooter
