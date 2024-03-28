import React from "react";
import { useRoutes } from "react-router-dom";
import { RoutesDirectory } from "./RoutesDirectory";
import Inicio from "@/pages/Inicio";
import NotFoundPage from "@/pages/NotFound";
import ListadoConceptos from "@/pages/ListacdoConceptos";
import AnalisisPU from '@/pages/AnalisisPU'
import CatalogoInsumos from "@/pages/CatalogoInsumos";
import CatalogoConceptos from "@/pages/CatalogoConceptos";
import Presupuesto from "@/pages/Presupuesto";
import ListadoInsumos from "@/pages/ListadoInsumos";
import ExplosionInsumos from "@/pages/ExplosionInsumos";
import ProgramacionObra from "@/pages/ProgramacionObra";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: RoutesDirectory.HOME.slug, element: <Inicio /> },
    { path: RoutesDirectory.CATALOGO_INSUMOS.slug, element: <CatalogoInsumos /> },
    { path: RoutesDirectory.CALATALOGO_CONCEPTOS.slug, element: <CatalogoConceptos /> },

    { path: RoutesDirectory.PRESUPUESTO.slug, element: <Presupuesto />, },
    { path: RoutesDirectory.LISTADO_INSUMOS.slug, element: <ListadoInsumos />, },
    { path: RoutesDirectory.LISTADO_CONCEPTOS.slug, element: <ListadoConceptos />, },
    { path: RoutesDirectory.EXPLOSION_INSUMOS.slug, element: <ExplosionInsumos />, },
    { path: RoutesDirectory.ANALISIS_PU.slug, element: <AnalisisPU />, },
    { path: RoutesDirectory.PROGRAMACION_OBRA.slug, element: <ProgramacionObra />, },

    { path: "/*", element: <NotFoundPage /> },
  ]);

  return routes;
};

export default AppRoutes;
