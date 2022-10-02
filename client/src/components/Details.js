import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useParams, useHistory } from 'react-router-dom';


const Details = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { id } = useParams("");
    console.log(id);

    const history = useHistory();


    const getdata = async () => {

        const res = await fetch(`https://crudappreactjs.herokuapp.com/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {

        const res2 = await fetch(`https://crudappreactjs.herokuapp.com/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            history.push("/");
        }

    }

    return (
        <>
        <div className='container'>
        <h1>{getuserdata.name}</h1>
        <h1>{getuserdata.age}</h1>
        <form action="#" className='w-50 mt-5'>
  <div className="row gy-3">
    <div className="col-md-6">
      <div className="border-bottom">
        <input
          className="form-control px-0 border-0 shadow-0"
          type="text"
          name="username"
          id="username"
          placeholder="Name"
        />
      </div>
    </div>
    <div className="col-md-6">
      <div className="border-bottom">
        <input
          className="form-control px-0 border-0 shadow-0"
          type="email"
          name="username"
          id="useremail"
          placeholder="Email Address (will not be published)"
        />
      </div>
    </div>
    <div className="col-md-12">
      <div className="border-bottom">
        <textarea
          className="form-control px-0 border-0 shadow-0"
          rows={5}
          name="usercomment"
          id="usercomment"
          placeholder="Type your comment"
          defaultValue={""}
        />
      </div>
    </div>
    <div className="col-md-12">
      <button className="btn btn-secondary" type="submit">
        Submit Comment
      </button>
    </div>
  </div>
</form>
        </div>
        </>
    )
}

export default Details
