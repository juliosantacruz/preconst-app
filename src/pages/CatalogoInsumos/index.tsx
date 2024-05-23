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

import { Insumo } from "@/types/Insumo";
import InsumoTable from "@/components/InsumoTable/InsumoTable";
import InsumosData from '@/mocks/mock_Insumos.json'

const MockInsumos: Insumo[] = InsumosData

export default function CatalogoInsumos() {
  const { openModalFormInsumo, modalFormInsumo } = useUxStore();
  return (
    <>
      <section>
        <PageTitle title="Catalogo de Insumos">
          <BtnWorkspace title="Guardar JSON" icon={<GuardarJSON />} />
          <BtnWorkspace title="Guardar CSV" icon={<GuardarCSV />} />
        </PageTitle>
        <SearchBar />
        <TabsFilter />
        <InsumoTable insumoArray={MockInsumos} />
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

      <BtnAddProject openModal={openModalFormInsumo} />
    </>
  );
}
