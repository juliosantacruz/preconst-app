import React from "react";
import './FormProject.scss'
import CloseIcon from "@/assets/icons/navbar/CloseIcon";
import CheckIcon from "@/assets/icons/navbar/CheckIcon";
import CancelIcon from "@/assets/icons/navbar/CancelIcon";
import { useUxStore } from "@/store/uxStore";


export default function FormProject() {
  const {  openModalFormProject } = useUxStore();

  return (
    <div className="newProject">
      <div className="form_header">
        <h4>Informacion de Proyecto</h4>
        <button onClick={()=>openModalFormProject(false)}>
          <CloseIcon/>
        </button>
      </div>
      <div className="form_content">
        <form action="" className="newProjectForm">
          <div className="ProjectData">
            <div className="textInput">
              <label className="leLabel" htmlFor="">
                Nombre de Proyecto
              </label>
              <input className="leInput" type="text" />
            </div>
            <div className="textInput">
              <label className="leLabel" htmlFor="">
                Descripcion de Proyecto
              </label>
              <textarea
                className="leInput textArea"
                name="description"
                id=""
                cols={30}
                rows={5}
              ></textarea>
            </div>
            <div className="textInput">
              <label className="leLabel" htmlFor="">
                Direccion de Proyecto
              </label>
              <textarea
                className="leInput textArea"
                name="description"
                id=""
                cols={30}
                rows={3}
              ></textarea>
            </div>
            <div className="textInput">
              <label className="leLabel" htmlFor="">
                Nombre de Cliente
              </label>
              <input className="leInput" type="text" />
            </div>
          </div>

          <div className="fscOptions">
            <h4>Factores de Sobre Costo (%)</h4>
            <div className="ProjectFSC">
              <div className="textInput fscInput">
                <label className="leLabel" htmlFor="">
                  Costo Directo
                </label>
                <input className="leInput" type="text" />
              </div>
              <div className="textInput fscInput">
                <label className="leLabel" htmlFor="">
                  Costo Indirecto
                </label>
                <input className="leInput" type="text" />
              </div>
              <div className="textInput fscInput">
                <label className="leLabel" htmlFor="">
                  Financiamiento
                </label>
                <input className="leInput" type="text" />
              </div>
              <div className="textInput fscInput">
                <label className="leLabel" htmlFor="">
                  Utilidad
                </label>
                <input className="leInput" type="text" />
              </div>
            </div>

          </div>

          <div className="btn-group">
            <button className="btnForm btnCancel"> <CancelIcon className="btnIcon"/> Cancelar</button>
            <button className="btnForm btnSave"> <CheckIcon className="btnIcon"/> Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
