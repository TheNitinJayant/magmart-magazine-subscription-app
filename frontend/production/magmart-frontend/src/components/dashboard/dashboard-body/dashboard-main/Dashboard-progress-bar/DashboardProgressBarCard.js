import ProgressBarExport from "./ProgressBarComponent/ProgressBarExport";
import './DashboardProgressBarCard.scss'
import { useEffect,useState } from "react";
import AuthenticationData from "../../../../../authentication/AuthenticationData";
import AuthAxios from "../../../../../authentication/AuthAxios";
import { SUBSCRIBED } from "../../../../../BackendRoutes";
function DashboardProgressBarCard() {

    const currentUser = AuthenticationData.getUser();

    const [countGraph, setCountGraph] = useState('');
    const [countCart,setCountCart] = useState('');
    const [subListData, setSubListData] = useState([]);
    const [apiError, setApiError] = useState(null);
    const [apiLoading, setApiLoading] = useState(true);

    const [isUpdating, setIsUpdating] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [toggleRefresh, setToggleRefresh] = useState(false);

    const [previousData, setPreviousData] = useState(null);

    useEffect(() => {
        console.log("dashboard user");
        setApiLoading(true);
        setApiError(null);
        AuthAxios({
            method: "get",
            url: `${SUBSCRIBED}/${currentUser.user_id}`,
        })
            .then((response) => {
                // console.log(response.data);
                let newData = response.data.map((row) => {
                    return { ...row, id: row.mag_id };
                });
                console.log(newData[0].subscription.sub_time);
                // console.log("count",countGraph);
                setCountGraph(newData[0].subscription.sub_time)
                setApiError(null);
                
            })
            .catch((err) => {
                setApiError(err);
            })
            .finally(() => {
                setApiLoading(true);
                setTimeout(() => {
                    setApiLoading(false);
                }, 2000);
            });


    }, [toggleRefresh]);


    return (
        <div className="dash__progress">
            <div className="progressBar__main">
                <ProgressBarExport valueEnd={countGraph*5}/>
                {
                    console.log()
                }
            </div>
            <div className="progressBar__details">
                <h4>Days Left: 90/12</h4>
                <h4>Plan: Premium</h4>
            </div>
            
        </div>
    )
}

export default DashboardProgressBarCard
