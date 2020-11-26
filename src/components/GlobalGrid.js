import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { PaperData } from './PaperData';
import CountrySelect from './CountrySelect';

import Chart from './Chart'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function GlobalGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/*display three papers for info*/}
        <Grid item xs={5}>
            <PaperData />
            <CountrySelect />
        </Grid>

        <Grid item xs={7}>
            {/*display dropdown and chart */}
            <Chart />
        </Grid>
      </Grid>
    </div>
  );
}
 