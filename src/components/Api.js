import React, { useEffect, useContext, useState } from 'react'
import { ApiContext } from '../ContextAPI/GlobalContext'

export const Api = () => {
    let [apiData, setApiData] = useState({});
    let [fetching, setFetching] = useState(false);
    const apiContext = useContext(ApiContext);
    useEffect(() => {
        async function fetchApi()
        {
            setFetching(true)
            const response = await fetch(apiContext.api)
            const data = await response.json();
            setFetching(false)
            setApiData(data)
        }
        fetchApi();
    }, [apiContext.api])

    if (fetching)
    {
        apiContext.dataArr[1]('loading')
    }
    else
    {
        apiContext.dataArr[1](apiData)
    }
    
    return (
        <>
            
        </>
    )
}
