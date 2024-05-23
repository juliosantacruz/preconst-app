import ProjectTitle from "@/components/ProjectTitle/ProjectTitle";
import React from "react";
import "./Presupuesto.scss";
import BtnWorkspace from "@/components/BtnWorkspace/BtnWorkspace";
import GuardarJSON from "@/assets/icons/general/GuardarJSON";
import GuardarCSV from "@/assets/icons/general/GuardarCSV";
import EditarProyecto from "@/assets/icons/navbar/EditarProyecto";
import AgregarPartida from "@/assets/icons/navbar/AgregarPartida";
import AgregarFSR from "@/assets/icons/navbar/AgregarFSR";

import AsideModal from "@/components/AsideModal";
import { useUxStore } from "@/store/uxStore";
import FormProject from "@/forms/FormProject/FormProject";
import FormPartida from "@/forms/FormPartida/FormPartida";
import SearchBar from "@/components/SearchBar/SearchBar";
import PresupuestoTable from "@/components/PresupuestoTable/PresupuestoTable";

export default function Presupuesto() {
  const {
    modalFormProject,
    openModalFormProject,
    modalFormPartida,
    openModalFormPartida,
  } = useUxStore();

  return (
    <>
      <div className="Presupuesto-Btn-Group">
        <BtnWorkspace title="Guardar JSON" icon={<GuardarJSON />} />
        <BtnWorkspace title="Guardar CSV" icon={<GuardarCSV />} />
        <BtnWorkspace
          title="Editar Proyecto"
          icon={<EditarProyecto />}
          onClick={() => openModalFormProject(!modalFormProject)}
        />
        <BtnWorkspace
          title="Agregar Partida"
          icon={<AgregarPartida />}
          onClick={() => openModalFormPartida(!modalFormPartida)}
        />
        <BtnWorkspace title="Aplicar FSR" icon={<AgregarFSR />} width={120} />
      </div>
      <ProjectTitle />
      <SearchBar />
      <PresupuestoTable />

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
