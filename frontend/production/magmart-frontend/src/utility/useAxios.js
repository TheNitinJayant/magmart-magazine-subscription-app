import React, {useEffect, useState} from 'react';
import axios from "axios";

const UseAxiosGet = (url)=> {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setLoading(true);
        axios.get(url)
            .then((response)=> setData(response.data))
            .catch((err)=> setError(err))
            .finally(()=> setLoading(false));
    });

    return {data, loading, error};
}

export default { UseAxiosGet };