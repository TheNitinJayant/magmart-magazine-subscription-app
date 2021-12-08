import React from 'react';
import DashboardHome from './dashboard-body/dashboard-main/Dashboard-home/DashboardHome';

function DashboardTempHome(props) {
    return (
        <div>
            {/* this is home */}
            <DashboardHome/>
        </div>
    );
}
function DashboardTempSettings(props) {
    return (
        <div>this is settings</div>
    );
}
function DashboardTempSubscriptions(props) {
    return (
        <div>this is subs</div>
    );
}


export { DashboardTempHome, DashboardTempSettings, DashboardTempSubscriptions };