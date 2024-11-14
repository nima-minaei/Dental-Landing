import Header from "./components/Headers";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { CarouselSection } from "./components/CarouselSection";
import Services from "./components/Services";
import Banner from "./components/Banner";
import ChildPart from "./components/ChildPart";
import Buffer from "./components/Buffer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Resume/>
      <Buffer/>
      <CarouselSection/>
      <Banner />
      <ChildPart/>
      <Services/>
      <Footer/>
    </div>
  );
}
