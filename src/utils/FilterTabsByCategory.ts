import { Insumo } from "@/types/Insumo";

export const filtrarCategorias = (data: Insumo[], categoria: string,) => {
  let arrData: Insumo[] = [];
  if (categoria === "todos") {
    arrData = data;
  } else {
    arrData = data.filter((insumo) => insumo.categoria === categoria);
  }
  arrData.sort((a, b) => a.clave.localeCompare(b.clave));
  return arrData;
};
