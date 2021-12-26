class Movie {
    constructor(title, studio, rating = "PG") {
      (this.title = title), (this.studio = studio), (this.rating = rating);
      console.log(`
    Title  : ${this.title}
    Studio : ${this.studio}
    Rating : ${this.rating}
        `);
    }
  
    getPG(args) {
      const newArr = args.filter((arg) => arg.rating.includes("PG"));
      return newArr;
    }
  }
  
  const film = new Movie("Casino Royale", "Eon Productions", "PG13");
  
  const movies = [
    {
      title: "Casino Royale",
      studio: "Eon Productions",
      rating: "PG13",
    },
    {
      title: "Bahubali",
      studio: "Varahi Productions",
      rating: "R13",
    },
    {
      title: "K.G.F",
      studio: "Hombale Productions",
      rating: "PG13",
    },
    {
      title: "Kirik Party",
      studio: "Paramva Studios",
      rating: "R12",
    },
    {
      title: "MEB",
      studio: "GA Productions",
      rating: "PG13",
    },
  ];
  
  console.log(...film.getPG(movies));