import './DashboardCard.scss';
import MenuBookIcon from '@mui/icons-material/MenuBook';
function DashboardCard({cardIcon,cardTitle,cardValue,cardColor}) {
    const CardIcon = cardIcon;
    return (
        <div className="dashboard__card">
            <div className="dashboard__container">
                <div className="dashboard__container__left" style={{backgroundColor:`${cardColor}`}}>
                    <CardIcon style={{height:"50px", width:"50px",color:"white"}}/>
                </div>
                <div className="dashboard__container__right">
                    <h2>{cardTitle}</h2>
                    <h3>{cardValue}</h3>
                </div>
            </div>
            
        </div>
    )
}

export default DashboardCard
