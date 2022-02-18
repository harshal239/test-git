import Head from "next/head";
import {
  Banner,
  Footer,
  Future,
  GetInTouch,
  Services,
  Testimonial,
} from "../components";

export default function Home() {
  return (
    <div>
      <Banner />
      <main id="main">
        <Future />
        <Testimonial />
        <Services />
        <GetInTouch variant="home" />
      </main>
      <Footer />
    </div>
  );
}
