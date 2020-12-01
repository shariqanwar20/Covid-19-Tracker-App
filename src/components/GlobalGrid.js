import React, {useState, useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { PaperData } from './PaperData';
import CountrySelect from './CountrySelect';

import Chart from './Chart'
import { ApiContext } from '../ContextAPI/GlobalContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function GlobalGrid() {
  const classes = useStyles();
  const [apiData, setApiData] = useState({})
  //when api loading becomes false, data has been fetched from the api
  const [apiLoading, setApiLoading] = useState(true)
  const apiContext = useContext(ApiContext);

useEffect(() => {
  async function loadAllData()
  {
    setApiLoading(true)
    //fetch the data for displaying on paper and drawing bar charts
    const response = await fetch(apiContext.api);
    const countryApi = await response.json();
    // fetch data for displaying line chart when global is selected
    const response1 = await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
    const dailyApi = await response1.json();

    setApiData({countryData : countryApi, dailyApiData : dailyApi})
    setApiLoading(false)
  }
  loadAllData()
}, [apiContext.api])
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/*display three papers for info*/}
        <Grid item xs={5}>
            <PaperData apiData={{countryData : apiData.countryData, loading : apiLoading}}/>
            <CountrySelect />
        </Grid>

        <Grid item xs={7}>
            {/*display dropdown and chart */}
            {/* you can further make it efficient by only passing the country or daily data*/}
            <Chart apiData={{chartData: apiData, loading: apiLoading}}/>
        </Grid>
      </Grid>
    </div>
  );
}
 