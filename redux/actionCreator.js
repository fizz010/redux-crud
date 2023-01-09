import axios from "axios";
// import App from "../App";
import * as types from "./actionType";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userAdded = () => ({
  type: types.ADD_USER,
});

const userDeleted = () => ({
  type: types.DELETE_USER,
});

const userUpdated = (user1) => ({
  type: types.UPDATE_USER,
  payload:user1,
});

const singleUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

// var cors = require('cors')

// App.use(cors()) // Use this after the variable declaration

 export const loadUsers=()=>{
  return  function(dispatch){
   axios.get(`http://localhost:8080/emps`).then((resp)=>{

      dispatch(getUsers(resp.data));
    })
    .catch((error)=>console.log(error))
  }
 }

 export const addUsers=(user)=>{
  return  function(dispatch){
   axios.post(`http://localhost:8080/emp`,user).then((resp)=>{
 
      dispatch(userAdded());
      dispatch(loadUsers())
    })
    .catch((error)=>console.log(error))
  }
 }

 export const deleteUser=(id)=>{
  return  function(dispatch){
   axios.delete(`http://localhost:8080/emp/${id}`).then((resp)=>{
      console.log("resp",resp);
      dispatch(userDeleted());
      dispatch(loadUsers())
    })
    .catch((error)=>console.log(error))
  }
 }

 export const updateUser=(id,user1)=>{
 
  return  function(dispatch){
   
   axios.put(`http://localhost:8080/emp/${id}`,user1).then((resp)=>{
      // const user2=resp.data
      // console.log("resp",resp);
      console.log(resp);
      dispatch(userUpdated(resp.data));
      dispatch(loadUsers())
    })
    .catch((error)=>console.log(error))
  }
 }

 