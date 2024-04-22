import FormNewProject from "@/forms/FormNewProject/FormNewProject";
import React from "react";
import "./ListadoInsumos.scss";

export default function ListadoInsumos() {
  return (
    <section className="ListadoInsumos">
      <div className="formTest">
        <FormNewProject />
      </div>
    </section>
  );
}
