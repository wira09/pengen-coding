import Dashboard from "../components/page/Dashboard";
import About from "../components/page/About";
import Price from "../components/page/Price";
import Accordion from "../components/page/Accordion";
import Tools from "./Tools/page";

const Home = () => {
  return (
    <main className="bg-white">
      <Dashboard
        title="Pengen"
        links={[
          { name: "Mulai Belajar", path: "/materi" },
          { name: "Kontak", path: "/kontak" },
        ]}
      />
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-32">
        <Tools />
      </div>
      <About />
      <Price />
      <Accordion />
    </main>
  );
};

export default Home;
