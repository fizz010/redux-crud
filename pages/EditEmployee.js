// import e from 'cors'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { updateUser } from '../redux/actionCreator'

const EditEmployee = () => {
    const [state,setState]=useState({
        name:"",
        addresss:"",
        stream:"",
        email:""
    })
    // const {id}=useParams()
    const {name,addresss,stream,email}=state
    const location=useLocation();
    let dispatch=useDispatch()
    let navigate = useNavigate()

const handleSubmit=(e)=>{

    dispatch(updateUser(location.state,state));
    e.preventDefault();
    
    //navigate("/")
}
const handleInputChange=(e)=>{
      let {name,value}=e.target;
    setState({...state,[name]:value})
}

  return (
    <div>
      {/* <h1>Add</h1> */}
      <div className="row">
                <div className="col-md-6 offset-md-3 border  rounded p-4 mt-2 shadow bg-secondary">
                    <h2 className="text-center m-4">Update Employee</h2>
                    <form onSubmit={(e) =>handleSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-lable">
                                Name
                            </label>
                            <input type="text" className="form-control" placeholder="Enter your name" name="name" value={name} onChange={handleInputChange}  />
                        </div>
                        {/*  */}
                        <div className="mb-3">
                            <label htmlFor="Address" className="form-lable">
                                Address
                            </label>
                            <input type="text" className="form-control" placeholder="Employee Address" name="addresss" value={addresss} onChange={handleInputChange} />
                        </div>
                        {/*  */}
                        <div className="mb-3">
                            <label htmlFor="Department" className="form-lable">
                                Department
                            </label>
                            <input type="text" className="form-control" placeholder="Employee Department" name="stream" value={stream} onChange={handleInputChange} />
                        </div>
                        {/*  */}
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-lable">
                                E-mail
                            </label>
                            <input type="text" className="form-control" placeholder="Enter your e-mail address" name="email" value={email} onChange={handleInputChange}  />
                        </div>
                        {/*  */}
                        <button type="submit" className="btn btn-outline-dark" >Submit</button>
                        <Link className="btn btn-outline-danger mx-2" to="/">Cancle</Link>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default EditEmployee
