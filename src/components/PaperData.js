import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'rgb(230, 230, 230)',
        borderRadius: 8,
    },
}));

const styleTypography = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
    heading: {
        fontWeight: 'bold',
    }
});

export const PaperData = ({apiData}) => {
    const classes = useStyles();
    const classTypography = styleTypography();

    if (apiData.loading)
    {
        return (
            <div>
                <Grid container spacing={3} className={classes.root}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper} elevation={3}>
                            <div className={classTypography.root}>
                                <Typography variant="body1" gutterBottom className={classes.heading}>
                                    Infected
                                </Typography>
                                <Typography variant="h5" gutterBottom style={{color: 'orange', fontWeight:'bolder'}}>
                                    loading
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    People Infected
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper} elevation={3}>
                            <div className={classTypography.root}>
                                <Typography variant="body1" gutterBottom className={classes.heading}>
                                    Deaths
                                </Typography>
                                <Typography variant="h5" gutterBottom style={{color: 'red', fontWeight:'bolder'}}>
                                    loading
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    Number Of Deaths
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper} elevation={3} style={{borderSpacing: 8, borderColor: 'green',}}>
                            <div className={classTypography.root}>
                                <Typography variant="body1" gutterBottom className={classes.heading}>
                                    Recovered
                                </Typography>
                                <Typography variant="h5" gutterBottom style={{color: 'green', fontWeight:'bolder'}}>
                                    loading
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    People Recovered
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
    else
    {
        return (
            <div>
                <Grid container spacing={3} className={classes.root}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper} elevation={3}>
                            <div className={classTypography.root}>
                                <Typography variant="body1" gutterBottom className={classes.heading}>
                                    Infected
                                </Typography>
                                <Typography variant="h5" gutterBottom style={{color: 'orange', fontWeight:'bolder'}}>
                                    <NumberFormat value={apiData.countryData.cases} displayType={'text'} thousandSeparator={true} />  
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    People Infected
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper} elevation={3}>
                            <div className={classTypography.root}>
                                <Typography variant="body1" gutterBottom className={classes.heading}>
                                    Deaths
                                </Typography>
                                <Typography variant="h5" gutterBottom style={{color: 'red', fontWeight:'bolder'}}>
                                    <NumberFormat value={apiData.countryData.deaths} displayType={'text'} thousandSeparator={true} />
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    Number Of Deaths
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper} elevation={3} style={{borderSpacing: 8, borderColor: 'green',}}>
                            <div className={classTypography.root}>
                                <Typography variant="body1" gutterBottom className={classes.heading}>
                                    Recovered
                                </Typography>
                                <Typography variant="h5" gutterBottom style={{color: 'green', fontWeight:'bolder'}}>
                                    <NumberFormat value={apiData.countryData.recovered} displayType={'text'} thousandSeparator={true} />
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    People Recovered
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
