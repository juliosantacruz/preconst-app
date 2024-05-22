import ProjectTitle from "@/components/ProjectTitle/ProjectTitle";
import React from "react";
import "./Presupuesto.scss";
import BtnWorkspace from "@/components/BtnWorkspace/BtnWorkspace";
import GuardarJSON from "@/assets/icons/general/GuardarJSON";
import GuardarCSV from "@/assets/icons/general/GuardarCSV";
import EditarProyecto from "@/assets/icons/navbar/EditarProyecto";
import AgregarPartida from "@/assets/icons/navbar/AgregarPartida";
import AgregarFSR from "@/assets/icons/navbar/AgregarFSR";
import BtnAction from "@/components/BtnAction/BtnAction";
import TrashIcon from "@/assets/icons/general/TrashIcon";
import EditIcon from "@/assets/icons/general/EditIcon";
import AddNew from "@/assets/icons/general/AddNew";
import ChevronIcon from "@/assets/icons/general/ChevronIcon";
import AsideModal from "@/components/AsideModal";
import { useUxStore } from "@/store/uxStore";
import FormProject from "@/forms/FormProject/FormProject";
import FormPartida from "@/forms/FormPartida/FormPartida";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function Presupuesto() {
  const { modalFormProject, openModalFormProject,modalFormPartida, openModalFormPartida } = useUxStore();

  return (
    <>
      <div className="Presupuesto-Btn-Group">
        <BtnWorkspace title="Guardar JSON" icon={<GuardarJSON />} />
        <BtnWorkspace title="Guardar CSV" icon={<GuardarCSV />} />
        <BtnWorkspace title="Editar Proyecto" icon={<EditarProyecto />} onClick={()=>openModalFormProject(!modalFormProject)} />
        <BtnWorkspace title="Agregar Partida" icon={<AgregarPartida />} onClick={()=>openModalFormPartida(!modalFormPartida)}/>
        <BtnWorkspace title="Aplicar FSR" icon={<AgregarFSR />} width={120} />
      </div>
      <ProjectTitle />
      <SearchBar/>
      <div className="TableSection">
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
            <tr className="concepto">
              <td className="rowIcon"> </td>
              <td className="clave">A4</td>
              <td className="description">
                EXCAVACIÓN A MÁQUINA EN MATERIAL TIPO "B" EN SECO HASTA UNA
                PROFUNDIDAD DE 4.50 M CON MEDIDAS EN LÍNEAS DE PROYECTO.
              </td>
              <td className="unit">m3</td>
              <td className="quantity">1,342.94</td>
              <td className="price">$234,342.90</td>
              <td className="amount">$460,494.13</td>
              <td className="actions">
                <BtnAction icon={<TrashIcon />} className="btnAction" />|
                <BtnAction icon={<AddNew />} className="btnAction" />
              </td>
            </tr>
            <tr className="concepto">
              <td className="rowIcon"> </td>
              <td className="clave">A3</td>
              <td className="description">
                EXCAVACIÓN A MÁQUINA EN MATERIAL TIPO "B" EN SECO HASTA UNA
                PROFUNDIDAD DE 4.50 M CON MEDIDAS EN LÍNEAS DE PROYECTO.
                INCLUYE: AFINE DE TALUDES, MANO DE OBRA, HERRAMIENTA, MAQUINARIA
                Y EQUIPO, MANIOBRAS Y MOVIMIENTOS.
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
              <td className="clave">A4</td>
              <td className="description">
                EXCAVACIÓN A MÁQUINA EN MATERIAL TIPO "B" EN SECO HASTA UNA
                PROFUNDIDAD DE 4.50 M CON MEDIDAS EN LÍNEAS DE PROYECTO.
              </td>
              <td className="unit">m3</td>
              <td className="quantity">1,342.94</td>
              <td className="price">$234,342.90</td>
              <td className="amount">$460,494.13</td>
              <td className="actions">
                <BtnAction icon={<TrashIcon />} className="btnAction" />|
                <BtnAction icon={<AddNew />} className="btnAction" />
              </td>
            </tr>
            <tr className="concepto">
              <td className="rowIcon"> </td>
              <td className="clave">A3</td>
              <td className="description">
                EXCAVACIÓN A MÁQUINA EN MATERIAL TIPO "B" EN SECO HASTA UNA
                PROFUNDIDAD DE 4.50 M CON MEDIDAS EN LÍNEAS DE PROYECTO.
                INCLUYE: AFINE DE TALUDES, MANO DE OBRA, HERRAMIENTA, MAQUINARIA
                Y EQUIPO, MANIOBRAS Y MOVIMIENTOS.
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
              <td className="clave">A4</td>
              <td className="description">
                EXCAVACIÓN A MÁQUINA EN MATERIAL TIPO "B" EN SECO HASTA UNA
                PROFUNDIDAD DE 4.50 M CON MEDIDAS EN LÍNEAS DE PROYECTO.
              </td>
              <td className="unit">m3</td>
              <td className="quantity">1,342.94</td>
              <td className="price">$234,342.90</td>
              <td className="amount">$460,494.13</td>
              <td className="actions">
                <BtnAction icon={<TrashIcon />} className="btnAction" />|
                <BtnAction icon={<AddNew />} className="btnAction" />
              </td>
            </tr>
            <tr className="concepto">
              <td className="rowIcon"> </td>
              <td className="clave">A3</td>
              <td className="description">
                EXCAVACIÓN A MÁQUINA EN MATERIAL TIPO "B" EN SECO HASTA UNA
                PROFUNDIDAD DE 4.50 M CON MEDIDAS EN LÍNEAS DE PROYECTO.
                INCLUYE: AFINE DE TALUDES, MANO DE OBRA, HERRAMIENTA, MAQUINARIA
                Y EQUIPO, MANIOBRAS Y MOVIMIENTOS.
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
              <td className="clave">A4</td>
              <td className="description">
                EXCAVACIÓN A MÁQUINA EN MATERIAL TIPO "B" EN SECO HASTA UNA
                PROFUNDIDAD DE 4.50 M CON MEDIDAS EN LÍNEAS DE PROYECTO.
              </td>
              <td className="unit">m3</td>
              <td className="quantity">1,342.94</td>
              <td className="price">$234,342.90</td>
              <td className="amount">$460,494.13</td>
              <td className="actions">
                <BtnAction icon={<TrashIcon />} className="btnAction" />|
                <BtnAction icon={<AddNew />} className="btnAction" />
              </td>
            </tr>
            <tr className="concepto">
              <td className="rowIcon"> </td>
              <td className="clave">A3</td>
              <td className="description">
                EXCAVACIÓN A MÁQUINA EN MATERIAL TIPO "B" EN SECO HASTA UNA
                PROFUNDIDAD DE 4.50 M CON MEDIDAS EN LÍNEAS DE PROYECTO.
                INCLUYE: AFINE DE TALUDES, MANO DE OBRA, HERRAMIENTA, MAQUINARIA
                Y EQUIPO, MANIOBRAS Y MOVIMIENTOS.
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
              <td className="clave">A4</td>
              <td className="description">
                EXCAVACIÓN A MÁQUINA EN MATERIAL TIPO "B" EN SECO HASTA UNA
                PROFUNDIDAD DE 4.50 M CON MEDIDAS EN LÍNEAS DE PROYECTO.
              </td>
              <td className="unit">m3</td>
              <td className="quantity">1,342.94</td>
              <td className="price">$234,342.90</td>
              <td className="amount">$460,494.13</td>
              <td className="actions">
                <BtnAction icon={<TrashIcon />} className="btnAction" />|
                <BtnAction icon={<AddNew />} className="btnAction" />
              </td>
            </tr>
            <tr className="concepto">
              <td className="rowIcon"> </td>
              <td className="clave">A3</td>
              <td className="description">
                EXCAVACIÓN A MÁQUINA EN MATERIAL TIPO "B" EN SECO HASTA UNA
                PROFUNDIDAD DE 4.50 M CON MEDIDAS EN LÍNEAS DE PROYECTO.
                INCLUYE: AFINE DE TALUDES, MANO DE OBRA, HERRAMIENTA, MAQUINARIA
                Y EQUIPO, MANIOBRAS Y MOVIMIENTOS.
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
      </div>


      {modalFormProject && (
        <AsideModal
          widthModal={"30vw"}
          title="Agregar Proyecto"
          clossable={true}
          openModal={modalFormProject}
          setOpenModal={openModalFormProject}
          modalType={"Presupuesto"}
        >
          <FormProject />
        </AsideModal>
      )}
       {modalFormPartida && (
        <AsideModal
          widthModal={"30vw"}
          title="Agregar Proyecto"
          clossable={true}
          openModal={modalFormPartida}
          setOpenModal={openModalFormPartida}
          modalType={"Partida"}
        >
          <FormPartida />
        </AsideModal>
      )}
    </>
  );
}
