import LandingNavBar from './LadingPageComponents/LandingNavBar/LandingNavBar'
import './LandingPageContainer.scss'
import mainImage from '../../resources/images/main.svg'
import why from "../../resources/images/why.svg"
import LandingDev from '../../resources/images/landing__dev.svg'
import LandingFooter from './LadingPageComponents/LandingFooter/LandingFooter'
import Testimonials from './LadingPageComponents/Testimonials/Testimonials'
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SpecialFeature from './LadingPageComponents/SpecialFeatures/SpecialFeature'
import { Helmet } from 'react-helmet'
function LandingPageContainer() {
    useEffect(()=>{
        Aos.init({duration:1000});
      },[]);
    return (
        <div className="landing__page">
            <Helmet>
                <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
                <style>
        {`df-messenger {
            --df-messenger-bot-message: #878fac;
            --df-messenger-button-titlebar-color: #df9b56;
            --df-messenger-chat-background-color: #fafafa;
            --df-messenger-font-color: white;
            --df-messenger-send-icon: #878fac;
            --df-messenger-user-message: #479b3d;`}
    </style>
            </Helmet>
            <div className="landing__page--container">
            <df-messenger
                intent="WELCOME"
                chat-title="subscription"
                agent-id="ebf27094-6204-4370-a2a4-d2b21a50ac29"
                language-code="en"
                chat-icon="https://cdn-icons-png.flaticon.com/512/2040/2040946.png"
                chat-background="red"
                ></df-messenger>
                
                <div className="landing__page--banner">
                <LandingNavBar/>
                    <div className="banner__container">
                        <div className="banner__left" data-aos="fade-right">
                            <div>
                                <h1>Get All Your <br/>Subscriptions at one place</h1>
                                <Link className="nav-links-link" to="/signup">
                                    <div className="banner--signup-btn">
                                        Sign Up 
                                    </div>
                                </Link>
                            </div>
                            
                        </div>
                        <div className="banner__right" data-aos="fade-up">
                            <img src={mainImage}/>
                        </div>
                    </div>
                </div>

                <div className="landing__page--about" data-aos="fade-up">
                    <div className="about__title">
                        <h1>Why MagMart?</h1>
                    </div>
                    <div className="about__container">
                        <div>
                            <img src={why}/>
                        </div>
                        <div id="about">
                            <div className="about__container--left">
                                <h4>Why MagMart?</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </div>
                        </div>
                    </div>

                </div>
                

                <div className="dev__sec" data-aos="fade-up">
                        <div className="div__container">
                            
                            <div>
                                <div className="dev__container--left">
                                    <h4 style={{color:"#635AFF"}}>Developed for easy management</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                </div>
                            </div>

                            <div>
                                <img src={LandingDev}/>
                            </div>
                        </div>

                </div>

                <div className="special__feature--container" id="special_feature">
                    <SpecialFeature/>
                </div>

                <div className="testimonials__container">
                    <div className="about__title">
                            <h1>Testimonials</h1>
                        </div>
                    <div className="LandingPage__testimonials" id="contact">
                        <Testimonials/>
                        <Testimonials/>
                        <Testimonials/>
                        <Testimonials/>
                    </div>
                </div>
                
                <div className="LandingPage__footer">
                    <LandingFooter/>
                </div>
            </div>
        </div>
    )
}

export default LandingPageContainer
