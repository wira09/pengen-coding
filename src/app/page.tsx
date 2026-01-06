import Dashboard from "@/components/page/Dashboard";
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
    </main>
  );
};

export default Home;
