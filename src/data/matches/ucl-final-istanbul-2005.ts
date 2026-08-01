import JerzyDudek from "../images/players/Jerzy Dudek.png";
import SteveFinnan from "../images/players/Steve Finnan.jfif";
import JamieCarragher from "../images/players/Jamie Carragher.webp";
import SamiHyypiä from "../images/players/Sami Hyypiä.jfif";
import DjimiTraoré from "../images/players/Djimi Traoré.webp";
import XabiAlonso from "../images/players/Xabi Alonso.webp";
import StevenGerrard from "../images/players/Steven Gerrard.webp";
import JohnArneRiise from "../images/players/John Arne Riise.webp";
import HarryKewell from "../images/players/Harry Kewell.webp";
import LuisGarcía from "../images/players/Luis García.jfif";
import MilanBaroš from "../images/players/Milan Baroš.webp";

import liverpoolLogo from "../images/teams/liverpool.svg";
import acMilanLogo from "../images/teams/ac-milan.svg";

const miracleOfIstanbul2005 = {
  matchId: "ucl-final-istanbul-2005",
  puzzleNumber: 136,
  date: "2005-05-25",
  difficulty: "Hard",
  title: "UCL Final 2004/05: AC Milan vs Liverpool",
  teams: {
    home: {
      name: "AC Milan",
      shortName: "MIL",
      score: 3,
      logo: acMilanLogo,
    },
    away: {
      name: "Liverpool",
      shortName: "LIV",
      score: 3,
      logo: liverpoolLogo,
    },
  },
  pitch: {
    formation: "4-4-1-1",
    players: [
      [
        {
          id: "p1",
          name: "Jerzy Dudek",
          shirtNumber: 22,
          position: "GK",
          gridCoordinates: { x: 50, y: 90 },
          isHidden: false,
          image: JerzyDudek,
        },
      ],
      [
        {
          id: "p2",
          name: "Steve Finnan",
          shirtNumber: 3,
          position: "RB",
          gridCoordinates: { x: 85, y: 70 },
          isHidden: false,
          image: SteveFinnan,
        },
        {
          id: "p3",
          name: "Jamie Carragher",
          shirtNumber: 23,
          position: "CB",
          gridCoordinates: { x: 62, y: 75 },
          isHidden: false,
          image: JamieCarragher,
        },
        {
          id: "p4",
          name: "Sami Hyypiä",
          shirtNumber: 4,
          position: "CB",
          gridCoordinates: { x: 38, y: 75 },
          isHidden: false,
          image: SamiHyypiä,
        },
        {
          id: "p5",
          name: "Djimi Traoré",
          shirtNumber: 21,
          position: "LB",
          gridCoordinates: { x: 15, y: 70 },
          isHidden: false,
          image: DjimiTraoré,
        },
      ],
      [
        {
          id: "p6",
          name: "Luis García",
          shirtNumber: 10,
          position: "RM",
          gridCoordinates: { x: 85, y: 45 },
          isHidden: false,
          image: LuisGarcía,
        },
        {
          id: "p7",
          name: "Xabi Alonso",
          shirtNumber: 14,
          position: "CM",
          gridCoordinates: { x: 60, y: 50 },
          isHidden: true,
          targetPlayerId: "alonso-14",
          image: XabiAlonso,
        },
        {
          id: "p8",
          name: "Steven Gerrard",
          shirtNumber: 8,
          position: "CM",
          gridCoordinates: { x: 40, y: 50 },
          isHidden: true,
          targetPlayerId: "gerrard-8",
          image: StevenGerrard,
        },
        {
          id: "p9",
          name: "John Arne Riise",
          shirtNumber: 6,
          position: "LM",
          gridCoordinates: { x: 15, y: 45 },
          isHidden: false,
          image: JohnArneRiise,
        },
      ],
      [
        {
          id: "p10",
          name: "Harry Kewell",
          shirtNumber: 7,
          position: "CAM",
          gridCoordinates: { x: 50, y: 30 },
          isHidden: false,
          image: HarryKewell,
        },
      ],
      [
        {
          id: "p11",
          name: "Milan Baroš",
          shirtNumber: 5,
          position: "ST",
          gridCoordinates: { x: 50, y: 15 },
          isHidden: false,
          image: MilanBaroš,
        },
      ],
    ],
  },
  hiddenPlayersData: [
    {
      targetPlayerId: "gerrard-8",
      identity: {
        name: "Steven Gerrard",
        nationality: "England",
        nationalityCode: "GB-ENG",
        ageAtMatch: 24,
        preferredFoot: "Right",
        shirtNumber: 8,
        position: "CM",
        image: "/images/players/gerrard.webp",
      },
      matchStats: {
        minutesPlayed: 120,
        goals: 1,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
        rating: 9.2,
      },
      progressiveClues: [
        {
          attempt: 1,
          type: "nationality",
          value: "England",
          flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        },
        {
          attempt: 2,
          type: "careerPath",
          value: ["Liverpool", "LA Galaxy"],
        },
        { attempt: 3, type: "shirtNumber", value: 8 },
      ],
    },
    {
      targetPlayerId: "alonso-14",
      identity: {
        name: "Xabi Alonso",
        nationality: "Spain",
        nationalityCode: "ES",
        ageAtMatch: 23,
        preferredFoot: "Right",
        shirtNumber: 14,
        position: "CM",
        image: "/images/players/alonso.webp",
      },
      matchStats: {
        minutesPlayed: 120,
        goals: 1,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
        rating: 8.4,
      },
      progressiveClues: [
        {
          attempt: 1,
          type: "nationality",
          value: "Spain",
          flag: "🇪🇸",
        },
        {
          attempt: 2,
          type: "careerPath",
          value: ["Real Sociedad", "Eibar", "Liverpool", "Real Madrid", "Bayern Munich"],
        },
        { attempt: 3, type: "shirtNumber", value: 14 },
      ],
    },
  ],
  matchFacts: {
    possession: { home: 55, away: 45 },
    shotsOnTarget: { home: 10, away: 7 },
    manOfTheMatch: "Steven Gerrard",
    trivia:
      "Liverpool scored 3 goals in 6 second-half minutes to erase a 3-0 AC Milan halftime lead before winning 3-2 on penalties.",
  },
};

export default miracleOfIstanbul2005;