/* eslint-disable @typescript-eslint/no-unused-vars */
import { CategoriasInsumos } from '@/utils/SelectInputOptions';
import './TabsFilter.scss'

export default function TabsFilter({activeTab,setTab}:{activeTab:string,setTab:(value:string)=>void}) {


  const tabClassName = (category?: string) => {
    if (activeTab === category) {
      return "tab activeTab";
    } else {
      return "tab";
    }
  };

    return (
      <div className="tabsFiltred">
        <button
          type="button"
          className={activeTab === "todos" ? "tab activeTab" : "tab"}
          onClick={() => setTab("todos")}
        >
          Todos
        </button>
        {CategoriasInsumos.map((category) => {
          return (
            <button
              key={category.name}
              type="button"
              className={tabClassName(category.name)}
              onClick={() => setTab(category.name)}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    );

}
