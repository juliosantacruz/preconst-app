import React from 'react'
import "./TableInsumos.scss";
import { setFormat } from '@/utils/CurrencyFormat';
import { Insumo } from '@/types/Insumo';
import BtnAction from "@/components/BtnAction/BtnAction";
import EditIcon from "@/assets/icons/general/EditIcon";
import TrashIcon from "@/assets/icons/general/TrashIcon";

type Props = {
  insumoArray: Insumo[];
};

 const InsumoTable = ({ insumoArray }: Props) => {
  return (
    <table className="TableInsumos">
      <thead>
        <tr>
          <th className="clave">CLAVE</th>
          <th className="description">DESCRIPCION</th>
          <th className="unit">UNIDAD</th>
          <th className="price">PRECIO</th>
          <th className="category">CATEGORIA</th>
          <th className="actions">ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        {insumoArray.length ? (
          insumoArray.map((insumo) => {
            // console.log(insumo);
            return (
              <tr key={insumo.id}>
                <td className="clave">{insumo.clave}</td>
                <td className="description">{insumo.descripcion}</td>
                <td className="unit">{insumo.unidad}</td>
                <td className="price">{setFormat(Number(insumo.precio))}</td>
                <td className="category">{insumo.categoria}</td>
                <td className="actions">
                  <BtnAction icon={<EditIcon />} className="btnAction" />|
                  <BtnAction icon={<TrashIcon />} className="btnAction" />
                </td>
              </tr>
            );
          })
        ) : (
          <p>No Data...</p>
        )}
      </tbody>
    </table>
  );
};
export default InsumoTable
