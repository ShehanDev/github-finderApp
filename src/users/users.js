import React from "react";
import Spinner from "../component/layouts/spinner";
import User from "./user";

const Users = ({ users, loading }) => {
  if (loading) {
    <Spinner />;
  } else {
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
