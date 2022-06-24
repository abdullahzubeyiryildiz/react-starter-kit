import {get} from "./request" 
 

export const getUsers = () => get(process.env.REACT_APP_API_URL + '/users')
 