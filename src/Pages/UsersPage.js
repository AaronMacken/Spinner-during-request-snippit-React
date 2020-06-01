import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "../Users/Users";
import Spinner from "../Spinner";
import AddUser from "../Users/AddUser";

export default function UsersPage() {
  let [users, setUsers] = useState([]);
  let [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  let getUsers = async () => {
    try {
      setLoading(true);
      let res = await axios.get("https://reqres.in/api/users");
      let { data } = res;
      setUsers(data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  let createNewUser = async (data) => {
    try {
      setLoading(true);
      let res = await axios.post("https://reqres.in/api/users", data);
      setUsers([...users, res.data]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  let updateUser = async (id, updateData) => {
    try {
      setLoading(true);
      let res = await axios.put(`https://reqres.in/api/users${id}`, {
        updateData,
      });

      let updateInfo = res.data.updateData;

      let updatedUsers = users.map((user) => {
        if (user.id === id) {
          return {
            email: updateInfo,
            id: id,
          };
        }
        return user;
      });

      setUsers(updatedUsers);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  let deleteUser = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`https://reqres.in/api/users${id}`);
      setUsers(users.filter((e) => e.id !== id));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  let content = isLoading ? (
    <Spinner />
  ) : (
    <Users users={users} delete={deleteUser} update={updateUser} />
  );
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Users App: State And Props</h1>
      <AddUser createNewUser={createNewUser} />
      <div className="content-div">{content}</div>
    </div>
  );
}
