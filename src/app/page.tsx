import Dashboard from "@/components/page/Dashboard";
import About from "@/components/page/About";
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
    </main>
  );
};

export default Home;
