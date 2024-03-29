import React from 'react'
import { NavLink } from 'react-router-dom'
import LogOutIcon from "@/assets/icons/navbar/LogOutIcon";
import SettingsIcon from "@/assets/icons/navbar/SettingsIcon";
import JsLogo from "@/assets/icons/navbar/JSIcon";
import './NavbarFooter.scss'

export default function NavbarFooter() {
  return (
    <div className="navbarFooter">
      <div className="navbarFooterTop">

        <NavLink className="navLinkConf" to={"/test"}>
          <span className="icon">
            <SettingsIcon className="navIcon" />
          </span>{" "}
        </NavLink>
        <button className='logOutIcon'>
          <span className="icon">
            <LogOutIcon className="navIcon" />
          </span>
          Cerrar Sesion
        </button>
      </div>

      <div className="navbarFooterBottom">
        <a
          href="https://juliosantacruz.dev"
          target="_blank"
          className="navLink"
        >
          <span className="icon">
            <JsLogo className="navIcon" />
          </span>
        </a>
      </div>

      </div>
  )
}
