import React from "react";
import Spinner from "../component/layouts/spinner.js";
import User from "./user";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    console.log(loading);
    return (
      <div className="grid-3">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
