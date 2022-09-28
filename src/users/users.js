import React, { Component } from "react";
import User from "./user";
class Users extends Component {
  state = {
    users: [
      {
        id: "id",
        login: "mojombo",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
      },
      {
        id: "id",
        login: "pjhyett",
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/defunkt",
      },
      {
        id: "id",
        login: "wycats",
        avatar_url: "https://avatars.githubusercontent.com/u/4?v=4",
        html_url: "https://github.com/ezmobius",
      },
    ],
  };
  render() {
    return (
      <div className="grid-3">
        {this.state.users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
const userStyle = {
  display: "grid",
  gridTemplateCloums: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
