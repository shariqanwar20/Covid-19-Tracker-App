import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ApiContext } from '../ContextAPI/GlobalContext';
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

export const PaperData = () => {
    const classes = useStyles();
    const classTypography = styleTypography();

    const apiContext = useContext(ApiContext);

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
                                <NumberFormat value={apiContext.dataArr[0] === 'loading' ? 'loading' : apiContext.dataArr[0].cases} displayType={'text'} thousandSeparator={true} />  
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
                                <NumberFormat value={apiContext.dataArr[0] === 'loading' ? 'loading' : apiContext.dataArr[0].deaths} displayType={'text'} thousandSeparator={true} />
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
                                <NumberFormat value={apiContext.dataArr[0] === 'loading' ? 'loading' : apiContext.dataArr[0].recovered} displayType={'text'} thousandSeparator={true} />
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
