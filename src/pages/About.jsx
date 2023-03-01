import { useEffect } from "react";

import Nav from "../components/Nav";

function About({ title }) {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <Nav />
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 p-6 pb-20 lg:gap-12 lg:pt-16">
        <img src="964-hero.jpg" className="" />
        <section className="max-w-prose space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter md:text-5xl lg:mb-12">
            Competent point of contact for customers who own vintage cars or
            modern classic cars
          </h1>
          <p>
            Porsche Classic pursues a single goal: to preserve and take care of
            legendary vehicles and the latest classic cars. Decades of
            experience with classic Porsche vehicles make the Porsche Classic
            experts a competent point of contact when it comes to Genuine parts,
            accessories, restoration and repair.
          </p>
          <p>
            Porsche Classic generally takes over support for road-legal vehicles
            ten years after their end of production. This means that the experts
            are currently taking care of the 356, 911 (up to and including type
            996), 912, 959, 914, 924, 944, 928, 968, Boxster (type 986), Carrera
            GT (type 980) and, since recently, the first-generation Cayenne. In
            total, this amounts to more than 870,000 vehicles delivered since
            1948.
          </p>
        </section>
      </main>
    </>
  );
}

export default About;
