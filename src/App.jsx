import Footer from "./Footer";
import Header from "./header";
import HeroSection from "./HeroSection";
import Taskbord from "./Task/Taskbord";
export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <Taskbord />
      </div>
      <Footer />
    </>
  );
}
