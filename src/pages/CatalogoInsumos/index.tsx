import React, { useState } from "react";
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

import InsumoTable from "@/components/InsumoTable/InsumoTable";
import { useInsumoStore } from "@/store/projectStore";
import { Insumo } from "@/types/Insumo";
import { filtrarCategorias } from "@/utils/FilterTabsByCategory";


export default function CatalogoInsumos() {
  const [tabsFilter, setTabsFilter]=useState<string>('todos')
  const [searchValue, setSearchValue] = useState<string>("");
  const {insumos}=useInsumoStore()
  const { openModalFormInsumo, modalFormInsumo } = useUxStore();


  let searchedInsumos: Insumo[] = [];
  if (searchValue.length > 0) {
    searchedInsumos = insumos.filter((insumo) => {
      const description = insumo.descripcion.toLocaleLowerCase();
      const searchText = searchValue.toLowerCase();
      return description.includes(searchText);
    });
  } else {
    searchedInsumos = insumos;
  }

  const insumoData = filtrarCategorias(searchedInsumos, tabsFilter)
  return (
    <>
      <section>
        <PageTitle title="Catalogo de Insumos">
          <BtnWorkspace title="Guardar JSON" icon={<GuardarJSON />} />
          <BtnWorkspace title="Guardar CSV" icon={<GuardarCSV />} />
        </PageTitle>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
        <TabsFilter activeTab={tabsFilter} setTab={setTabsFilter} />
        <InsumoTable insumoArray={insumoData} />
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
