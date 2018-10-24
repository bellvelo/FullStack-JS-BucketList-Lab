use bucketlist;
db.dropDatabase();

db.buckets.insertMany([
  {
    stage: "Mont Venteux stage",
    race: "Tour de France",
    country: "France",

  },
  {
    stage: "Carrefour de l'arbre",
    race: "Paris-Roubaix",
    country: "Belgium",

  },
  {
    stage: "Stelvio stage",
    race: "Giro d'Italia",
    country: "Italy",

  }
]);
