import DashboardCard from '../DashboardCard/DashboardCard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import './DashboardHome.scss'
import DashboardProgressBarCard from '../Dashboard-progress-bar/DashboardProgressBarCard';
import { useEffect, useState } from 'react';
import AuthAxios from '../../../../../authentication/AuthAxios';
import AuthenticationData from '../../../../../authentication/AuthenticationData';
import { SHOWCART, SUBSCRIBED, SUBSCRIPTIONS } from '../../../../../BackendRoutes';
function DashboardHome() {

    const currentUser = AuthenticationData.getUser();

    const [countData, setCountData] = useState('');
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
                setCountData(newData.length);
                console.log(newData.length);
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
                url: `http://localhost:8080/subscriptions`,
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


                // cart

                AuthAxios({
                    method: "get",
                    url: `${SHOWCART}/${currentUser.user_id}`,
                })
                    .then((response) => {
                        // console.log(response.data);
                        let cartData = response.data.map((row) => {
                            return { ...row, id: row.mag_id };
                        });
                        console.log(cartData.length);
                        setCountCart(cartData);
                        console.log("cart",countCart.length);
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
        <div className="dashboard__home">
            <div className="dashboard__summary">
                { 
                    console.log(countData)
                }
                <DashboardCard cardIcon={MenuBookIcon} cardTitle="Total Subscriptions" cardValue={countData} />
                <DashboardCard cardIcon={WatchLaterIcon} cardTitle="Total Cart" cardValue={countCart.length} cardColor="#ff0000" />
                <DashboardCard cardIcon={NotificationsActiveIcon} cardTitle="Remainders" cardValue="1" cardColor="#00ACC1" />
            </div>

            <div className="dashboard__progress">
                {/* <DashboardProgressBar/> */}
                <DashboardProgressBarCard/>
            </div>

        </div>
    )
}

export default DashboardHome
