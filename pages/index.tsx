import Layout from "../components/Layout";
import CarouselComponent from "../components/body/home/CarouselComponent";
import Content from "../components/body/home/Content";
import React from "react";


export default function Home() {
  return (
    <Layout>
      <CarouselComponent/>
      <Content/>
    </Layout>
  )
}
