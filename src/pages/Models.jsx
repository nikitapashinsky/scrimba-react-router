import { useEffect } from "react";

import Nav from "../components/Nav";

function Models({ title }) {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <Nav />
      <main>
        <h1>Models</h1>
      </main>
    </>
  );
}

export default Models;
