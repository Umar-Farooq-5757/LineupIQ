import ManuelNeuer from "../images/players/Manuel Neuer.webp";
import JoshuaKimmich from "../images/players/Joshua Kimmich.webp";
import JérômeBoateng from "../images/players/Jérôme Boateng.webp";
import DavidAlaba from "../images/players/David Alaba.webp";
import AlphonsoDavies from "../images/players/Alphonso Davies.webp";
import ThiagoAlcântara from "../images/players/Thiago Alcântara.webp";
import LeonGoretzka from "../images/players/Leon Goretzka.webp";
import SergeGnabry from "../images/players/Serge Gnabry.webp";
import ThomasMüller from "../images/players/Thomas Müller.webp";
import KingsleyComan from "../images/players/Kingsley Coman.webp";
import RobertLewandowski from "../images/players/Robert Lewandowski.webp";

import bayernMunichLogo from "../images/teams/bayern-munich.svg";
import psgLogo from "../images/teams/psg.svg";

const uclFinal2020 = {
  matchId: "ucl-final-lisbon-2020",
  puzzleNumber: 139,
  date: "2020-08-23",
  difficulty: "Hard",
  title: "UCL Final 2019/20: Paris Saint-Germain vs Bayern Munich",
  teams: {
    home: {
      name: "Paris Saint-Germain",
      shortName: "PSG",
      score: 0,
      logo: psgLogo,
    },
    away: {
      name: "Bayern Munich",
      shortName: "BAY",
      score: 1,
      logo: bayernMunichLogo,
    },
  },
  pitch: {
    formation: "4-2-3-1",
    players: [
      [
        {
          id: "p1",
          name: "Manuel Neuer",
          shirtNumber: 1,
          position: "GK",
          gridCoordinates: { x: 50, y: 90 },
          isHidden: false,
          image: ManuelNeuer,
        },
      ],
      [
        {
          id: "p2",
          name: "Joshua Kimmich",
          shirtNumber: 32,
          position: "RB",
          gridCoordinates: { x: 85, y: 70 },
          isHidden: false,
          image: JoshuaKimmich,
        },
        {
          id: "p3",
          name: "Jérôme Boateng",
          shirtNumber: 17,
          position: "CB",
          gridCoordinates: { x: 62, y: 75 },
          isHidden: false,
          image: JérômeBoateng,
        },
        {
          id: "p4",
          name: "David Alaba",
          shirtNumber: 27,
          position: "CB",
          gridCoordinates: { x: 38, y: 75 },
          isHidden: false,
          image: DavidAlaba,
        },
        {
          id: "p5",
          name: "Alphonso Davies",
          shirtNumber: 19,
          position: "LB",
          gridCoordinates: { x: 15, y: 70 },
          isHidden: true,
          targetPlayerId: "davies-19",
          image: AlphonsoDavies,
        },
      ],
      [
        {
          id: "p6",
          name: "Thiago Alcântara",
          shirtNumber: 6,
          position: "CDM",
          gridCoordinates: { x: 60, y: 52 },
          isHidden: true,
          targetPlayerId: "thiago-6",
          image: ThiagoAlcântara,
        },
        {
          id: "p7",
          name: "Leon Goretzka",
          shirtNumber: 18,
          position: "CDM",
          gridCoordinates: { x: 40, y: 52 },
          isHidden: false,
          image: LeonGoretzka,
        },
      ],
      [
        {
          id: "p8",
          name: "Serge Gnabry",
          shirtNumber: 22,
          position: "RM",
          gridCoordinates: { x: 80, y: 32 },
          isHidden: false,
          image: SergeGnabry,
        },
        {
          id: "p9",
          name: "Thomas Müller",
          shirtNumber: 25,
          position: "CAM",
          gridCoordinates: { x: 50, y: 35 },
          isHidden: false,
          image: ThomasMüller,
        },
        {
          id: "p10",
          name: "Kingsley Coman",
          shirtNumber: 29,
          position: "LM",
          gridCoordinates: { x: 20, y: 32 },
          isHidden: false,
          image: KingsleyComan,
        },
      ],
      [
        {
          id: "p11",
          name: "Robert Lewandowski",
          shirtNumber: 9,
          position: "ST",
          gridCoordinates: { x: 50, y: 15 },
          isHidden: false,
          image: RobertLewandowski,
        },
      ],
    ],
  },
  hiddenPlayersData: [
    {
      targetPlayerId: "davies-19",
      identity: {
        name: "Alphonso Davies",
        nationality: "Canada",
        nationalityCode: "CA",
        ageAtMatch: 19,
        preferredFoot: "Left",
        shirtNumber: 19,
        position: "LB",
        image: "/images/players/davies.webp",
      },
      matchStats: {
        minutesPlayed: 90,
        goals: 0,
        assists: 0,
        yellowCards: 1,
        redCards: 0,
        rating: 7.3,
      },
      progressiveClues: [
        {
          attempt: 1,
          type: "nationality",
          value: "Canada",
          flag: "🇨🇦",
        },
        {
          attempt: 2,
          type: "careerPath",
          value: ["Vancouver Whitecaps", "Bayern Munich"],
        },
        { attempt: 3, type: "shirtNumber", value: 19 },
      ],
    },
    {
      targetPlayerId: "thiago-6",
      identity: {
        name: "Thiago Alcântara",
        nationality: "Spain",
        nationalityCode: "ES",
        ageAtMatch: 29,
        preferredFoot: "Right",
        shirtNumber: 6,
        position: "CDM",
        image: "/images/players/thiago.webp",
      },
      matchStats: {
        minutesPlayed: 86,
        goals: 0,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
        rating: 8.5,
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
          value: ["Barcelona", "Bayern Munich", "Liverpool"],
        },
        { attempt: 3, type: "shirtNumber", value: 6 },
      ],
    },
  ],
  matchFacts: {
    possession: { home: 38, away: 62 },
    shotsOnTarget: { home: 3, away: 2 },
    manOfTheMatch: "Kingsley Coman",
    trivia:
      "Former PSG academy player Kingsley Coman scored the game's only goal via a 59th-minute header, securing Bayern Munich's historic second continental treble.",
  },
};

export default uclFinal2020;