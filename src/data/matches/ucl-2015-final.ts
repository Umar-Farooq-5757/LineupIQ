import MarcAndréterStegen from "../images/players/Marc-André ter Stegen.webp";
import DaniAlves from "../images/players/Dani Alves.webp";
import JavierMascherano from "../images/players/Javier Mascherano.webp";
import GerardPiqué from "../images/players/Gerard Piqué.webp";
import JordiAlba from "../images/players/Jordi Alba.webp";
import IvanRakitić from "../images/players/Ivan Rakitić.webp";
import SergioBusquets from "../images/players/Sergio Busquets.webp";
import AndrésIniesta from "../images/players/Andrés Iniesta.webp";
import LionelMessi from "../images/players/Lionel Messi.webp";
import LuisSuárez from "../images/players/Luis Suárez.webp";
import NeymarJr from "../images/players/Neymar Jr.webp";

const ucl2015Final = {
  matchId: "ucl-2015-final",
  puzzleNumber: 134,
  date: "2015-06-06",
  difficulty: "Medium",
  title: "2015 UEFA Champions League Final",
  teams: {
    home: {
      name: "Barcelona",
      shortName: "BAR",
      score: 3,
      logo: "/images/teams/barcelona.png",
    },
    away: {
      name: "Juventus",
      shortName: "JUV",
      score: 1,
      logo: "/images/teams/juventus.png",
    },
  },
  pitch: {
    formation: "4-3-3",
    players: [
      [
        {
          id: "p1",
          name: "Marc-André ter Stegen",
          shirtNumber: 1,
          position: "GK",
          gridCoordinates: { x: 50, y: 90 },
          isHidden: false,
          image: MarcAndréterStegen,
        },
      ],

      [
        {
          id: "p2",
          name: "Dani Alves",
          shirtNumber: 22,
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
          isHidden: true,
          targetPlayerId: "mascherano-14",
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
          name: "Jordi Alba",
          shirtNumber: 18,
          position: "LB",
          gridCoordinates: { x: 15, y: 70 },
          isHidden: false,
          image: JordiAlba,
        },
      ],
      [
        {
          id: "p6",
          name: "Ivan Rakitić",
          shirtNumber: 4,
          position: "CM",
          gridCoordinates: { x: 70, y: 45 },
          isHidden: false,
          image: IvanRakitić,
        },
        {
          id: "p7",
          name: "Sergio Busquets",
          shirtNumber: 5,
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
          name: "Lionel Messi",
          shirtNumber: 10,
          position: "RW",
          gridCoordinates: { x: 80, y: 20 },
          isHidden: false,
          image: LionelMessi,
        },
        {
          id: "p10",
          name: "Luis Suárez",
          shirtNumber: 9,
          position: "ST",
          gridCoordinates: { x: 50, y: 15 },
          isHidden: false,
          image: LuisSuárez,
        },
        {
          id: "p11",
          name: "Neymar Jr",
          shirtNumber: 11,
          position: "LW",
          gridCoordinates: { x: 20, y: 20 },
          isHidden: true,
          targetPlayerId: "neymar-11",
          image: NeymarJr,
        },
      ],
    ],
  },
  hiddenPlayersData: [
    {
      targetPlayerId: "mascherano-14",
      identity: {
        name: "Javier Mascherano",
        nationality: "Argentina",
        nationalityCode: "AR",
        ageAtMatch: 30,
        preferredFoot: "Right",
        shirtNumber: 14,
        position: "CB",
        image: "/images/players/mascherano.webp",
      },
      matchStats: {
        minutesPlayed: 90,
        goals: 0,
        assists: 0,
        yellowCards: 1,
        redCards: 0,
        rating: 7.2,
      },
      progressiveClues: [
        {
          attempt: 1,
          type: "nationality",
          value: "Argentina",
          flag: "🇦🇷",
        },
        { attempt: 2, type: "position", value: "CB / CDM" },
        {
          attempt: 3,
          type: "careerPath",
          value: [
            "River Plate",
            "Corinthians",
            "West Ham",
            "Liverpool",
            "Barcelona",
          ],
        },
        { attempt: 4, type: "shirtNumber", value: 14 },
        {
          attempt: 5,
          type: "heatmap",
          value: "/images/heatmaps/mascherano-2015.png",
        },
      ],
    },
    {
      targetPlayerId: "neymar-11",
      identity: {
        name: "Neymar Jr.",
        nationality: "Brazil",
        nationalityCode: "BR",
        ageAtMatch: 23,
        preferredFoot: "Right",
        shirtNumber: 11,
        position: "LW",
        image: "/images/players/neymar.webp",
      },
      matchStats: {
        minutesPlayed: 90,
        goals: 1,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
        rating: 8.6,
      },
      progressiveClues: [
        {
          attempt: 1,
          type: "nationality",
          value: "Brazil",
          flag: "🇧🇷",
        },
        { attempt: 2, type: "position", value: "LW" },
        {
          attempt: 3,
          type: "careerPath",
          value: ["Santos", "Barcelona", "PSG", "Al Hilal"],
        },
        { attempt: 4, type: "shirtNumber", value: 11 },
        {
          attempt: 5,
          type: "heatmap",
          value: "/images/heatmaps/neymar-2015.png",
        },
      ],
    },
  ],
  matchFacts: {
    possession: { home: 68, away: 32 },
    shotsOnTarget: { home: 8, away: 4 },
    manOfTheMatch: "Andrés Iniesta",
    trivia:
      "Barcelona became the first club in history to win the continental treble twice.",
  },
};

export default ucl2015Final;
