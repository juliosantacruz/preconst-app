/* eslint-disable @typescript-eslint/no-unused-vars */
// React
import { useState, useEffect, FormEvent, ChangeEvent } from "react";

// Librerias
import { v4 } from "uuid";

// Styles
import "./FormConcepto.scss";

// Local Reference
import CancelIcon from "@/assets/icons/navbar/CancelIcon";
import CheckIcon from "@/assets/icons/navbar/CheckIcon";
import CloseIcon from "@/assets/icons/navbar/CloseIcon";
import { useInsumoStore, useConceptoStore } from "@/store/projectStore";
import { useUxStore } from "@/store/uxStore";
import { setFormat } from "@/utils/CurrencyFormat";
import { Unidades } from "@/utils/SelectInputOptions";
import ErrorMsg from "@/components/ErrorMsg/ErrorMsg";
import { Concepto } from "@/types/Concepto";
import dayjs from "dayjs";
import { Insumo } from "@/types/Insumo";
import InsumoTable from "@/components/InsumoTable/InsumoTable";
import SearchBar from "@/components/SearchBar/SearchBar";
import TabsFilter from "@/components/TabsFilter/TabsFilter";
import FormInsumo from "../FormInsumo/FormInsumo";
import { filtrarCategorias } from "@/utils/FilterTabsByCategory";

const conceptoDefaultValue = {
  id: "",
  proyectoId: "",
  fechaCreacion: "",
  clave: "",
  descripcion: "",
  unidad: "",
  listadoInsumos: [],
  precioUnitario: 0,
};

type Props = { ProjectId?: string };

export default function FormConcepto({ ProjectId }: Props) {
  const [formData, setFormData] = useState<Concepto>(conceptoDefaultValue);
  const [formError, setFormError] = useState(false);
  const [addInsumo, setAddInsumo] = useState(true);

  // InsumoData
  const [tabsFilter, setTabsFilter]=useState<string>('todos')
  const [searchValue, setSearchValue] = useState<string>("");

  const { openModalFormInsumo, openModalFormConcepto } = useUxStore();
  const { addConcepto, conceptoToUpdate, setConceptoToUpdate, updateConcepto } =
    useConceptoStore();
  const { insumos } = useInsumoStore();
  console.log(formData)
  useEffect(() => {
    setFormData({
      id: v4(),
      proyectoId: ProjectId || "",
      fechaCreacion: dayjs().format("YYYY-MM-DD, h:mm:ss A"),
      clave: "",
      descripcion: "",
      unidad: "",
      listadoInsumos: [],
      precioUnitario: 0,
    });
  }, [ProjectId]);

  const insumosData: Insumo[] = insumos;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.clave === "") {
      console.log(formData);
      setFormError(true);
      return console.log("error de datos");
    }

    addConcepto(formData);
    onClear();
    onCancel()
    setFormError(false);
  };

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const dato = e?.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onClear = () => {
    setFormData(conceptoDefaultValue);
    setConceptoToUpdate(undefined);
  };

  const onCancel = () => {
    onClear();
    openModalFormConcepto(false);
  };



  // Manage Insumo data
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
    <div className="newInsumo">
      <div className="form_header">
        <h4>Informacion de Concepto</h4>
        <button onClick={() => openModalFormConcepto(false)}>
          <CloseIcon />
        </button>
      </div>
      <div className="form_content">
        <form
          className="newProjectForm"
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className="ConceptoData">
            <div className="textInput clave">
              <label className="leLabel" htmlFor="clave">
                Clave
              </label>
              <input
                className="leInput"
                type="text"
                name="clave"
                onChange={(event) => onChange(event)}
                value={formData.clave}
              />
            </div>
            <div className="textInput descripcion">
              <label className="leLabel" htmlFor="descripcion">
                Descripcion
              </label>
              <input className="leInput" type="text" name="descripcion"
                onChange={(event) => onChange(event)}
                value={formData.descripcion}/>
            </div>
            <div className="textInput unidad">
              <label className="leLabel" htmlFor="unidad">
                Unidad
              </label>
              <select
                name="unidad"
                onChange={(e) => onChange(e)}
                value={formData.unidad}
              >
                <option value="m2"></option>
                {Unidades.map((unidad) => {
                  return (
                    <option value={unidad.simbol} key={unidad.name}>
                      {unidad.simbol}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="textInput precio">
              <label className="leLabel" htmlFor="">
                Precio
              </label>
              <div className="leInput" >
                {formData.precioUnitario}
              </div>
            </div>
          </div>

          <div className="insumosData">
          {
          addInsumo?
          <>
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
        <TabsFilter activeTab={tabsFilter} setTab={setTabsFilter} />
        <InsumoTable insumoArray={insumoData} />
          </>:
          <FormInsumo/>
          }
          </div>

          <div className="btn-group">
            <button className="btnForm btnCancel">
              {" "}
              <CancelIcon className="btnIcon" /> Cancelar
            </button>
            <button className="btnForm btnSave">
              {" "}
              <CheckIcon className="btnIcon" /> Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
