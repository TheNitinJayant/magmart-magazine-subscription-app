import './SpecialFeature.scss'
import SpecialFeatureComponent from './SpecialFeaturesComponent/SpecialFeatureComponent'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
function SpecialFeature() {
    return (
        <div className="specialFeature" data-aos="fade-up">
            <div className="specialFeature__header">
                <h2>Our Special Feature</h2>
            </div>

            <div className="specialFeatureComponent">
                <SpecialFeatureComponent icon={PeopleAltIcon} title="User Friendly" desc="Easy to use for people are either new or professional" />
                <SpecialFeatureComponent icon={VerifiedUserIcon} title="User Friendly" desc="Official application that is trusted by security" />
                <SpecialFeatureComponent icon={DocumentScannerIcon} title="Flexibility" desc="Tasking can be opened at all existing documents" />
                <SpecialFeatureComponent icon={LocalOfferIcon} title="100% free" desc="This application is completely free, without any charges" />
            </div>

        </div>
    )
}

export default SpecialFeature
 