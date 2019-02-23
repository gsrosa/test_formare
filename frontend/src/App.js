import React from "react";
import "./App.css";
import axios from "axios";

const App = ({}) => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:3000/generate").then(response => {
      response.data.sort((a, b) => {
        return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
      });
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="app">
      {users.map(user => {
        const group = user.name.trim().match(/^[a-f]/g)
          ? "1"
          : user.name.trim().match(/^[g-m]/g)
          ? "2"
          : user.name.trim().match(/^[n-s]/g)
          ? "3"
          : "4";

        return (
          <div className="user-card">
            <img src={user.picture} />
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{group}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
