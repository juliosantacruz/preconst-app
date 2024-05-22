import CancelIcon from "@/assets/icons/navbar/CancelIcon";
import CheckIcon from "@/assets/icons/navbar/CheckIcon";
import CloseIcon from "@/assets/icons/navbar/CloseIcon";
import React from "react";
import "./FormConcepto.scss";
import { useUxStore } from "@/store/uxStore";

export default function FormConcepto() {
  const { openModalFormConcepto} = useUxStore();

  return (
    <div className="newInsumo">
      <div className="form_header">
        <h4>Informacion de Concepto</h4>
        <button onClick={()=>openModalFormConcepto(false)}>
          <CloseIcon />
        </button>
      </div>
      <div className="form_content">
        <form action="" className="newProjectForm">
          <div className="ConceptoData">
            <div className="textInput clave">
              <label className="leLabel" htmlFor="">
                Clave
              </label>
              <input className="leInput" type="text" />
            </div>
            <div className="textInput descripcion">
              <label className="leLabel" htmlFor="">
                Descripcion
              </label>
              <input className="leInput" type="text" />
            </div>
            <div className="textInput unidad">
              <label className="leLabel" htmlFor="">
                Unidad
              </label>
              <input className="leInput" type="text" />
            </div>
            <div className="textInput precio">
              <label className="leLabel" htmlFor="">
                Precio
              </label>
              <input className="leInput" type="text" />
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <td>CLAVE</td>
                <td>DESCRIPCION</td>
                <td>UNIDAD</td>
                <td>CANTIDAD</td>
                <td>PRECIO</td>
                <td>ACCIONES</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MT.0001</td>
                <td>MATERIAL 1</td>
                <td>M3</td>
                <td><input type="text" className="tableInput"/></td>
                <td>12,321.23</td>
                <td>EDT | DEL</td>
              </tr>
              <tr>
                <td>MT.0002</td>
                <td>MATERIAL 2</td>
                <td>M3</td>
                <td><input type="text" className="tableInput"/></td>
                <td>12,321.23</td>
                <td>EDT | DEL</td>
              </tr>
            </tbody>
          </table>

          <div className="btn-group">
            <button className="btnForm btnCancel">
              {" "}
              <CancelIcon className="btnIcon" /> Cancelar
            </button>
            <button className="btnForm btnSave">
              {" "}
              <CheckIcon className="btnIcon" /> Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
