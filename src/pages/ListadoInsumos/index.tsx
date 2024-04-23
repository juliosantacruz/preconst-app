// import FormNewProject from "@/forms/FormNewProject/FormNewProject";
import React from "react";
import "./ListadoInsumos.scss";
// import FormPartida from "@/forms/FormPartida/FormPartida";
// import FormInsumo from "@/forms/FormInsumo/FormInsumo";
import FormConcepto from "@/forms/FormConcepto/FormConcepto";

export default function ListadoInsumos() {
  return (
    <section className="ListadoInsumos">
      <div className="formTest">
        <FormConcepto/>
      </div>
    </section>
  );
}
