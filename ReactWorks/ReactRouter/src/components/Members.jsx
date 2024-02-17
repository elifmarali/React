import React from "react";
import { useSearchParams } from "react-router-dom";

function Members() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get("filter") === "active";
  return (
    <>
      <div>Members</div>
      <button
        onClick={() => {
          setSearchParams({ filter: "active" });
        }}
      >
        Aktif Uyeleri Getir
      </button>
      <button
        onClick={() => {
          setSearchParams();
        }}
      >
        Tum Uyeleri Getir
      </button>
      {isActive ? <h2>Aktif Uyeler</h2> : <h2>Tum Uyeler</h2>}
    </>
  );
}

export default Members;
