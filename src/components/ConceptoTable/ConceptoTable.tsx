import React from 'react'
import './ConceptoTable.scss'
import BtnAction from "@/components/BtnAction/BtnAction";
import EditIcon from "@/assets/icons/general/EditIcon";
import TrashIcon from "@/assets/icons/general/TrashIcon";
import { setFormat } from "@/utils/CurrencyFormat";
import { Concepto } from '@/types/Concepto';
import { useUxStore } from '@/store/uxStore';
import { useConceptoStore } from '@/store/projectStore';

type Props = {
  catalogoArray: Concepto[];
};

export default function ConceptoTable({ catalogoArray }: Props) {
  const {openModalFormConcepto} = useUxStore()
  const { setConceptoToUpdate, deleteConcepto} = useConceptoStore()


  const editConcepto=(concepto:Concepto)=>{
    setConceptoToUpdate(concepto)
    openModalFormConcepto(true)
  }

  const handleDelete=(id:string)=>{
    deleteConcepto(id)
  }
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
            <tr key={concepto.id}>
            <td className="clave">{concepto.clave}</td>
            <td className="description">{concepto.descripcion}</td>
            <td className="unit">{concepto.unidad}</td>
            <td className="price">{setFormat(concepto.precioUnitario as number)}</td>
            <td className="actions">
              <BtnAction icon={<EditIcon />} className="" onClick={()=>editConcepto(concepto)} />|
              <BtnAction icon={<TrashIcon />} className="" onClick={()=>handleDelete(concepto.id)}/>
            </td>
          </tr>
          )
        })
        : <p>no data</p>
      }

    </tbody>
  </table>
  )
}
