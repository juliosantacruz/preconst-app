import React from "react";
import './BtnWorkspace.scss'

type TypeBtn={
  className?:string,
  onClick?:React.MouseEventHandler<HTMLButtonElement>
  title:string
  icon?:React.ReactNode
  width?:number
}

export default function BtnWorkspace({className,onClick,title,icon,width}:TypeBtn) {

  const iconDimentions={
    width:width,
    // height:30
  }
  return (
    <div className={`btnWorkspace ${className?className:''}`} style={iconDimentions}>
      <button onClick={onClick}><span className="icon">{icon}</span> {title}</button>
    </div>
  );
}
