/* eslint-disable @typescript-eslint/no-unused-vars */
import { Insumo } from '@/types/Insumo';
import { CategoriasInsumos } from '@/utils/SelectInputOptions';
import React, { useState } from 'react'
import './TabsFilter.scss'

export default function TabsFilter() {
  const [filter, setFilter] = useState("todos");
  const filtrarCategorias = (data: Insumo[], categoria: string) => {
    let arrData: Insumo[] = [];
    if (filter === "todos") {
      arrData = data;
    } else {
      arrData = data.filter((insumo) => insumo.categoria === categoria);
    }
    arrData.sort((a, b) => a.clave.localeCompare(b.clave));
    return arrData;
  };

  const tabClassName = (category?: string) => {
    if (filter === category) {
      return "tab activeTab";
    } else {
      return "tab";
    }
  };

    return (
      <div className="tabsFiltred">
        <button
          type="button"
          className={filter === "todos" ? "tab activeTab" : "tab"}
          onClick={() => setFilter("todos")}
        >
          Todos
        </button>
        {CategoriasInsumos.map((category) => {
          return (
            <button
              key={category.name}
              type="button"
              className={tabClassName(category.name)}
              onClick={() => setFilter(category.name)}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    );

}
