import React, { useEffect, useState } from "react";
import List from "./List";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Something went wrong");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>User Directory</h1>

      {loading && <p className="loading">⏳ Loading...</p>}
      {error && <p className="error">⚠️ {error}</p>}

      {!loading && !error && (
        <List
          items={users}
          renderItem={(user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          )}
        />
      )}
    </div>
  );
}

export default App;