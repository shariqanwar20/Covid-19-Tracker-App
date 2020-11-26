const ApiReducer = (state, action) => {

    switch (action.type){
        case "CALLAPI" :
            {
                if (action.country === "Global")
                    state = "https://disease.sh/v3/covid-19/all"
                else    
                    state = "https://disease.sh/v3/covid-19/countries/" + action.country
                return state;
            }
            
        default:
            {
                state = "https://disease.sh/v3/covid-19/all";
                return state;
            }
            
    }
}

export default ApiReducer;