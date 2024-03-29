import React from 'react'
import CloseIcon from "@/assets/icons/navbar/CloseIcon";
import  './NavbarProjectTitle.scss'


export default function NavbarProjectTitle() {
  return (
    <div className="presupuestoInfo">
        <div className="infoHeader">
          <p>
            Trabajando en
          </p>
          <button className='closeProject'>
              <CloseIcon/>
          </button>
        </div>
        <div className="infoTitle">
          Proyecto 1
        </div>
      </div>
  )
}
