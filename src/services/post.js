import {get, postJSON } from "./request"

/*
import {post,get} from "./request"  
export const newPost = data => post('https://jsonplaceholder.typicode.com/posts', data)
*/

export const getPosts = () => get(process.env.REACT_APP_API_URL +'/posts')

export const getPostDetail = id => get(process.env.REACT_APP_API_URL +`/posts/${id}`)
  
export const newPost = data => postJSON(process.env.REACT_APP_API_URL +'/posts', data)