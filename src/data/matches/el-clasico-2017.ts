import KeylorNavas from "../images/players/Keylor Navas.png";
import DaniCarvajal from "../images/players/Dani Carvajal.png";
import NachoFernández from "../images/players/Nacho Fernández.webp";
import SergioRamos from "../images/players/Sergio Ramos.webp";
import Marcelo from "../images/players/Marcelo.webp";
import LukaModrić from "../images/players/Luka Modrić.webp";
import Casemiro from "../images/players/Casemiro.webp";
import ToniKroos from "../images/players/Toni Kroos.webp";
import GarethBale from "../images/players/Gareth Bale.webp";
import KarimBenzema from "../images/players/Karim Benzema.webp";
import CristianoRonaldo from "../images/players/Cristiano Ronaldo.webp";

import realMadridLogo from "../images/teams/real-madrid.svg";
import barcelonaLogo from "../images/teams/barcelona.svg";

const elClasico2017 = {
  matchId: "el-clasico-april-2017",
  puzzleNumber: 135,
  date: "2017-04-23",
  difficulty: "Hard",
  title: "La Liga 2016/17: Real Madrid vs Barcelona",
  teams: {
    home: {
      name: "Real Madrid",
      shortName: "RMA",
      score: 2,
      logo: realMadridLogo,
    },
    away: {
      name: "Barcelona",
      shortName: "BAR",
      score: 3,
      logo: barcelonaLogo,
    },
  },
  pitch: {
    formation: "4-3-3",
    players: [
      [
        {
          id: "p1",
          name: "Keylor Navas",
          shirtNumber: 1,
          position: "GK",
          gridCoordinates: { x: 50, y: 90 },
          isHidden: false,
          image: KeylorNavas,
        },
      ],
      [
        {
          id: "p2",
          name: "Dani Carvajal",
          shirtNumber: 2,
          position: "RB",
          gridCoordinates: { x: 85, y: 70 },
          isHidden: false,
          image: DaniCarvajal,
        },
        {
          id: "p3",
          name: "Nacho Fernández",
          shirtNumber: 6,
          position: "CB",
          gridCoordinates: { x: 62, y: 75 },
          isHidden: false,
          image: NachoFernández,
        },
        {
          id: "p4",
          name: "Sergio Ramos",
          shirtNumber: 4,
          position: "CB",
          gridCoordinates: { x: 38, y: 75 },
          isHidden: true,
          targetPlayerId: "ramos-4",
          image: SergioRamos,
        },
        {
          id: "p5",
          name: "Marcelo",
          shirtNumber: 12,
          position: "LB",
          gridCoordinates: { x: 15, y: 70 },
          isHidden: false,
          image: Marcelo,
        },
      ],
      [
        {
          id: "p6",
          name: "Luka Modrić",
          shirtNumber: 19,
          position: "CM",
          gridCoordinates: { x: 70, y: 45 },
          isHidden: false,
          image: LukaModrić,
        },
        {
          id: "p7",
          name: "Casemiro",
          shirtNumber: 14,
          position: "CDM",
          gridCoordinates: { x: 50, y: 50 },
          isHidden: true,
          targetPlayerId: "casemiro-14",
          image: Casemiro,
        },
        {
          id: "p8",
          name: "Toni Kroos",
          shirtNumber: 8,
          position: "CM",
          gridCoordinates: { x: 30, y: 45 },
          isHidden: false,
          image: ToniKroos,
        },
      ],
      [
        {
          id: "p9",
          name: "Gareth Bale",
          shirtNumber: 11,
          position: "RW",
          gridCoordinates: { x: 80, y: 20 },
          isHidden: false,
          image: GarethBale,
        },
        {
          id: "p10",
          name: "Karim Benzema",
          shirtNumber: 9,
          position: "ST",
          gridCoordinates: { x: 50, y: 15 },
          isHidden: false,
          image: KarimBenzema,
        },
        {
          id: "p11",
          name: "Cristiano Ronaldo",
          shirtNumber: 7,
          position: "LW",
          gridCoordinates: { x: 20, y: 20 },
          isHidden: false,
          image: CristianoRonaldo,
        },
      ],
    ],
  },
  hiddenPlayersData: [
    {
      targetPlayerId: "ramos-4",
      identity: {
        name: "Sergio Ramos",
        nationality: "Spain",
        nationalityCode: "ES",
        ageAtMatch: 31,
        preferredFoot: "Right",
        shirtNumber: 4,
        position: "CB",
        image: "/images/players/ramos.webp",
      },
      matchStats: {
        minutesPlayed: 77,
        goals: 0,
        assists: 0,
        yellowCards: 0,
        redCards: 1,
        rating: 5.4,
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
          value: ["Sevilla", "Real Madrid", "PSG", "Sevilla"],
        },
        { attempt: 3, type: "shirtNumber", value: 4 },
      ],
    },
    {
      targetPlayerId: "casemiro-14",
      identity: {
        name: "Casemiro",
        nationality: "Brazil",
        nationalityCode: "BR",
        ageAtMatch: 25,
        preferredFoot: "Right",
        shirtNumber: 14,
        position: "CDM",
        image: "/images/players/casemiro.webp",
      },
      matchStats: {
        minutesPlayed: 62,
        goals: 1,
        assists: 0,
        yellowCards: 1,
        redCards: 0,
        rating: 7.5,
      },
      progressiveClues: [
        {
          attempt: 1,
          type: "nationality",
          value: "Brazil",
          flag: "🇧🇷",
        },
        {
          attempt: 2,
          type: "careerPath",
          value: ["São Paulo", "Real Madrid", "FC Porto", "Manchester United"],
        },
        { attempt: 3, type: "shirtNumber", value: 14 },
      ],
    },
  ],
  matchFacts: {
    possession: { home: 42, away: 58 },
    shotsOnTarget: { home: 14, away: 9 },
    manOfTheMatch: "Lionel Messi",
    trivia:
      "Lionel Messi scored his 500th goal for Barcelona with a last-second winner in the 92nd minute.",
  },
};

export default elClasico2017;
