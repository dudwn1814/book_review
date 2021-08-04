import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card } from 'antd';
import superturtle from 'C:/Users/dgdg1/book_review_app/src/AfterLogin/superturtle.jpg'; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
}));

export default function BookCard() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <Card
                hoverable
                style={{ width: {superturtle}.width }}
                cover={<img alt="example" src={superturtle} />}
            />    
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <Card
                hoverable
                style={{ width: {superturtle}.width }}
                cover={<img alt="example" src={superturtle} />}
          />    
          </Paper>
        </Grid>
        <Grid item xs={4}>
        <Paper className={classes.paper}>
          <Card
                hoverable
                style={{ width: {superturtle}.width }}
                cover={<img alt="example" src={superturtle} />}
          />    
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
