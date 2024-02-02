const Movie = require("../Models/schema")
require("dotenv").config()

const movie1 = new Movie({
    Movie_Id: 1,
    MovieName: "Adipurush",
    Date: "2023-01-12",
    Director: "Om Raut",
    Rating: 3.8,
    Comments: ["Disappointing storyline", "Poor character development", "Over-reliance on visual effects"],
    UserName: "MovieFan123",
    Password: "password1"
  })

  const movie2 = new Movie({
    Movie_Id: 2,
    MovieName: "Agent",
    Date: "2023-08-12",
    Director: "Surender Reddy",
    Rating: 4.2,
    Comments: ["Clichéd action sequences", "Lacks originality", "Unconvincing performances"],
    UserName: "CineCritic99",
    Password: "filmlover2023"
  })
  const movie3 = new Movie({
    Movie_Id: 3,
    MovieName: "Kisi Ka Bhai Kisi Ki Jaan",
    Date: "2023-12-23",
    Director: "Farhad Samji",
    Rating: 4.3,
    Comments: ["Unfunny jokes", "Drags on for too long", "Poor direction"],
    UserName: "MovieBuff007",
    Password: "cinemalover4"
  })
  const movie4 = new Movie({
    Movie_Id: 4,
    MovieName: "Shaakuntalam",
    Date: "2023-07-22",
    Director: "Guna Sekhar",
    Rating: 4.4,
    Comments: ["Lacks emotional depth", "Visually stunning but underwhelming story", "Unconvincing chemistry between leads"],
    UserName: "MovieReviewer11",
    Password: "filmcritique"
  })
  const movie5 = new Movie({
    Movie_Id: 5,
    MovieName: "Shehzada",
    Date: "2023-11-04",
    Director: "Rohit Dhawan",
    Rating: 4.5,
    Comments: ["Predictable plot", "Over-the-top action", "Unnecessary songs"],
    UserName: "MovieEnthusiast88",
    Password: "cinefan123"
  })
  const movie6 = new Movie({
    Movie_Id: 6,
    MovieName: "The Lady Killer",
    Date: "2023-12-15",
    Director: "Shirish Kunder",
    Rating: 1.5,
    Comments: ["Confusing plot", "Poor acting", "Unnecessary twists"],
    UserName: "user6",
    Password: "password62"
  })
  const movie7 = new Movie({
    Movie_Id: 7,
    MovieName: "Chandramukhi 2",
    Date: "2023-04-29",
    Director: "P Vasu",
    Rating: 2.6,
    Comments: ["Boring and repetitive", "Lacks the charm of the original"],
    UserName: "user7",
    Password: "password57"
  })
  const movie8 = new Movie({
    Movie_Id: 8,
    MovieName: "Japan",
    Date: "2023-10-13",
    Director: "Anil Ravipudi",
    Rating: 3.2,
    Comments: ["Overly loud and chaotic", "Unfunny jokes", "Lacks substance"],
    UserName: "moviebuff24",
    Password: "password456"
  })
  const movie9 = new Movie({
    Movie_Id: 9,
    MovieName: "1920: Horrors of the Heart",
    Date: "2023-05-19",
    Director: "Krishna Bhatt",
    Rating: 2.8,
    Comments: ["Predictable scares", "Unoriginal plot", "Poor execution"],
    UserName: "movielover35",
    Password: "abc123"
  })
  const movie10 = new Movie({
    Movie_Id: 10,
    MovieName: "Tiku Weds Sheru",
    Date: "2023-12-02",
    Director: "Kangana Ranaut",
    Rating: 3.3,
    Comments: ["Bizarre and confusing", "Lacks focus", "Uneven performances"],
    UserName: "MovieEnthusiast234",
    Password: "password234"
  })


const mongoose = require("mongoose")
// Connect to your local MongoDB instance

mongoose.connect(process.env.MONGO_KEY, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to local MongoDB'))
  .catch(err => console.error('Error connecting to local MongoDB:', err));


const movieData = [movie1,movie2,movie3,movie4,movie5,movie6,movie7,movie8,movie9,movie10 
];


Movie.insertMany(movieData)
  .then(() => console.log('Movies added successfully!'))
  .catch(err => console.error('Error adding movies:', err));