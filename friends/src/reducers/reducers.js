import axios from 'axios'
import { FETCHING, SUCCESS, FAILIURE } from '../actions'


const initState = {
 friends : []
}

const reducer = dispatch => {
 dispatch({type: FETCHING})

 axios
 .get('')
 .then(response => {
  dispatch({type:})
 })
 .catch(err => {
  console.log(err)
 })
}