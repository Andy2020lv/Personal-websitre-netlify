import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";

const data = [
  {
    title: "Coffee Stores",
    description:
      "This app will help users find coffee stores near their location using the Unsplash Images and Foursquare Locations APIs. The app will store the data about the coffee stores in an Airtable database.",
    tech: ["NextJS", "AirtableDB", "Unsplash", "Foursquare"],
    img: "https://i.imgur.com/kdYUK7m.png",
    srcCode: "https://github.com/Andy2020lv/Coffee-Stores",
    live: "https://coffee-stores-nu.vercel.app/",
  },
  {
    title: "EONET-EARTH ",
    description:
      "An app that reaches to both NASA's EONET and EARTH API's to provide information about natural events and satellite images of them. Aditionally it provides the Astronomy Picture of the Day (APOD) API and alerts in case that any natural event is happening between 50km from the user.",
    tech: ["React", "NASA's API's"],
    img: project3,
    srcCode: "https://github.com/Andy2020lv/NASA-EONET-EARTH-API-s",
    live: "https://eonetearth.netlify.app/",
  },

  {
    title: "Star Gym Toribio",
    description:
      "I created a static website to showcase the gym y currently work out at. It is being used as a way to share the gm more broadly.",
    tech: ["React"],
    img: project1,
    srcCode: "https://github.com/Andy2020lv/Gym-project",
    live: "https://stargymvillatapia.netlify.app/",
  },

  {
    title: "Quiz",
    description:
      "A quiz game that promps you 5 different multiple-choice questions, made using the Open Trivia Database.",
    tech: ["React", "Opentdb API"],
    img: project2,
    srcCode: "https://github.com/Andy2020lv/Quiz",
    live: "https://andy2020lv.github.io/Quiz/",
  },
];

export default data;
