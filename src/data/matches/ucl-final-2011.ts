import VíctorValdés from "../images/players/Víctor Valdés.webp";
import DaniAlves from "../images/players/Dani Alves.webp";
import JavierMascherano from "../images/players/Javier Mascherano.webp";
import GerardPiqué from "../images/players/Gerard Piqué.webp";
import ÉricAbidal from "../images/players/Éric Abidal.webp";
import SergioBusquets from "../images/players/Sergio Busquets.webp";
import Xavi from "../images/players/Xavi.webp";
import AndrésIniesta from "../images/players/Andrés Iniesta.webp";
import DavidVilla from "../images/players/David Villa.webp";
import LionelMessi from "../images/players/Lionel Messi.webp";
import Pedro from "../images/players/Pedro.webp";

import barcelonaLogo from "../images/teams/barcelona.svg";
import manchesterUnitedLogo from "../images/teams/manchester-united.svg";

const uclFinal2011 = {
  matchId: "ucl-final-wembley-2011",
  puzzleNumber: 138,
  date: "2011-05-28",
  difficulty: "Hard",
  title: "UCL Final 2010/11: Barcelona vs Manchester United",
  teams: {
    home: {
      name: "Barcelona",
      shortName: "BAR",
      score: 3,
      logo: barcelonaLogo,
    },
    away: {
      name: "Manchester United",
      shortName: "MUN",
      score: 1,
      logo: manchesterUnitedLogo,
    },
  },
  pitch: {
    formation: "4-3-3",
    players: [
      [
        {
          id: "p1",
          name: "Víctor Valdés",
          shirtNumber: 1,
          position: "GK",
          gridCoordinates: { x: 50, y: 90 },
          isHidden: false,
          image: VíctorValdés,
        },
      ],
      [
        {
          id: "p2",
          name: "Dani Alves",
          shirtNumber: 2,
          position: "RB",
          gridCoordinates: { x: 85, y: 70 },
          isHidden: false,
          image: DaniAlves,
        },
        {
          id: "p3",
          name: "Javier Mascherano",
          shirtNumber: 14,
          position: "CB",
          gridCoordinates: { x: 62, y: 75 },
          isHidden: false,
          image: JavierMascherano,
        },
        {
          id: "p4",
          name: "Gerard Piqué",
          shirtNumber: 3,
          position: "CB",
          gridCoordinates: { x: 38, y: 75 },
          isHidden: false,
          image: GerardPiqué,
        },
        {
          id: "p5",
          name: "Éric Abidal",
          shirtNumber: 22,
          position: "LB",
          gridCoordinates: { x: 15, y: 70 },
          isHidden: false,
          image: ÉricAbidal,
        },
      ],
      [
        {
          id: "p6",
          name: "Xavi",
          shirtNumber: 6,
          position: "CM",
          gridCoordinates: { x: 70, y: 45 },
          isHidden: true,
          targetPlayerId: "xavi-6",
          image: Xavi,
        },
        {
          id: "p7",
          name: "Sergio Busquets",
          shirtNumber: 16,
          position: "CDM",
          gridCoordinates: { x: 50, y: 50 },
          isHidden: false,
          image: SergioBusquets,
        },
        {
          id: "p8",
          name: "Andrés Iniesta",
          shirtNumber: 8,
          position: "CM",
          gridCoordinates: { x: 30, y: 45 },
          isHidden: false,
          image: AndrésIniesta,
        },
      ],
      [
        {
          id: "p9",
          name: "David Villa",
          shirtNumber: 7,
          position: "RW",
          gridCoordinates: { x: 80, y: 20 },
          isHidden: true,
          targetPlayerId: "villa-7",
          image: DavidVilla,
        },
        {
          id: "p10",
          name: "Lionel Messi",
          shirtNumber: 10,
          position: "CF",
          gridCoordinates: { x: 50, y: 18 },
          isHidden: false,
          image: LionelMessi,
        },
        {
          id: "p11",
          name: "Pedro",
          shirtNumber: 17,
          position: "LW",
          gridCoordinates: { x: 20, y: 20 },
          isHidden: false,
          image: Pedro,
        },
      ],
    ],
  },
  hiddenPlayersData: [
    {
      targetPlayerId: "xavi-6",
      identity: {
        name: "Xavi",
        nationality: "Spain",
        nationalityCode: "ES",
        ageAtMatch: 31,
        preferredFoot: "Right",
        shirtNumber: 6,
        position: "CM",
        image: "/images/players/xavi.webp",
      },
      matchStats: {
        minutesPlayed: 90,
        goals: 0,
        assists: 1,
        yellowCards: 0,
        redCards: 0,
        rating: 8.9,
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
          value: ["Barcelona", "Al-Sadd"],
        },
        { attempt: 3, type: "shirtNumber", value: 6 },
      ],
    },
    {
      targetPlayerId: "villa-7",
      identity: {
        name: "David Villa",
        nationality: "Spain",
        nationalityCode: "ES",
        ageAtMatch: 29,
        preferredFoot: "Right",
        shirtNumber: 7,
        position: "RW",
        image: "/images/players/villa.webp",
      },
      matchStats: {
        minutesPlayed: 86,
        goals: 1,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
        rating: 8.2,
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
          value: [
            "Sporting Gijón",
            "Zaragoza",
            "Valencia",
            "Barcelona",
            "Atlético Madrid",
            "New York City FC",
            "Melbourne City",
            "Vissel Kobe",
          ],
        },
        { attempt: 3, type: "shirtNumber", value: 7 },
      ],
    },
  ],
  matchFacts: {
    possession: { home: 68, away: 32 },
    shotsOnTarget: { home: 12, away: 1 },
    manOfTheMatch: "Lionel Messi",
    trivia:
      "Considered one of the greatest team performances in modern football history, Pep Guardiola's Barcelona out-shot Manchester United 22 to 4 to lift their second Champions League trophy in three years.",
  },
};

export default uclFinal2011;
