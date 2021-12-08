import React, {useEffect, useState} from 'react';

import AuthAxios from "../authentication/AuthAxios";

const useAuthAxiosGet = (url, change=[], log=false, setDataExternal=null)=> {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


        setLoading(true);
        AuthAxios.get(url)
            .then((response)=> {
                const JsonData = JSON.parse(response.data.json);
                setData(JsonData);
                if(setDataExternal!=null){
                    setDataExternal(JsonData);
                }
                if(log===true){
                    console.log("API data is ",response.data);
                }

            })
            .catch((err)=> setError(err))
            .finally(()=> {
                setLoading(false);
                return {data, loading, error};
            });

    return {data, loading, error};
}

const useAuthAxiosPost = (url)=> {

};

export default { useAuthAxiosGet, useAuthAxiosPost };