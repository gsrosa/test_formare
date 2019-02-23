import React from "react";
import "./App.css";
import axios from "axios";

const App = ({}) => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:3000/generate").then(response => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="app">
      {users.map(user => (
        <div className="user-card">
          <img src={user.picture} />
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
