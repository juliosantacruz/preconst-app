import CancelIcon from '@/assets/icons/navbar/CancelIcon'
import CheckIcon from '@/assets/icons/navbar/CheckIcon'
import CloseIcon from '@/assets/icons/navbar/CloseIcon'
import React from 'react'
import './FormPartida.scss'

export default function FormPartida() {
  return (
    <div className='newPartida'>
      <div className="form_header">
        <h4>Informacion de Partida</h4>
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
                Nombre Partida
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
