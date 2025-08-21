import Image from "next/image";
import styles from "./page.module.css";
import Authentifizierung from "./_components/Authentifizierung";

import Footer from "./_components/Footer";
import HomePage from "./home/page";
import Page from "./_components/homepagelogin";
import Navbar from "./_components/Navbar";


export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Page />
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
}
