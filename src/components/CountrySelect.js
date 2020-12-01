import React, { useEffect, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ApiContext } from '../ContextAPI/GlobalContext';

import ReactTooltip from "react-tooltip";
import MapChart from './MapChart'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(10),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CountrySelect() {
  const classes = useStyles();
  const [countryName, setCountryName] = React.useState([{}]);
  const [currentCountry, setCurrentCountry] = React.useState("Global")

  const apiContext = useContext(ApiContext);

  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setCurrentCountry(event.target.value)
    apiContext.callApi(event.target.value)
  };

  useEffect(() => {
      async function fetchCountries()
      {
        const response = await fetch("https://disease.sh/v3/covid-19/countries")
        const data = await response.json()
        setCountryName(data)
      }
      fetchCountries();
  }, [])
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentCountry}
          onChange={handleChange}
        >
            <MenuItem key={0} selected value="Global">Global</MenuItem>
            {countryName.map((country, ind) => {
                return(
                <MenuItem key={ind} value={country.country}>{country.country}</MenuItem>
                )
            })}    
        </Select>
      </FormControl>
      <br />
      <MapChart setTooltipContent={setContent} setCurrentCountry={setCurrentCountry}/>
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}