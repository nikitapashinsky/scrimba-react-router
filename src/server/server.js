import { createServer, Model } from "miragejs";

createServer({
  models: {
    cars: Model,
  },

  seeds(server) {
    server.create("car", {
      id: "718-cayman-t",
      hostId: "",
      model: "718",
      name: "718 Cayman T",
      body: "Coupe",
      seats: "2",
      drive: "Rear wheel drive",
      fuelType: "Gasoline",
      description:
        "The 718 models were made for the sport of it. They are mid-engined roadsters that unite the sporting spirit of the legendary Porsche 718 with the sports car of tomorrow – and transfer it to the roads of today’s world. With one goal: to take the everyday out of every day.",
      img: "718-cayman-t",
      price: "$599 / week",
    });
    server.create("car", {
      id: "718-cayman-gt4",
      hostId: "123",
      model: "718",
      name: "718 Cayman GT4",
      body: "Coupe",
      seats: "2",
      drive: "Rear wheel drive",
      fuelType: "Gasoline",
      description:
        "Rational. Irrational. Sanity. Insanity. Perfectly. Imperfection. The difference is sometimes extremely subtle. And sometimes it's as sharp as a razor blade. The 718 Cayman GT4 is the perfect sports car for those who like to push the limits. For those who would rather ask 'why not?' than 'why?'. For those who take fun seriously and who would rather sit in a sports seat than a leather arm chair.",
      img: "718-cayman-gt4",
      price: "$599 / week",
    });
    server.create("car", {
      id: "718-cayman-gts-4",
      hostId: "",
      model: "718",
      name: "718 Cayman GTS 4.0",
      body: "Coupe",
      seats: "2",
      drive: "Rear wheel drive",
      fuelType: "Gasoline",
      description:
        "Rational. Irrational. Sanity. Insanity. Perfectly. Imperfection. The difference is sometimes extremely subtle. And sometimes it's as sharp as a razor blade. The 718 Cayman GT4 is the perfect sports car for those who like to push the limits. For those who would rather ask 'why not?' than 'why?'. For those who take fun seriously and who would rather sit in a sports seat than a leather arm chair.",
      img: "718-cayman-gts-4",
      price: "$599 / week",
    });
    server.create("car", {
      id: "718-boxster-gts-4",
      hostId: "",
      model: "718",
      name: "718 Boxster GTS 4.0",
      body: "Cabriolet",
      seats: "2",
      drive: "Rear wheel drive",
      fuelType: "Gasoline",
      description:
        "The 718 models were made for the sport of it. They are mid-engined roadsters that unite the sporting spirit of the legendary Porsche 718 with the sports car of tomorrow – and transfer it to the roads of today’s world. With one goal: to take the everyday out of every day.",
      img: "718-boxster-gts-4",
      price: "$599 / week",
    });
    server.create("car", {
      id: "911-carrera",
      hostId: "",
      model: "911",
      name: "911 Carrera",
      body: "Coupe",
      seats: "4-5",
      drive: "Rear wheel drive",
      fuelType: "Gasoline",
      description:
        "Fewer kilograms equals more agility and contact with the road is more important than ever. The 911 Carrera T is a commitment to purism. A conscious release for increased driving pleasure.",
      img: "911-carrera",
      price: "$599 / week",
    });
    server.create("car", {
      id: "911-carrera-cabriolet",
      hostId: "",
      model: "911",
      name: "911 Carrera Cabriolet",
      body: "Coupe",
      seats: "4-5",
      drive: "Rear wheel drive",
      fuelType: "Gasoline",
      description:
        "Fewer kilograms equals more agility and contact with the road is more important than ever. The 911 Carrera T is a commitment to purism. A conscious release for increased driving pleasure.",
      img: "911-carrera-cabriolet",
      price: "$599 / week",
    });
    server.create("car", {
      id: "911-carrera-4-gts",
      hostId: "",
      model: "911",
      name: "911 Carrera 4 GTS",
      body: "Coupe",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description:
        "As with everything you love, there is never enough. But simply the desire for more. Simply 'More of what you love'. And that is precisely the inspiration for the 911 GTS models: more power, agility and dynamics – and a unique sporty appearance. Or in other words: even more Porsche.",
      img: "911-carrera-4-gts",
      price: "$599 / week",
    });
    server.create("car", {
      id: "911-carrera-gts-cabriolet",
      hostId: "",
      model: "911",
      name: "911 Carrera GTS Cabriolet",
      body: "Cabriolet",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description:
        "As with everything you love, there is never enough. But simply the desire for more. Simply 'More of what you love'. And that is precisely the inspiration for the 911 GTS models: more power, agility and dynamics – and a unique sporty appearance. Or in other words: even more Porsche.",
      img: "911-carrera-gts-cabriolet",
      price: "$599 / week",
    });
    server.create("car", {
      id: "911-turbo-s",
      hostId: "123",
      model: "911",
      name: "911 Turbo S",
      body: "Coupe",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description:
        "Our engineers like to talk about the most perfect sports car ever. Incredible performance, whilst being comfortable and fully suitable for everyday use. The 911 Turbo models continue this philosophy.",
      img: "911-turbo-s",
      price: "$599 / week",
    });
    server.create("car", {
      id: "911-gt3",
      hostId: "",
      model: "911",
      name: "911 GT3",
      body: "Coupe",
      seats: "2",
      drive: "Rear wheel drive",
      fuelType: "Gasoline",
      description:
        "The 911 GT3 with Touring Package also sets the performance tone – but with focus primarily on the road. Thanks to ingenious aerodynamics, cornering remains impressive, even without a large rear wing.",
      img: "911-gt3",
      price: "$599 / week",
    });
    server.create("car", {
      id: "911-gt3-touring",
      hostId: "",
      model: "911",
      name: "911 GT3 with Touring Package",
      body: "Coupe",
      seats: "2",
      drive: "Rear wheel drive",
      fuelType: "Gasoline",
      description:
        "The 911 GT3 with Touring Package also sets the performance tone – but with focus primarily on the road. Thanks to ingenious aerodynamics, cornering remains impressive, even without a large rear wing.",
      img: "911-gt3-touring",
      price: "$599 / week",
    });
    server.create("car", {
      id: "911-gt3-rs",
      hostId: "",
      model: "911",
      name: "911 GT3 RS",
      body: "Coupe",
      seats: "2",
      drive: "Rear wheel drive",
      fuelType: "Gasoline",
      description:
        "Athletes know: top performance requires more than perfect conditions and luck. Relentless training to become stronger and faster. Questioning everything, especially yourself. Learning from every mistake. Because the biggest challenge is to remain unbeatable. With this attitude, Porsche keeps pushing the boundaries of what is possible. Experience the new 911 GT3 RS in top form - with increased race track performance.",
      img: "911-gt3-rs",
      price: "$599 / week",
    });
    server.create("car", {
      id: "911-dakar",
      hostId: "",
      model: "911",
      name: "911 Dakar",
      body: "Coupe",
      seats: "2",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description:
        "Performance, robust technology and endurance are what count in rallying. Only then do you really have a chance of being the first to reach the finish model. The new 911 Dakar is a sports car that is just as suitable for off-road driving as it is for on-road performance and also cutting a fine figure in the city.",
      img: "911-dakar",
      price: "$599 / week",
    });
    server.create("car", {
      id: "taycan-4-cross-turismo",
      hostId: "",
      model: "Taycan",
      name: "Taycan 4 Cross Turismo",
      body: "Sport Saloon",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Electro",
      description:
        "Beach Bum is a car inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      img: "taycan-4-cross-turismo",
      price: "$599 / week",
    });
    server.create("car", {
      id: "taycan-turbo",
      hostId: "",
      model: "Taycan",
      name: "Taycan Turbo",
      body: "Sport Saloon",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Electro",
      description:
        "Beach Bum is a car inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      img: "taycan-turbo",
      price: "$599 / week",
    });
    server.create("car", {
      id: "taycan-gts",
      hostId: "",
      model: "Taycan",
      name: "Taycan GTS",
      body: "Sport Saloon",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Electro",
      description:
        "Beach Bum is a car inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      img: "taycan-gts",
      price: "$599 / week",
    });
    server.create("car", {
      id: "taycan-turbo-s-cross-turismo",
      hostId: "123",
      model: "Taycan",
      name: "Taycan Turbo S Cross Turismo",
      body: "Cross Turismo",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Electro",
      description:
        "Beach Bum is a car inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      img: "taycan-turbo-s-cross-turismo",
      price: "$599 / week",
    });
    server.create("car", {
      id: "taycan-gts-sport-turismo",
      hostId: "",
      model: "Taycan",
      name: "Taycan GTS Sport Turismo",
      body: "Sport Turismo",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Electro",
      description:
        "Beach Bum is a car inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      img: "taycan-gts-sport-turismo",
      price: "$599 / week",
    });
    server.create("car", {
      id: "panamera-4s",
      hostId: "",
      model: "Panamera",
      name: "Panamera 4S",
      body: "Sport Saloon",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description: `
        Can a vision be logical? Is it even allowed to be? Probably not. We believe that the more visionary an idea at the start, the more exciting it is at the end. Then it's worth fighting for. That was the case with the Panamera. A sports car for four? With impressive performance and great comfort?

        With the dynamism typical of Porsche and simultaneously more efficient? Many said it was impossible. Others called it brave.
        `,
      img: "panamera-4s",
    });
    server.create("car", {
      id: "panamera-4s-executive",
      hostId: "",
      model: "Panamera",
      name: "Panamera 4S Executive",
      body: "Sport Saloon",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description: `
        Can a vision be logical? Is it even allowed to be? Probably not. We believe that the more visionary an idea at the start, the more exciting it is at the end. Then it's worth fighting for. That was the case with the Panamera. A sports car for four? With impressive performance and great comfort?

        With the dynamism typical of Porsche and simultaneously more efficient? Many said it was impossible. Others called it brave.
        `,
      img: "panamera-4s-executive",
      price: "$599 / week",
    });
    server.create("car", {
      id: "panamera-turbo-s-ehybrid",
      hostId: "",
      model: "Panamera",
      name: "Panamera Turbo S E-Hybrid",
      body: "Sport Saloon",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Hybrid",
      description: `
        Whether Panamera, Panamera Executive or Panamera Sport Turismo – the silhouette and proportions are unmistakably Porsche. Athletic, streamlined, with clear contours and powerful muscles.

        The long wheelbase, shorter overhang at the front and longer overhang at the rear already lend visual dynamism. The prominent sculpting of the side profile creates the customary Porsche waistline and sense of lightness.`,
      img: "panamera-turbo-s-ehybrid",
      price: "$599 / week",
    });
    server.create("car", {
      id: "panamera-turbo-s-sport-turismo",
      hostId: "",
      model: "Panamera",
      name: "Panamera Turbo S Sport Turismo",
      body: "Sport Turismo",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description: `
        The fact that four people can appreciate a sporty yet comfortable drive in the Panamera is already old news in the automotive luxury class. In the Sport Turismo, with the standard 4+1 seat concept, a fifth person can enjoy the Panamera driving experience. Although not designed as a full-size individual seat, the extra space does provide a neat solution for carrying an additional passenger on short to medium distance trips.

        The fact that stylish design and everyday practicality are not mutually exclusive is demonstrated by the large tailgate and the low loading edge, which makes it easier to integrate more than just everyday things into the Panamera Sport Turismo. Thanks, above all, to – for a sports car – an extraordinary capacity of up to 1,384 litres.`,
      img: "panamera-turbo-s-sport-turismo",
      price: "$599 / week",
    });
    server.create("car", {
      id: "macan",
      hostId: "",
      model: "Macan",
      name: "Macan",
      body: "SUV",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description:
        "Standing out where others disappear into the masses: the new Macan T. Contemporary, dynamic and urban, with extensive standard equipment, model-specific design features and of course, typical Porsche performance.",
      img: "macan",
      price: "$599 / week",
    });
    server.create("car", {
      id: "macan-t",
      hostId: "",
      model: "Macan",
      name: "Macan T",
      body: "SUV",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description:
        "Standing out where others disappear into the masses: the new Macan T. Contemporary, dynamic and urban, with extensive standard equipment, model-specific design features and of course, typical Porsche performance.",
      img: "macan-t",
      price: "$599 / week",
    });
    server.create("car", {
      id: "macan-s",
      hostId: "",
      model: "Macan",
      name: "Macan S",
      body: "SUV",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description:
        "Standing out where others disappear into the masses: the new Macan T. Contemporary, dynamic and urban, with extensive standard equipment, model-specific design features and of course, typical Porsche performance.",
      img: "macan-s",
      price: "$599 / week",
    });
    server.create("car", {
      id: "macan-gts",
      hostId: "",
      model: "Macan",
      name: "Macan GTS",
      body: "SUV",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description:
        "Standing out where others disappear into the masses: the new Macan T. Contemporary, dynamic and urban, with extensive standard equipment, model-specific design features and of course, typical Porsche performance.",
      img: "macan-gts",
      price: "$599 / week",
    });
    server.create("car", {
      id: "cayenne-coupe",
      hostId: "",
      model: "Cayenne",
      name: "Cayenne Coupe",
      body: "Coupe",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description:
        "The Cayenne and Cayenne Coupé: both boast a striking appearance and impressive performance, with up to five seats. Whether you prefer embarking upon your next adventure in the Cayenne together with friends, or fall for the iconic lines of the Coupé, it is purely a matter of personal taste. But one thing also applies to our two biggest models: every Porsche is first and foremost a sports car.",
      img: "cayenne-coupe",
      price: "$599 / week",
    });
    server.create("car", {
      id: "cayenne-turbo",
      hostId: "",
      model: "Cayenne",
      name: "Cayenne Turbo",
      body: "SUV",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description:
        "An intense adrenaline rush and continuous moments of joy – driven by our most powerful eight-cylinder engine. Yet the best thing about the Cayenne Turbo remains its superior sports car feel.",
      img: "cayenne-turbo",
      price: "$599 / week",
    });
    server.create("car", {
      id: "cayenne-turbo-s-ehybrid",
      hostId: "",
      model: "Cayenne",
      name: "Cayenne Turbo S E-Hybrid",
      body: "SUV",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Hybrid",
      description:
        "The Cayenne Turbo S E-Hybrid will make your pulse race. Due to the dual drive concept, the impressive performance of its hybrid technology delivers the most powerful engine output in the model range.",
      img: "cayenne-turbo-s-ehybrid",
      price: "$599 / week",
    });
    server.create("car", {
      id: "cayenne-turbo-gt",
      hostId: "",
      model: "Cayenne",
      name: "Cayenne Turbo GT",
      body: "Coupe",
      seats: "4-5",
      drive: "All wheel drive",
      fuelType: "Gasoline",
      description:
        "Another place on the Cayenne model range starting grid has now been taken – with intense performance and precise dynamics. The Cayenne Turbo GT has all the attributes to be ahead of the game from the start.",
      img: "cayenne-turbo-gt",
      price: "$599 / week",
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/cars", (schema) => {
      return schema.cars.all();
    });

    this.get("/cars/:model", (schema, request) => {
      const model = request.params.model;
      return schema.cars.find(model);
    });

    this.get("/cars/:model/:id", (schema, request) => {
      const id = request.params.id;
      return schema.cars.find(id);
    });

    this.get("/account/cars", (schema) => {
      return schema.cars.where({ hostId: "123" });
    });

    this.get("/account/cars/:id", (schema, request) => {
      const id = request.params.id;
      return schema.cars.where({ id, hostId: "123" });
    });
  },
});
