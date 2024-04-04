import React from "react";
import { RoutesDirectory } from "../../routes/RoutesDirectory";
import { NavLink } from "react-router-dom";
import NavBtn from "@/components/BtnNavbar/BtnNavbar";
import "./Navbar.scss";

import HomeIcon from "@/assets/icons/navbar/HomeIcon";
import CatalogoConceptosIcon from "@/assets/icons/navbar/CatalogoConceptosIcon";
import CatalogoInsumosIcon from "@/assets/icons/navbar/CatalogoInsumosIcon";
import PresupuestoObraIcon from "@/assets/icons/navbar/PresupuestoObraIcon";
import ListadoInsumosIcon from "@/assets/icons/navbar/ListadoInsumosIcon";
import ListadoConceptosIcon from "@/assets/icons/navbar/ListadoConceptosIcon";
import ExplosionInsumosIcon from "@/assets/icons/navbar/ExplosionInsumosIcon";
import AnalisisPUIcon from "@/assets/icons/navbar/AnalisisPUIcon";
import ProgramacionObraIcon from "@/assets/icons/navbar/ProgramacionObraIcon";

import NewLogo from "@/assets/icons/navbar/NewLogo";
import NavbarProjectTitle from "@/components/NavbarProjectTitle/NavbarProjectTitle";
import NavbarFooter from "@/components/NavbarFooter/NavbarFooter";

export default function Navbar() {
  const LeProject = {
    name: "Proyecto1",
    active: true,
  };
  const isProjectActive = LeProject.active ? true : false;

  console.log(RoutesDirectory);

  return (
    <nav>
      <ul className="asideNavbar">
        <li>
          <a href="" className="navLink">
            <span className="icon">
              <NewLogo className="navIcon" />
            </span>
          </a>
        </li>
        <li>
          <NavLink to={RoutesDirectory.HOME.slug} className="navLink">
            {({ isActive }) => (
              <NavBtn isActive={isActive}>
                <span className="icon">
                  <HomeIcon className="navIcon" />
                </span>
                {RoutesDirectory.HOME.name}
              </NavBtn>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navLink"
            to={RoutesDirectory.CATALOGO_INSUMOS.slug}
          >
            {({ isActive }) => (
              <NavBtn isActive={isActive}>
                <span className="icon">
                  <CatalogoInsumosIcon className="navIcon" />
                </span>
                {RoutesDirectory.CATALOGO_INSUMOS.name}
              </NavBtn>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navLink"
            to={RoutesDirectory.CALATALOGO_CONCEPTOS.slug}
          >
            {({ isActive }) => (
              <NavBtn isActive={isActive}>
                <span className="icon">
                  <CatalogoConceptosIcon className="navIcon" />
                </span>
                {RoutesDirectory.CALATALOGO_CONCEPTOS.name}
              </NavBtn>
            )}
          </NavLink>
        </li>
      </ul>
      {isProjectActive ? (
        <>
          <NavbarProjectTitle />
          <ul className="asideNavbar">
            <li>
              <NavLink
                className="navLink"
                to={RoutesDirectory.PRESUPUESTO.slug}
              >
                {({ isActive }) => (
                  <NavBtn isActive={isActive}>
                    <span className="icon">
                      <PresupuestoObraIcon className="navIcon" />
                    </span>
                    {RoutesDirectory.PRESUPUESTO.name}
                  </NavBtn>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navLink"
                to={RoutesDirectory.LISTADO_INSUMOS.slug}
              >
                {({ isActive }) => (
                  <NavBtn isActive={isActive}>
                    <span className="icon">
                      <ListadoInsumosIcon className="navIcon" />
                    </span>
                    {RoutesDirectory.LISTADO_INSUMOS.name}
                  </NavBtn>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navLink"
                to={RoutesDirectory.LISTADO_CONCEPTOS.slug}
              >
                {({ isActive }) => (
                  <NavBtn isActive={isActive}>
                    <span className="icon">
                      <ListadoConceptosIcon className="navIcon" />
                    </span>
                    {RoutesDirectory.LISTADO_CONCEPTOS.name}
                  </NavBtn>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navLink"
                to={RoutesDirectory.EXPLOSION_INSUMOS.slug}
              >
                {({ isActive }) => (
                  <NavBtn isActive={isActive}>
                    <span className="icon">
                      <ExplosionInsumosIcon className="navIcon" />
                    </span>
                    {RoutesDirectory.EXPLOSION_INSUMOS.name}
                  </NavBtn>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navLink"
                to={RoutesDirectory.ANALISIS_PU.slug}
              >
                {({ isActive }) => (
                  <NavBtn isActive={isActive}>
                    <span className="icon">
                      <AnalisisPUIcon className="navIcon" />
                    </span>
                    {RoutesDirectory.ANALISIS_PU.name}
                  </NavBtn>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navLink"
                to={RoutesDirectory.PROGRAMACION_OBRA.slug}
              >
                {({ isActive }) => (
                  <NavBtn isActive={isActive}>
                    <span className="icon">
                      <ProgramacionObraIcon className="navIcon" />
                    </span>
                    {RoutesDirectory.PROGRAMACION_OBRA.name}
                  </NavBtn>
                )}
              </NavLink>
            </li>
          </ul>
        </>
      ) : null}

      <NavbarFooter />
    </nav>
  );
}
