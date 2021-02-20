import { useTypedSelector } from "./hooks/useTypedSelector";
import { useUserActions } from "./hooks/useActions";
import { useEffect } from "react";

function App() {
  const { getUsers } = useUserActions();
  const { data, error, loading } = useTypedSelector((state) => state.user);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h3>Users from JSON Placeholder</h3>
      {data &&
        data.map((row) => (
          <div key={row.id}>
            <h1>{row.email}</h1>
          </div>
        ))}
    </div>
  );
}

export default App;
