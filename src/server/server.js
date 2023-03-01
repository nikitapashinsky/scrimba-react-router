import { createServer, Model } from "miragejs";

createServer({
  models: {
    cars: Model,
  },

  seeds(server) {
    server.create("car", {
      id: "718-cayman-t",
      line: "718",
      name: "718 Cayman T",
      body: "Coupe",
      seats: "2",
      drive: "Rear wheel drive",
      fuelType: "Gasoline",
      description:
        "The Modest Explorer is a car designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      img: "718-cayman-t",
    });
    server.create("car", {
      id: "718-cayman-gt4",
      line: "718",
      name: "718 Cayman GT4",
      body: "Coupe",
      seats: "2",
      drive: "Rear wheel drive",
      fuelType: "Gasoline",
      description:
        "The Modest Explorer is a car designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      img: "718-cayman-gt4",
    });
    server.create("car", {
      id: "718-boxster-gts-4",
      line: "718",
      name: "718 Boxster GTS 4.0",
      body: "Cabriolet",
      seats: "2",
      drive: "Rear wheel drive",
      fuelType: "Gasoline",
      description:
        "The Modest Explorer is a car designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      img: "718-boxster-gts-4",
    });
    server.create("car", {
      id: "911-carrera",
      line: "911",
      name: "911 Carrera",
      body: "Coupe",
      seats: "4-5",
      drive: "Rear wheel drive",
      fuelType: "Gasoline",
      description:
        "The Modest Explorer is a car designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      img: "911-carrera",
    });
    server.create("car", {
      id: "911-carrera-4-gts",
      line: "911",
      name: "911 Carrera 4 GTS",
      body: "Coupe",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description:
        "The Modest Explorer is a car designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      img: "911-carrera-4-gts",
    });
    server.create("car", {
      id: "911-carrera-gts-cabriolet",
      line: "911",
      name: "911 Carrera GTS Cabriolet",
      body: "Cabriolet",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description:
        "The Modest Explorer is a car designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      img: "911-carrera-gts-cabriolet",
    });
    server.create("car", {
      id: "911-turbo-s",
      line: "911",
      name: "911 Turbo S",
      body: "Coupe",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description:
        "Beach Bum is a car inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      img: "911-turbo-s",
    });
    server.create("car", {
      id: "911-gt3",
      line: "911",
      name: "911 GT3",
      body: "Coupe",
      seats: "2",
      drive: "Rear wheel drive",
      fuelType: "Gasoline",
      description:
        "Beach Bum is a car inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      img: "911-gt3",
    });
    server.create("car", {
      id: "911-gt3-rs",
      line: "911",
      name: "911 GT3 RS",
      body: "Coupe",
      seats: "2",
      drive: "Rear wheel drive",
      fuelType: "Gasoline",
      description:
        "Beach Bum is a car inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      img: "911-gt3-rs",
    });
    server.create("car", {
      id: "911-dakar",
      line: "911",
      name: "911 Dakar",
      body: "Coupe",
      seats: "2",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description:
        "Beach Bum is a car inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      img: "911-dakar",
    });
    server.create("car", {
      id: "taycan-turbo",
      line: "Taycan",
      name: "Taycan Turbo",
      body: "Sport Saloon",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Electro",
      description:
        "Beach Bum is a car inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      img: "taycan-turbo",
    });
    server.create("car", {
      id: "taycan-turbo-s-cross-turismo",
      line: "Taycan",
      name: "Taycan Turbo S Cross Turismo",
      body: "Cross Turismo",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Electro",
      description:
        "Beach Bum is a car inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      img: "taycan-turbo-s-cross-turismo",
    });
    server.create("car", {
      id: "panamera-4s",
      line: "Panamera",
      name: "Panamera 4S",
      body: "Sport Saloon",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description:
        "Beach Bum is a car inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      img: "panamera-4s",
    });
    server.create("car", {
      id: "panamera-turbo-s-ehybrid",
      line: "Panamera",
      name: "Panamera Turbo S E-Hybrid",
      body: "Sport Saloon",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Hybrid",
      description:
        "Beach Bum is a car inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      img: "panamera-turbo-s-ehybrid",
    });
    server.create("car", {
      id: "panamera-turbo-s-sport-turismo",
      line: "Panamera",
      name: "Panamera Turbo S Sport Turismo",
      body: "Sport Turismo",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description:
        "Beach Bum is a car inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      img: "panamera-turbo-s-sport-turismo",
    });
    server.create("car", {
      id: "macan",
      line: "Macan",
      name: "Macan",
      body: "SUV",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description:
        "Beach Bum is a car inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      img: "macan",
    });
    server.create("car", {
      id: "cayenne-coupe",
      line: "Cayenne",
      name: "Cayenne Coupe",
      body: "Coupe",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description:
        "Beach Bum is a car inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      img: "cayenne-coupe",
    });
    server.create("car", {
      id: "cayenne-turbo",
      line: "Cayenne",
      name: "Cayenne Turbo",
      body: "SUV",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description:
        "Beach Bum is a car inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      img: "cayenne-turbo",
    });
    server.create("car", {
      id: "cayenne-turbo-s-ehybrid",
      line: "Cayenne",
      name: "Cayenne Turbo S E-Hybrid",
      body: "SUV",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Hybrid",
      description:
        "Beach Bum is a car inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      img: "cayenne-turbo-s-ehybrid",
    });
    server.create("car", {
      id: "cayenne-turbo-gt",
      line: "Cayenne",
      name: "Cayenne Turbo GT",
      body: "Coupe",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description:
        "Beach Bum is a car inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      img: "cayenne-turbo-gt",
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
