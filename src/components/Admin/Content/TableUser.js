import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { getAllUsers } from "../../../services/apiservices";
const TableUser = () => {
  const [listUser, setListUser] = useState([]);
  useEffect(()=>{
        fetchListUser()
  },[])

  const fetchListUser = async() =>{
       let res = await getAllUsers();
       if(res.EC===0){
        setListUser(res.DT)
       }
       console.log("listUser",res)
  }
  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((user,index) => {
            return (
                <tr key={`table-user-${index}`}>
                <th scope="row">{index+1}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                    <button className="btn btn-info">View</button>
                    <button className="btn btn-warning mx-3">Update</button>
                    <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })
        }
        {listUser && listUser.length ===0 && 
            <tr>
                <td colSpan={'4'}>Not found data</td>
            </tr>
        }
          
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
