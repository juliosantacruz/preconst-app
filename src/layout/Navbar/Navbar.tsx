import React from 'react'
import { RoutesDirectory } from '../../routes/RoutesDirectory'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  console.log(RoutesDirectory)

  return (

    <ul>
      <li>
        <NavLink to={RoutesDirectory.HOME.slug}>{RoutesDirectory.HOME.name}</NavLink>
      </li>
      <li>
        <NavLink to={RoutesDirectory.CATALOGO_INSUMOS.slug}>{RoutesDirectory.CATALOGO_INSUMOS.name}</NavLink>
      </li>
      <li>
        <NavLink to={RoutesDirectory.CALATALOGO_CONCEPTOS.slug}>{RoutesDirectory.CALATALOGO_CONCEPTOS.name}</NavLink>
      </li>


      <li>
        <NavLink to={RoutesDirectory.PRESUPUESTO.slug}>{RoutesDirectory.PRESUPUESTO.name}</NavLink>
      </li>
      <li>
        <NavLink to={RoutesDirectory.LISTADO_INSUMOS.slug}>{RoutesDirectory.LISTADO_INSUMOS.name}</NavLink>
      </li>
      <li>
        <NavLink to={RoutesDirectory.LISTADO_CONCEPTOS.slug}>{RoutesDirectory.LISTADO_CONCEPTOS.name}</NavLink>
      </li>
      <li>
        <NavLink to={RoutesDirectory.EXPLOSION_INSUMOS.slug}>{RoutesDirectory.EXPLOSION_INSUMOS.name}</NavLink>
      </li>
      <li>
        <NavLink to={RoutesDirectory.ANALISIS_PU.slug}>{RoutesDirectory.ANALISIS_PU.name}</NavLink>
      </li>
      <li>
        <NavLink to={RoutesDirectory.PROGRAMACION_OBRA.slug}>{RoutesDirectory.PROGRAMACION_OBRA.name}</NavLink>
      </li>
    </ul>
  )
}
