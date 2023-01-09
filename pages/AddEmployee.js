// import e from 'cors'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { addUsers } from '../redux/actionCreator'

const AddEmployee = () => {
    const [state,setState]=useState({
        name:"",
        addresss:"",
        stream:"",
        email:""
    })

    const {name,addresss,stream,email}=state

    let dispatch=useDispatch()
    let navigate = useNavigate()

const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addUsers(state))
    navigate("/")
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
                    <h2 className="text-center m-4">Add Employee</h2>
                    <form onSubmit={(e) => handleSubmit(e)}>
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
                        <button type="submit" className="btn btn-outline-dark">Submit</button>
                        <Link className="btn btn-outline-danger mx-2" to="/">Cancle</Link>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default AddEmployee
