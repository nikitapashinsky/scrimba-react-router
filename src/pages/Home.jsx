import { useEffect } from "react";

import Nav from "../components/Nav";

function Home({ title }) {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <Nav />
      <main className="p-6">
        <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3">
          <h1>Home</h1>
        </div>
      </main>
    </>
  );
}

export default Home;
