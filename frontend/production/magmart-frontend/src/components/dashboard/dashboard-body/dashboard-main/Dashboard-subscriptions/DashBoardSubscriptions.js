import { useEffect, useState } from 'react';
import AuthAxios from '../../../../../authentication/AuthAxios';
import AuthenticationData from '../../../../../authentication/AuthenticationData';
import { MAGAZINES, SUBSCRIBED } from '../../../../../BackendRoutes';
import RecomendationCard from './Dashboard-subscriptions-components/RecomendationCard/RecomendationCard';
import './DashboardSubscriptions.scss';
import SubListComponent from './SubListComponent/SubListComponent';
function DashBoardSubscriptions() {

    const currentUser = AuthenticationData.getUser();

    const [recommendData, setRecommendData] = useState([]);
    const [subListData, setSubListData] = useState([]);
    const [apiError, setApiError] = useState(null);
    const [apiLoading, setApiLoading] = useState(true);

    const [isUpdating, setIsUpdating] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [toggleRefresh, setToggleRefresh] = useState(false);

    const [previousData, setPreviousData] = useState(null);

    useEffect(() => {
        console.log("use effect called");
        setApiLoading(true);
        setApiError(null);
        AuthAxios({
            method: "get",
            url: `${MAGAZINES}`,
        })
            .then((response) => {
                // console.log(response.data);
                let newData = response.data.map((row) => {
                    return { ...row, id: row.mag_id };
                });
                setRecommendData(newData);

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


            AuthAxios({
                method: "get",
                url: `${SUBSCRIBED}/${currentUser.user_id}`,
            })
                .then((response) => {
                    // console.log(response.data);
                    let subData = response.data.map((row) => {
                        return { ...row, id: row.mag_id };
                    });
                    setSubListData(subData);
    
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
        <div className="dashboard-subscriptions">
            <h4>Recomended</h4>
            <div className="Recomendation">
                <div className="RecomendationCard__row">
                    { 
                        recommendData.map((item)=>{
                            // console.log(item)
                            return <RecomendationCard RecomendationTitle={item.mag_name} Author={item.publisher.pub_name} imageURL={item.image} />
                        })
                        // console.log(apiData.length)
                    }
                </div>

            </div>

            <h4>MyList</h4>
            <div>
                {
                    subListData.map((item)=>{
                        return <SubListComponent Title={item.subscription.magazine.mag_name} Author={item.subscription.magazine.publisher.pub_name} imageURL={item.subscription.magazine.image}/>
                    })
                }
            </div>

        </div>
    )
}

export default DashBoardSubscriptions
