import React from 'react'
import './CatalogoConceptos.scss'
import PageTitle from '@/components/PageTitle/PageTitle'
import BtnWorkspace from '@/components/BtnWorkspace/BtnWorkspace'
import GuardarJSON from '@/assets/icons/general/GuardarJSON'
import GuardarCSV from '@/assets/icons/general/GuardarCSV'

export default function CatalogoConceptos() {
  return (
    <>
      <section>
        <PageTitle title='Catalogo de Conceptos'>
          <BtnWorkspace title='Guardar JSON' icon={<GuardarJSON/>}/>
          <BtnWorkspace title='Guardar CSV' icon={<GuardarCSV/>}/>

        </PageTitle>
      </section>
    </>
  )
}
