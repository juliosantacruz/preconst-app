import React from 'react'
import './HomeTitle.scss'
import BtnWorkspace from '../BtnWorkspace/BtnWorkspace'
import DescargarProyecto from '@/assets/icons/navbar/DescargarProyecto'

export default function HomeTitle() {
  return (
    <div className='HomeTitle'>
      <h2>Mis Presupuestos</h2>
      <BtnWorkspace title='Cargar Proyecto' icon={<DescargarProyecto/>}/>
    </div>
  )
}
