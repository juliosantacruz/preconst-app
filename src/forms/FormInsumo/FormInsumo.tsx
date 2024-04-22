import CancelIcon from '@/assets/icons/navbar/CancelIcon'
import CheckIcon from '@/assets/icons/navbar/CheckIcon'
import CloseIcon from '@/assets/icons/navbar/CloseIcon'
import React from 'react'
import './FormInsumo.scss'


export default function FormInsumo() {
  return (
    <div className='newInsumo'>
      <div className="form_header">
        <h4>Informacion de Insumo</h4>
        <button>
          <CloseIcon/>
        </button>
      </div>
      <div className="form_content">
        <form action="" className="newProjectForm">
          <div className="ProjectData">
            <div className="textInput">
              <label className="leLabel" htmlFor="">
                Clave
              </label>
              <input className="leInput" type="text" />
            </div>
            <div className="textInput">
              <label className="leLabel" htmlFor="">
                Descripcion de Insumo
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
                Categoria
              </label>
              <input className="leInput" type="text" />
            </div>
            <div className="textInput">
              <label className="leLabel" htmlFor="">
                Unidad
              </label>
              <input className="leInput" type="text" />
            </div>
            <div className="textInput">
              <label className="leLabel" htmlFor="">
                Precio
              </label>
              <input className="leInput" type="text" />
            </div>
          </div>



          <div className="btn-group">
            <button className="btnForm btnCancel"> <CancelIcon className="btnIcon"/> Cancelar</button>
            <button className="btnForm btnSave"> <CheckIcon className="btnIcon"/> Guardar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
