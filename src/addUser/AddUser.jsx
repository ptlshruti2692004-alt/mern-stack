import React, { useState, useEffect } from "react";
import "./adduser.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function AddUser() {
  const users = {
    name: "",
    email: "",
    address: "",
  };

  const [user, setUser] = useState(users);
  const navigate = useNavigate();
  const { id } = useParams();


  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  
  useEffect(() => {
    if (id) {
      axios
        .post(`http://localhost:8000/api/users/${id}`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);


  const submitForm = async (e) => {
    e.preventDefault();
    console.log("Sending user:", user);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/users",
        user
      );

      toast.success(response.data.message, {
        position: "top-right",
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="addUser">
      <Link to="/" className="btn btn-secondary">
        Back
      </Link>

      <h3>Add New User</h3>

      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={inputHandler}
            placeholder="Enter your Name"
          />
        </div>

        <div className="inputGroup">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={inputHandler}
            placeholder="Enter your Email"
          />
        </div>

        <div className="inputGroup">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={inputHandler}
            placeholder="Enter your Address"
          />
        </div>

        <div className="inputGroup">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;



