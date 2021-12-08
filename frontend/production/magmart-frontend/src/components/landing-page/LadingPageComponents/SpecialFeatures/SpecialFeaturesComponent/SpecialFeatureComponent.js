import "./SpecialFeatureComponent.scss"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

function SpecialFeatureComponent({icon,title,desc}) {

    const Sf_icon = icon;
    return (
        <div className="sf__component" data-aos="fade-up">
            <div className="sf__container">
                <div className="sf__icon">
                    <Sf_icon style={{height:'50px', width:'50px', background:"#53B9C6", padding:"10px", borderRadius:"5px",color:"#ffff"}}/>
                </div>
                <div className="sf__header">
                    <h4>{title}</h4>
                </div>
                <div className="sf__disc">
                    <p>{desc}</p> 
                </div>

            </div>

        </div>
    )
}

export default SpecialFeatureComponent
