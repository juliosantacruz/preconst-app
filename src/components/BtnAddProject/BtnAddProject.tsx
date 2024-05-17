import React from "react";
import "./BtnAddProject.scss";

type Props={
  openModal:(value:boolean)=>void
}
export default function BtnAddProject({openModal}:Props) {

  const handleAddBtn = () => {
    openModal(true);
  };
  return (
    <>
      <div className="addBtn">
        <button onClick={handleAddBtn}>+</button>
      </div>
    </>
  );
}
