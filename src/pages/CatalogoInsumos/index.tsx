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

const MockInsumos: Insumo[] = [
  {
    id: "1",
    fechaCreacion: "12-23-1212",
    clave: "MT.001",
    descripcion:
      "MATERIAL 1 adsf asdfa sdf asdfasdf asdfasdfasdfasdfasdfasdf asdfasdfasdfasdfsdafasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf",
    unidad: "m3",
    categoria: "Material",
    isTarea: false,
    precio: 34323.33,
  },
  {
    id: "2",
    fechaCreacion: "12-23-1212",
    clave: "MT.002",
    descripcion: "MATERIAL 2",
    unidad: "kg",
    categoria: "Material",
    isTarea: false,
    precio: 23.33,
  },
];

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
