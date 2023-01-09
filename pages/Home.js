import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser, loadUsers } from '../redux/actionCreator';

function Home() {
const navigate=useNavigate();
    const {users} = useSelector(state=> state.data)
 console.log(users);
    let dispatch=useDispatch();

    useEffect(()=>{
        dispatch(loadUsers())
    },[dispatch])

    const handleDelete=(id)=>{
        dispatch(deleteUser(id))
    }
    const handleUpdate=(id)=>{
 
       navigate("/update" ,{state:id})
    }

  return (
    <div>
        <div className="container">
            <Link to="/add"  className="btn btn-dark my-5">Add Employee</Link>
        </div>
      <div className="py-4">
                <table className="table table-bordered table-striped table-hover shadow">
                    <thead className="conts bg-secondary">
                        <tr>
                            <th scope="col">Employee_Id</th>
                            <th scope="col">Employee_Name</th>
                            <th scope="col">Employee_Address</th>
                            <th scope="col">Employee_Department</th>
                            <th scope="col">Employee_Email</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                             users.map((user)=>(
                                <tr key={user.id}>
                                 {/* <th scope="row" > 
                                    {index + 1}
                                </th> */}
                                    <td><b>{user.id}</b></td>
                                    <td>{user.name}</td>
                                    <td>{user.addresss}</td>
                                    <td>{user.stream}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        
                                        {/* <Link className="btn btn-outline-dark mx-2" to={`/updateuser/${user.id}`}>Update</Link> */}
                                        {/* <Link to={`/update/${user.id}`} className="btn btn-outline-dark mx-2" >Update</Link> */}
                                        <button className="btn btn-outline-danger mx-2" onClick={()=>handleUpdate(user.id)} >Update</button>
                                        <button className="btn btn-outline-danger mx-2" onClick={()=>handleDelete(user.id)} >Delete</button>
                                        <button className="btn btn-outline-primary mx-2">View</button>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default Home
