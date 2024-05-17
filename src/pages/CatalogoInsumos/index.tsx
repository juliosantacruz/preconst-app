import React from "react";
import "./CatalogoInsumos.scss";
import PageTitle from "@/components/PageTitle/PageTitle";
import BtnWorkspace from "@/components/BtnWorkspace/BtnWorkspace";
import GuardarJSON from "@/assets/icons/general/GuardarJSON";
import GuardarCSV from "@/assets/icons/general/GuardarCSV";
import SearchBar from "@/components/SearchBar/SearchBar";
import TabsFilter from "@/components/TabsFilter/TabsFilter";
import BtnAddProject from "@/components/BtnAddProject/BtnAddProject";
import { useUxStore } from "@/store/uxStore";
import FormInsumo from "@/forms/FormInsumo/FormInsumo";
import AsideModal from "@/components/AsideModal";

export default function CatalogoInsumos() {
  const {openModalFormInsumo, modalFormInsumo}= useUxStore()
  return (
    <>
      <section>
        <PageTitle title="Catalogo de Insumos">
          <BtnWorkspace title="Guardar JSON" icon={<GuardarJSON />} />
          <BtnWorkspace title="Guardar CSV" icon={<GuardarCSV />} />
        </PageTitle>
        <SearchBar />
        <TabsFilter />
      </section>


      {modalFormInsumo && (
        <AsideModal
          widthModal={"50vw"}
          title="Nuevo Insumo"
          clossable={true}
          openModal={modalFormInsumo}
          setOpenModal={openModalFormInsumo}
          modalType={"Insumo"}
        >
          <FormInsumo />
        </AsideModal>
      )}

      <BtnAddProject openModal={openModalFormInsumo}/>

    </>
  );
}
