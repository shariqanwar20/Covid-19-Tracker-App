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
            setApiData(data)
            setFetching(false)
        }
        fetchApi();
    }, [apiContext.api])

    useEffect(() => {
        async function fetchDailyApi()
        {
            const respone = await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
            const data = await respone.json();
            apiContext.chartDataArr[1](data)
        }
        fetchDailyApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
