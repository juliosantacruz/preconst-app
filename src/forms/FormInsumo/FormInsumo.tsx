// React
import { useState, useEffect, ChangeEvent, FormEvent } from "react";

// Librerias
import { v4 } from "uuid";
import dayjs from "dayjs";

// Local Reference
import CancelIcon from "@/assets/icons/navbar/CancelIcon";
import CheckIcon from "@/assets/icons/navbar/CheckIcon";
import CloseIcon from "@/assets/icons/navbar/CloseIcon";
import { useUxStore } from "@/store/uxStore";

// Types
import { Insumo } from "@/types/Insumo";
// Styles
import "./FormInsumo.scss";
import { useInsumoStore } from "@/store/projectStore";
import ErrorMsg from "@/components/ErrorMsg/ErrorMsg";
import { CategoriasInsumos, Unidades } from "@/utils/SelectInputOptions";

const insumoDefaultValue = {
  id: "",
  fechaCreacion: "",
  clave: "",
  descripcion: "",
  unidad: "",
  categoria: "",
  isTarea: false,
  proyectoId: "",
  precio: "",
};

export default function FormInsumo() {
  const [formData, setFormData] = useState<Insumo>(insumoDefaultValue);
  const [editInsumo, setEditInsumo]=useState(false)
  const [formError, setFormError] = useState(false);
  const { openModalFormInsumo } = useUxStore();
  const { addInsumo,insumoToUpdate,updateInsumo,setInsumoToUpdate } = useInsumoStore();

  useEffect(() => {
    if (insumoToUpdate !== undefined) {
      setFormData(insumoToUpdate);
      setEditInsumo(true);
    } else {
    setFormData({
      id: v4(),
      fechaCreacion: dayjs().format("YYYY-MM-DD, h:mm:ss A"),
      clave: "",
      descripcion: "",
      unidad: "",
      categoria: "",
      isTarea: false,
      listadoInsumos: [],
      precio: "",
    });
  }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form Validations (No empty arrays)
    if (
      formData.clave.length <= 0 ||
      formData.descripcion.length <= 0 ||
      formData.unidad.length <= 0 ||
      formData.categoria.length <= 0 ||
      (formData.precio as string).length <= 0
    ) {
      setFormError(true);
      return console.log("error de datos");
    }

    if (editInsumo) {
      updateInsumo(formData);
    } else {
      addInsumo(formData);
    }
    onClear();
  };

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Validate price input
    if (name === "precio") {
      const regex = /^\d+(\.\d{0,2})?$/;
      if (regex.test(value) || value === "") {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const onClear = () => {
    setFormData(insumoDefaultValue);
    setFormError(false);
    setEditInsumo(false);
    setInsumoToUpdate(undefined);
    openModalFormInsumo(false);
  };

  const onCancel = () => {
    onClear();
  };
  return (
    <div className="newInsumo">
      <div className="form_header">
        <h4>Informacion de Insumo</h4>
        <button onClick={() => openModalFormInsumo(false)}>
          <CloseIcon />
        </button>
      </div>
      <div className="form_content">
        <form
          action=""
          className="newProjectForm"
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className="ProjectData">
            <div className="textInput">
              <label className="leLabel" htmlFor="">
                Clave
              </label>
              <input
                className="leInput"
                type="text"
                name="clave"
                value={formData.clave}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="textInput">
              <label className="leLabel" htmlFor="">
                Descripcion de Insumo
              </label>
              <textarea
                className="leInput textArea"
                name="descripcion"
                id=""
                cols={30}
                rows={5}
                value={formData.descripcion}
                onChange={(e) => onChange(e)}
              ></textarea>
            </div>
            <div className="textInput">
              <label className="leLabel" htmlFor="">
                Categoria
              </label>
              <select
                name="categoria"
                id="categoria"
                onChange={(e) => onChange(e)}
                value={formData.categoria}
              >
                <option value="m2"></option>
                {CategoriasInsumos.map((Categoria) => {
                  return (
                    <option value={Categoria.name} key={Categoria.simbol}>
                      {Categoria.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="textInput">
              <label className="leLabel" htmlFor="">
                Unidad
              </label>

              <select
                name="unidad"
                id="unidad"
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
            <div className="textInput">
              <label className="leLabel" htmlFor="">
                Precio
              </label>
              <input
                className="leInput"
                type="text"
                name="precio"
                value={formData.precio}
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          {formError && <ErrorMsg />}
          <div className="btn-group">
            <button
              onClick={onCancel}
              type="button"
              className="btnForm btnCancel"
            >
              {" "}
              <CancelIcon className="btnIcon" /> Cancelar
            </button>
            <button type="submit" className="btnForm btnSave">
              {" "}
              <CheckIcon className="btnIcon" /> Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
