import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';

import Paper from '@material-ui/core/Paper';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  const [followers, setFollowers] = useState('...')
  const [subscriptions, setSubscriptions] = useState('...')
  const [repos, setRepos] = useState('...')

  const fetchFollower = async () => {
    const result = await axios.get(props.user.followers_url)
    setFollowers(result.data.length)
  }

  const fetchRepos = async () => {
    const result = await axios.get(props.user.repos_url)
    setRepos(result.data.length)
  }

  const fetchSubscriptions = async () => {
    const result = await axios.get(props.user.subscriptions_url)
    setSubscriptions(result.data.length)
  }

  useEffect(() => {
    fetchFollower()
    fetchRepos()
    fetchSubscriptions()
  }, [])

  return (
    <Card className={classes.root} align="left" style={{
      backgroundColor: "#161616", color: "#eff",
    }}>
      <CardHeader
        avatar={
          <Avatar alt={props.user.login} src={props.user.avatar_url} aria-label="recipe" className={classes.avatar}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={props.user.login}
      />

      <Divider  />

      <CardContent>

      <Grid container spacing={3}>
        <Grid item xs align="center">
          <Paper style={{
      backgroundColor: "#161616", color: "#ffcc29"
    }} elevation={0} className={classes.paper}>
            <div style={{textTransform: "uppercase", color: "#fff"}}>Followers</div> <br />
            {followers}
          </Paper>
        </Grid>
        {/* <Divider orientation="vertical" flexItem /> */}
        <Grid item xs align="center">
          <Paper style={{
      backgroundColor: "#161616", color: "#ffcc29"
    }} elevation={0} className={classes.paper}>
          <div style={{textTransform: "uppercase", color: "#fff"}}>Repos</div> <br />
            {repos}
          </Paper>
        </Grid>
        {/* <Divider orientation="vertical" flexItem /> */}
        <Grid item xs align="center">
          <Paper style={{
      backgroundColor: "#161616", color: "#ffcc29"
    }} elevation={0} className={classes.paper}>
          <div style={{textTransform: "uppercase", color: "#fff"}}>Subscriptions</div> <br />
            {subscriptions}
          </Paper>
        </Grid>
      </Grid>
      </CardContent>
    </Card>
  );
}
