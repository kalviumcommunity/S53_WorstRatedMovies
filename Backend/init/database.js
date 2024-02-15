const Movie = require("../Models/schema")
require("dotenv").config()

const movie1 = new Movie({

    MovieName: "Adipurush",
    ImgLink:"https://pbs.twimg.com/media/FuTC6foaYAAcbie.jpg",
    Date: "2023-01-12",
    Director: "Om Raut",
    Rating: 3.8,
    Comments: [ "Poor character development","poor execution of vfx", "Over-reliance on visual effects"],

  })

  const movie2 = new Movie({

    MovieName: "Agent",
    ImgLink:"https://www.telugubulletin.com/wp-content/uploads/2022/03/Akhil-Agent-release-date-696x974.jpg",
    Date: "2023-08-12",
    Director: "Surender Reddy",
    Rating: 4.2,
    Comments: ["Clichéd action sequences", "Lacks originality", "Unconvincing performances"],

  })
  const movie3 = new Movie({

    MovieName: "Kisi Ka Bhai Kisi Ki Jaan",
    ImgLink:"https://images.news18.com/ibnkhabar/uploads/2023/03/6-Upcoming-Films-6.jpg",
    Date: "2023-12-23",
    Director: "Farhad Samji",
    Rating: 4.3,
    Comments: ["Unfunny jokes", "Drags on for too long", "Poor direction"],
  
  })
  const movie4 = new Movie({

    MovieName: "Shaakuntalam",
    ImgLink:"https://i.redd.it/new-posters-from-shaakuntalam-v0-4ywtrb2umppa1.jpg?width=719&format=pjpg&auto=webp&s=8c8b53851f6ac341a164579839e7dd80be093482",
    Date: "2023-07-22",
    Director: "Guna Sekhar",
    Rating: 4.4,
    Comments: ["Lacks emotional depth", "Visually stunning but underwhelming story", "Unconvincing chemistry between leads"],
   
  })
  const movie5 = new Movie({

    MovieName: "Shehzada",
    ImgLink:"https://m.media-amazon.com/images/M/MV5BYjZjZTA3YzMtZDY2My00MDRkLWE0OWItZGVkNzA2ODljNzZiXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
    Date: "2023-11-04",
    Director: "Rohit Dhawan",
    Rating: 4.5,
    Comments: ["Predictable plot", "Over-the-top action", "Unnecessary songs"],
 
  })
  const movie6 = new Movie({

    MovieName: "The Lady Killer",
    ImgLink:"https://m.media-amazon.com/images/M/MV5BNWVjN2FkNDYtZWIzNy00ZWE2LWI2NjEtY2E0NTYzMGQyNGRlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
    Date: "2023-12-15",
    Director: "Shirish Kunder",
    Rating: 1.5,
    Comments: ["Confusing plot", "Poor acting", "Unnecessary twists"],
  
  })
  const movie7 = new Movie({

    MovieName: "Chandramukhi 2",
    ImgLink:"https://media.licdn.com/dms/image/D5622AQE_dSyfZLSPnA/feedshare-shrink_800/0/1695873322504?e=2147483647&v=beta&t=4UjCH30TlOoiIr8zyr89MQXC-ViWWlYVgxA_Hg4-9yQ",
    Date: "2023-04-29",
    Director: "P Vasu",
    Rating: 2.6,
    Comments: ["Boring and repetitive", "Lacks the charm of the original"],

  })
  const movie8 = new Movie({

    MovieName: "Japan",
    ImgLink:"https://m.media-amazon.com/images/M/MV5BMDA0MDgyYWMtYzAyNi00ZDBlLWE1NzAtMjVlMjUzY2QzOWFmXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
    Date: "2023-10-13",
    Director: "Anil Ravipudi",
    Rating: 3.2,
    Comments: ["Overly loud and chaotic", "Unfunny jokes", "Lacks substance"],

  })
  const movie9 = new Movie({
    MovieName: "Aquaman and the Lost Kingdom",
    ImgLink:"https://m.media-amazon.com/images/M/MV5BMzZlZDQ5NWItY2RjMC00NjRiLTlmZTgtZGE2ODEyMjVlOTJhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
    Date: "2023-12-22",
    Director: "James Wan",
    Rating: 4.9,
    
Comments: ["Disappointing sequel", "Messy plot", "CGI spectacle overload"],
  })
  const movie10 = new Movie({
    
    MovieName: "The Marvels",
    ImgLink:"https://m.media-amazon.com/images/M/MV5BZmY4N2Q2NTYtZWIxMy00OGE4LWIwZWUtYWI5NGJhNGI2NzZkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    Date: "2023-11-10",
    Director: "Nia DaCosta",
    Rating: 5.0,
    Comments: ["Baffling plot", "Mixed performances", "Inconsistent pacing"],

  })

const mongoose = require("mongoose")
// Connect to your local MongoDB instance
mongoose.connect(process.env.MONGO_KEY , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to local MongoDB'))
  .catch(err => console.error('Error connecting to local MongoDB:', err));

const isConnected = mongoose.connection.readyState === '1'

const movieData = [movie1,movie2,movie3,movie4,movie5,movie6,movie7,movie8,movie9,movie10 
];






// Movie.insertMany(movieData)
//   .then(() => {
//     console.log('Movies added successfully!')
   
//   })
//   .catch(err =>{
    
//     console.error('Error adding movies:', err)
//   } );

module.exports = movieData,isConnected;
