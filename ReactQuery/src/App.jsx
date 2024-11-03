import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useMutation, useQuery } from "react-query";

function App() {
  /*   const { data, isLoading, isError, refetch } = useQuery(
    ["posts"],
    () => {
      return fetch("https://jsonplaceholder.typicode.com/posts").then(
        (response) => response.json()
      );
    },
    { enabled: false }
  );
  if (isLoading) {
    return <div>Loading...</div>;
  } */

  const { data, mutate, isLoading, reset } = useMutation(
    ["users"],
    (newPost) => {
      return fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: { "Content-Type": "application/json ; charset=UTF-8" },
      }).then((response) => response.json());
    }
  );

  if (isLoading) {
    return <div>Loading</div>;
  }
  console.log(data, "mutation data");
  return (
    <div>
      <button
        onClick={() =>
          mutate({ title: "deneme", body: "deneme-body", userId: 1 })
        }
      >
        Veri Ekle
      </button>
      <button onClick={() => reset()}>Veri Reset</button>
      {/*       <button onClick={() => refetch()}>Veri Cek</button>
      <div>
        {data?.map((item, i) => {
          return <div key={i}>{item.title}</div>;
        })}
      </div> */}
    </div>
  );
}

export default App;
