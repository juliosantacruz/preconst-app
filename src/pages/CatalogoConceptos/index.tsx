import React from "react";
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

import { Concepto } from "@/types/Concepto";
import ConceptoTable from "@/components/ConceptoTable/ConceptoTable";

const MockConcepto: Concepto[] = [
  {
    id: "1",
    proyectoId: "",
    fechaCreacion: "12-03-1202",
    clave: "A121",
    descripcion:
      "lkjasdlfkjasd alsdkjfoiwe oweijrlkjlkjdsf sldkfjlskdjf lkjljljlj",
    unidad: "mL",
    cantidad: 23, // Cantidad en Presupesto
    listadoInsumos: [
      {
        insumoId: "1", // Insumos en PU
        cantidad: 23,
      },
      {
        insumoId: "2", // Insumos en PU
        cantidad: 23,
      },
    ],
    precioUnitario: 34,
  },
];
export default function CatalogoConceptos() {
  const { openModalFormConcepto, modalFormConcepto} = useUxStore();
  return (
    <>
      <section>
        <PageTitle title="Catalogo de Conceptos">
          <BtnWorkspace title="Guardar JSON" icon={<GuardarJSON />} />
          <BtnWorkspace title="Guardar CSV" icon={<GuardarCSV />} />
        </PageTitle>

        <SearchBar />

        <ConceptoTable catalogoArray={MockConcepto} />
      </section>

      {modalFormConcepto && (
        <AsideModal
          widthModal={"50vw"}
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
