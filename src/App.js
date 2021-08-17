import { useEffect, useState } from 'react'
import AppBar from './AppBar'
import axios from 'axios'
import Card from './Card'
import Pagination from './Pagination'
import Grid from '@material-ui/core/Grid';

import "./App.css"

import { useSelector } from "react-redux"

import Progress from "./Progress"
import Button from '@material-ui/core/Button';

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "./store/actions/index"

import Search from "./Search"

function App() {

  const [users, setUsers] = useState(null) 

  const state = useSelector((state) => (state))

  const fetch = async() => {

    const res = await axios.get(`https://api.github.com/users?since=${state.PaginationReducer.since}&per_page=${state.PaginationReducer.per_page}`)
    setUsers(res.data)

  } 

  const dispatch = useDispatch()
  const { SET_SEARCH } = bindActionCreators(actionCreators, dispatch)

  const returnBack = (e) => {
    e.preventDefault()
    SET_SEARCH({search: null})
  }

  useEffect(() => {
    fetch()
    console.log("hola")
  }, [state.PaginationReducer.since, state.PaginationReducer.per_page])

  return (
    <div style={{ overflowX: "hidden", backgroundColor:"#393E46",}}>
      <AppBar></AppBar>
      
      <div style={{paddingTop: "2.5%"}}></div>

      <div style={{padding: "0 2.5%"}}>
        { 
          state.PaginationReducer.search ?
          <div align="center">
            <Search></Search>
            <Button onClick={returnBack} variant="contained" color="primary"  style={{ marginBottom: "5%"}}>
              Return Back
            </Button> 
          </div>
          : 
          <>
            {
              state.PaginationReducer.loading ? <><Progress></Progress> <br /></> : "" 
            }

            <Grid container spacing={3}>

            {
                users ? users.map((user) => (
                  <Grid item xs>
                    <Card key={user.id} user={user}></Card>
                  </Grid>
                )) : ""
            }
            </Grid>

            <Pagination></Pagination>
          </>
        }
      </div>

    </div>
  );
}

export default App;
