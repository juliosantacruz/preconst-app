import React from "react";
import "./BtnAddProject.scss";
import { useUxStore } from "@/store/uxStore";
export default function BtnAddProject() {
  const { openModalFormProject } = useUxStore();

  const handleAddBtn = () => {
    openModalFormProject(true);
  };
  return (
    <>
      <div className="addBtn">
        <button onClick={handleAddBtn}>+</button>
      </div>
    </>
  );
}
