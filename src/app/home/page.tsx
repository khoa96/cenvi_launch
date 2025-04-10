"use client";
import Banner from "./Banner";
import Feature from "./Feature";
import Pricing from "./Pricing";
import ComparePrice from "./ComparePrice";
import ThreeStepToCreateCompany from "./ThreeStepToCreateCompany";
import ListService from "./ListService";

export default function Home() {
  return (
    <div className="home-page">
      <Banner />
      <Feature />
      <Pricing />
      <ComparePrice />
      <ThreeStepToCreateCompany />
      <ListService />
    </div>
  );
}
