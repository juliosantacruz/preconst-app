/* eslint-disable @typescript-eslint/no-explicit-any */
import CloseIcon from "@/assets/icons/navbar/CloseIcon";
// import InputComponent from "@/components/InputComponent/InputComponent";
import InputFormText from "@/components/InputFormText/InputFormText";
import React, { useState } from "react";

// type PresupuestoType = {
//   id: string,
//   fechaCreacion: string,
//   nombreProyecto: string,
//   descripcionProyecto: string,
//   domicilioProyecto: string,
//   clienteProyecto: string,
//   partidas: [],
//   montoTotal: number,
//   fsc: {
//     costoIndirecto: number,
//     costoOperativo: number,
//     financiamiento: number,
//     utilidad: number,
//     iva: number,
//     isr: number,
//   },
// };

const presupuestoDefaultValue = {
  id: "",
  fechaCreacion: "",
  nombreProyecto: "",
  descripcionProyecto: "",
  domicilioProyecto: "",
  clienteProyecto: "",
  partidas: [],
  montoTotal: 0.0,
  fsc: {
    costoIndirecto: 0,
    costoOperativo: 0,
    financiamiento: 0,
    utilidad: 0,
    iva: 0,
    isr: 0,
  },
};

export default function FormNewProject() {
  const [formData, setFormData] = useState(presupuestoDefaultValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dato = event?.target.value;
    setFormData({
      ...formData,
      [event.target.name]: dato,
    });
  };

  console.log(formData);
  return (
    <>
    <div className="FormHeader">
        <h3>Informacion de Proyecto</h3>
        <button className="closeIcon"><CloseIcon/></button>
    </div>
      <form action="">


        <InputFormText
          name="nombreProyecto"
          label="Nombre de Proyecto"
          type="text"
          value={formData.nombreProyecto}
          inputChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChange(event)
          }
        />
        <InputFormText
          name="descripcionProyecto"
          label="Descripcion de Proyecto"
          type="text"
          value={formData.descripcionProyecto}
          inputChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChange(event)
          }
        />
        <InputFormText
          name="domicilioProyecto"
          label="Domicilio de Proyecto"
          type="text"
          value={formData.domicilioProyecto}
          inputChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChange(event)
          }
        />
        <InputFormText
          name="clienteProyecto"
          label="Cliente de Proyecto"
          type="text"
          value={formData.clienteProyecto}
          inputChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChange(event)
          }
        />
      </form>
    </>
  );
}
