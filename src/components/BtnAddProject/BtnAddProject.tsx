import React, { useState } from 'react'
import './BtnAddProject.scss'
export default function BtnAddProject() {
  const [viewForm, setViewForm] = useState(false);

  const handleAddBtn = () => {
    setViewForm(true);
  };
  return (
    <>
      <div className="addBtn">
        <button onClick={handleAddBtn}>+</button>
      </div>

      {viewForm && (
        <div className="formContainer">
          {/* <CotizacionForm modal={{ viewForm, setViewForm }} /> */}
        </div>
      )}
    </>
  );
}
