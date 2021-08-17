import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "./store/actions/index"

import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Card from "./Card"

import Progress from "./Progress"

export default function Search() {

    const state = useSelector((state) => (state))

    const [user, setUser] = useState(null)

    const dispatch = useDispatch()
    const { START_LOADING, STOP_LOADING } = bindActionCreators(actionCreators, dispatch)

    const [disp, setDisp] = useState('Loading')

    const fetch = () => {
        axios.get(`https://api.github.com/users/${state.PaginationReducer.search}`)
        .then(res => {
            START_LOADING()
            setTimeout(() => {
                STOP_LOADING()
                setUser(res.data)
                console.log(res.data)
            }, 2500)
        })
        .catch(err => {
            START_LOADING()
            setTimeout(() => {
                STOP_LOADING()
                setDisp('No user found')
            }, 2500)
        })
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div>
            {
                state.PaginationReducer.loading ? <><Progress></Progress> <br /></> : "" 
            }
            {
                user ? <Card user={user}></Card> : <h2 style={{textTransform: "uppercase"}}>{disp}</h2>
            } 
          <br />
        </div>
    )
}
