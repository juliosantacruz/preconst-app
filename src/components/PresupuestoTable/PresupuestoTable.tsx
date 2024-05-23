import React from 'react'
import BtnAction from "@/components/BtnAction/BtnAction";
import TrashIcon from "@/assets/icons/general/TrashIcon";
import EditIcon from "@/assets/icons/general/EditIcon";
import AddNew from "@/assets/icons/general/AddNew";
import ChevronIcon from "@/assets/icons/general/ChevronIcon";
import './PresupuestoTable.scss'


export default function PresupuestoTable() {
  return (
    <table className="PresupuestoTable">
      <thead>
        <tr>
          <th className="rowIcon"> </th>
          <th className="clave">CLAVE</th>
          <th className="description">DESCRIPCION</th>
          <th className="unit">UNIDAD</th>
          <th className="quantity">CANTIDAD</th>
          <th className="price">PU</th>
          <th className="amount">MONTO</th>
          <th className="actions">ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        <tr className="partida">
          <td className="rowIcon"><BtnAction icon={<ChevronIcon />} className="btnAction" /></td>
          <td className="clave">A</td>
          <td className="description">PRELIMINARES</td>
          <td className="unit"></td>
          <td className="quantity"></td>
          <td className="price"></td>
          <td className="amount">$2,123,123.32</td>
          <td className="actions">
            <BtnAction icon={<EditIcon />} className="btnAction" />|
            <BtnAction icon={<TrashIcon />} className="btnAction" />|
            <BtnAction icon={<AddNew />} className="btnAction" />
          </td>
        </tr>

        <tr className="concepto">
          <td className="rowIcon"> </td>
          <td className="clave">A1</td>
          <td className="description">
            EXCAVACIÓN A MÁQUINA EN MATERIAL TIPO "B" EN SECO HASTA UNA
            PROFUNDIDAD DE 4.50 M CON MEDIDAS EN LÍNEAS DE PROYECTO.
            INCLUYE: AFINE DE TALUDES, MANO DE OBRA, HERRAMIENTA, MAQUINARIA
            Y EQUIPO, MANIOBRAS Y MOVIMIENTOS, MEDIDO TODO EN SECCIÓN, ASÍ
            COMO TODO LO NECESARIO PARA LA CORRECTA EJECUCIÓN DE LOS
            TRABAJOS.
          </td>
          <td className="unit">m3</td>
          <td className="quantity">1,342.94</td>
          <td className="price">$342.90</td>
          <td className="amount">$460,494.13</td>
          <td className="actions">
            <BtnAction icon={<TrashIcon />} className="btnAction" />|
            <BtnAction icon={<AddNew />} className="btnAction" />
          </td>
        </tr>
        <tr className="concepto">
          <td className="rowIcon"> </td>
          <td className="clave">A2</td>
          <td className="description">
            EXCAVACIÓN A MÁQUINA EN MATERIAL TIPO "B" EN SECO HASTA UNA
            PROFUNDIDAD DE 4.50 M CON MEDIDAS EN LÍNEAS DE PROYECTO.
            INCLUYE: AFINE DE TALUDES, MANO DE OBRA, HERRAMIENTA, MAQUINARIA
            Y EQUIPO, MANIOBRAS Y MOVIMIENTOS, MEDIDO TODO EN SECCIÓN, ASÍ
            COMO TODO LO NECESARIO PARA LA CORRECTA EJECUCIÓN DE LOS
            TRABAJOS.
          </td>
          <td className="unit">m3</td>
          <td className="quantity">1,342.94</td>
          <td className="price">$342.90</td>
          <td className="amount">$460,494.13</td>
          <td className="actions">
            <BtnAction icon={<TrashIcon />} className="btnAction" />|
            <BtnAction icon={<AddNew />} className="btnAction" />
          </td>
        </tr>
      </tbody>
    </table>
  )
}
