import React from "react";
import User from "./user";

const Users = (props) => {
  return (
    <div className="grid-3">
      {props.users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
