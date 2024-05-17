import React from 'react'
import './CatalogoInsumos.scss'
import PageTitle from '@/components/PageTitle/PageTitle'
import BtnWorkspace from '@/components/BtnWorkspace/BtnWorkspace'
import GuardarJSON from '@/assets/icons/general/GuardarJSON'
import GuardarCSV from '@/assets/icons/general/GuardarCSV'
import SearchBar from '@/components/SearchBar/SearchBar'
import TabsFilter from '@/components/TabsFilter/TabsFilter'

export default function CatalogoInsumos() {
  return (
    <>
      <section>
        <PageTitle title='Catalogo de Insumos'>
          <BtnWorkspace title='Guardar JSON' icon={<GuardarJSON/>}/>
          <BtnWorkspace title='Guardar CSV' icon={<GuardarCSV/>}/>
        </PageTitle>
        <SearchBar/>
<TabsFilter/>

      </section>
    </>
  )
}
