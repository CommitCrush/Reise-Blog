import Image from "next/image";
import styles from "./page.module.css";
import Authentifizierung from "./_components/Authentifizierung";

import Footer from "./_components/Footer";
import HomePage from "./home/page";
import Navbar from "./_components/Navbar";


export default function Home() {
  return (
    <>
  {/* <Navbar /> */}
  <HomePage />
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
}
