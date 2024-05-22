import React from 'react'
import './ConceptoTable.scss'
import BtnAction from "@/components/BtnAction/BtnAction";
import EditIcon from "@/assets/icons/general/EditIcon";
import TrashIcon from "@/assets/icons/general/TrashIcon";
import { setFormat } from "@/utils/CurrencyFormat";
import { Concepto } from '@/types/Concepto';

type Props = {
  catalogoArray: Concepto[];
};

export default function ConceptoTable({ catalogoArray }: Props) {
  return (
    <table className="ConceptoTable">
    <thead>
      <tr>
        <th className="clave">CLAVE</th>
        <th className="description">DESCRIPCION</th>
        <th className="unit">UNIDAD</th>
        <th className="price">P. U.</th>
        <th className="actions">ACCIONES</th>
      </tr>
    </thead>
    <tbody>
      {
        catalogoArray?
        catalogoArray.map((concepto)=>{
          return(
            <tr>
            <td className="clave">{concepto.clave}</td>
            <td className="description">{concepto.descripcion}</td>
            <td className="unit">{concepto.unidad}</td>
            <td className="price">{setFormat(concepto.precioUnitario as number)}</td>
            <td className="actions">
              <BtnAction icon={<EditIcon />} className="btnAction" />|
              <BtnAction icon={<TrashIcon />} className="btnAction" />
            </td>
          </tr>
          )
        })
        : <p>no data</p>
      }
      <tr>
        <td className="clave">A23</td>
        <td className="description">al;ksdjf;alksdjfadsf</td>
        <td className="unit">mL</td>
        <td className="price">$34,343.43</td>
        <td className="actions">
          <BtnAction icon={<EditIcon />} className="btnAction" />|
          <BtnAction icon={<TrashIcon />} className="btnAction" />
        </td>
      </tr>
    </tbody>
  </table>
  )
}
