import Dashboard from "@/components/page/Dashboard";
import About from "@/components/page/About";
import Why from "@/components/page/Price";

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
      <Why />
    </main>
  );
};

export default Home;
