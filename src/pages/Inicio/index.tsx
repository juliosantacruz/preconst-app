import Banner from "@/components/Banner/Banner";
import BtnAddProject from "@/components/BtnAddProject/BtnAddProject";
import React from "react";
import BannerImg from "@/assets/img/banner-img.png";
import HomeTitle from "@/components/HomeTitle/HomeTitle";
import HomeProjectCard from "@/components/HomeProjectCard/HomeProjectCard";
import "./Inicio.scss";
import AsideModal from "@/components/AsideModal";
import FormProject from "@/forms/FormProject/FormProject";
import { useUxStore } from "@/store/uxStore";

const bannerData = {
  image: BannerImg,
  url: "/",
  message:
    "Ya esta casi esta lista la version 4.0 su lanzamiento sera en 7 dias, estos son los cambios",
};

export default function Inicio() {
  const { modalFormProject, openModalFormProject } = useUxStore();

  return (
    <>
      <section>
        <Banner
          image={bannerData.image}
          url={bannerData.url}
          message={bannerData.message}
        />
        <HomeTitle />
        <div className="projectGroup">
          <HomeProjectCard />
          <HomeProjectCard />
          <HomeProjectCard />
          <HomeProjectCard />
          <HomeProjectCard />
          <HomeProjectCard />
          <HomeProjectCard />
          <HomeProjectCard />
          <HomeProjectCard />
        </div>
      </section>

      {modalFormProject && (
        <AsideModal
          widthModal={"50vw"}
          title="Agregar Proyecto"
          clossable={true}
          openModal={modalFormProject}
          setOpenModal={openModalFormProject}
          modalType={"Presupuesto"}
        >
          <FormProject />
        </AsideModal>
      )}

      <BtnAddProject openModal={openModalFormProject}/>
    </>
  );
}
