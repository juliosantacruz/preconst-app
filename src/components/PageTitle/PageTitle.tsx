import React from 'react'
import './PageTitle.scss'



type Props={
  title?:string,
  children?:string | JSX.Element | JSX.Element[]
}
export default function PageTitle({title, children}:Props) {
  return (
    <div className='PageTitle'>
      <h2>{title}</h2>
      <div className="rightSide">
        {children}
      </div>
    </div>
  )
}
