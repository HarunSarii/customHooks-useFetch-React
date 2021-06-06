import { useFetch } from "./hooks/useFetch";
import "./App.css";

function App() {
  const { response, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    {}
  );

  console.log(response, loading, error);
  return (
    <div className="App">
      <h2>Custom Hook</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        response?.map((result) => (
          <p key={result?.id}>
            {result?.id} - {result?.name}
          </p>
        ))
      )}
    </div>
  );
}

export default App;
