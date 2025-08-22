import React from "react";
import Banner from "./Components/Banner/Banner";
import Section from "./Components/Section/Section";
import Highlights from "./Components/highlights/Highlights";
import ProductsPage from "./products/page";
import ContactPage from "./contact/page";
export default function Home() {
  return (
    <div>
      <Banner />
      <Section />
      <Highlights />
      <ProductsPage></ProductsPage>
      <ContactPage />
    </div>
  );
}
