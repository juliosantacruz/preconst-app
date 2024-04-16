import Banner from "@/components/Banner/Banner";
import BtnAddProject from "@/components/BtnAddProject/BtnAddProject";
import React from "react";
import BannerImg from "@/assets/img/banner-img.png";
import HomeTitle from "@/components/HomeTitle/HomeTitle";
import HomeProjectCard from "@/components/HomeProjectCard/HomeProjectCard";
import "./Inicio.scss";

const bannerData = {
  image: BannerImg,
  url: "/",
  message:
    "Ya esta casi esta lista la version 4.0 su lanzamiento sera en 7 dias, estos son los cambios",
};

export default function Inicio() {
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

      <BtnAddProject />
    </>
  );
}
