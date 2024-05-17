import React from 'react'
import './CatalogoInsumos.scss'
import PageTitle from '@/components/PageTitle/PageTitle'
import BtnWorkspace from '@/components/BtnWorkspace/BtnWorkspace'

export default function CatalogoInsumos() {
  return (
    <>
      <section>
        <PageTitle title='Catalogo de Insumos'>
          <BtnWorkspace title='Guardar JSON'/>
          <BtnWorkspace title='Guardar CSV'/>

        </PageTitle>
      </section>
    </>
  )
}
