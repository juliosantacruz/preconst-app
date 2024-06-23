import React, { useState } from "react";
import "./CatalogoConceptos.scss";
import PageTitle from "@/components/PageTitle/PageTitle";
import BtnWorkspace from "@/components/BtnWorkspace/BtnWorkspace";
import GuardarJSON from "@/assets/icons/general/GuardarJSON";
import GuardarCSV from "@/assets/icons/general/GuardarCSV";
import SearchBar from "@/components/SearchBar/SearchBar";
import { useUxStore } from "@/store/uxStore";
import AsideModal from "@/components/AsideModal";
import FormConcepto from "@/forms/FormConcepto/FormConcepto";
import BtnAddProject from "@/components/BtnAddProject/BtnAddProject";

import ConceptoTable from "@/components/ConceptoTable/ConceptoTable";

import {useConceptoStore} from '@/store/projectStore'

export default function CatalogoConceptos() {
  const [searchValue, setSearchValue] = useState<string>("");
  const {conceptos}=useConceptoStore()
  const { openModalFormConcepto, modalFormConcepto} = useUxStore();
  return (
    <>
      <section>
        <PageTitle title="Catalogo de Conceptos">
          <BtnWorkspace title="Guardar JSON" icon={<GuardarJSON />} />
          <BtnWorkspace title="Guardar CSV" icon={<GuardarCSV />} />
        </PageTitle>

        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>


        <ConceptoTable catalogoArray={conceptos} />
      </section>

      {modalFormConcepto && (
        <AsideModal
          widthModal={"60vw"}
          title="Nuevo Insumo"
          clossable={true}
          openModal={modalFormConcepto}
          setOpenModal={openModalFormConcepto}
          modalType={"Insumo"}
        >
          <FormConcepto />
        </AsideModal>
      )}

      <BtnAddProject openModal={openModalFormConcepto} />
    </>
  );
}
