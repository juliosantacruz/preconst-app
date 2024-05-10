import React from 'react'
import './HomeProjectCard.scss'
import TrashIcon from '@/assets/icons/general/TrashIcon'
import EditIcon from '@/assets/icons/general/EditIcon'
import BtnAction from '@/components/BtnAction/BtnAction'

export default function HomeProjectCard() {
  return (
    <article className='projectCard'>
      <div className="header">
        <h4 className='title'>Proyecto 1</h4>
        <p className='date'>2024/04/14</p>
      </div>
      <div className="content">
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
        </p>
      </div>
      <div className="footer">
        <p className='price'>
          $12,245,231,00
        </p>
        <div className="btn-group">
          <BtnAction icon={<TrashIcon/>} className='deleteBtn'/>
          <BtnAction icon={<EditIcon/>} className='editBtn'/>

        </div>
      </div>
    </article>
  )
}


