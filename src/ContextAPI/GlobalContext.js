import React, { createContext, useReducer } from 'react'
import ApiReducer from './ApiReducer'

const initialApi = "https://disease.sh/v3/covid-19/all"//global wali api
export const ApiContext = createContext(initialApi);

export const GlobalProvider = ({children}) => {
    let [state, dispatch] = useReducer(ApiReducer, initialApi)    

    const callApi = (country) => {
        dispatch({
            type: "CALLAPI",
            country: country
        })
    }
    return(
        <ApiContext.Provider value={
            {
                api : state,
                callApi
            }
            
        }>
            {children}
        </ApiContext.Provider>
    )
}
