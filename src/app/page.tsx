import Dashboard from "@/components/page/Dashboard";
import About from "@/components/page/About";
import Price from "@/components/page/Price";
import Accordion from "@/components/page/Accordion";

const Home = () => {
  return (
    <main>
      <Dashboard
        title="Pengen"
        links={[
          { name: "Mulai Belajar", path: "/belajar" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <About />
      <Price />
      <Accordion />
    </main>
  );
};

export default Home;
