import { createServer, Model } from "miragejs";

createServer({
  models: {
    cars: Model,
  },

  seeds(server) {
    server.create("car", {
      id: "356",
      name: "356",
      yearFrom: 1948,
      yearTo: 1965,
      description:
        "The Modest Explorer is a car designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      img: "356.jpg",
    });
    server.create("car", {
      id: "914",
      name: "914",
      yearFrom: 1970,
      yearTo: 1976,
      description:
        "Beach Bum is a car inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      img: "914.jpg",
    });
    server.create("car", {
      id: "928",
      name: "928",
      yearFrom: 1978,
      yearTo: 1995,
      description:
        "Reliable Red is a car that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      img: "928.jpg",
    });
    server.create("car", {
      id: "959",
      name: "959",
      yearFrom: 1987,
      yearTo: 1988,
      description:
        "Dreamfinder is the perfect car to travel in and experience. With a ceiling height of 2.1m, you can stand up in this car and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
      img: "959.jpg",
    });
    server.create("car", {
      id: "964",
      name: "The Cruiser",
      yearFrom: 1989,
      yearTo: 1994,
      description:
        "The Cruiser is a car for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
      img: "964.jpg",
    });
    server.create("car", {
      id: "993",
      name: "911 (993)",
      yearFrom: 1994,
      yearTo: 1998,
      description:
        "With this car, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      img: "993.jpg",
    });
    server.create("car", {
      id: "986",
      name: "Boxster (986)",
      yearFrom: 1997,
      yearTo: 2004,
      description:
        "With this car, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      img: "986.jpg",
    });
    server.create("car", {
      id: "996",
      name: "911 (996)",
      yearFrom: 1998,
      yearTo: 2005,
      description:
        "With this car, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      img: "996.jpg",
    });
    server.create("car", {
      id: "980",
      name: "Carrera GT",
      yearFrom: 2003,
      yearTo: 2006,
      description:
        "With this car, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      img: "980.jpg",
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/models", (schema, request) => {
      return schema.cars.all();
    });

    this.get("/models/:id", (schema, request) => {
      const id = request.params.id;
      return schema.cars.find(id);
    });
  },
});
