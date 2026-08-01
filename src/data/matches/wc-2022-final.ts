import EmilianoMartinez from "../images/players/Emiliano Martínez.webp";
import NahuelMolina from "../images/players/Nahuel Molina.webp";
import CristianRomero from "../images/players/Cristian Romero.webp";
import NicolasOtamendi from "../images/players/Nicolas Otamendi.webp";
import NicolasTagliafico from "../images/players/Nicolas Tagliafico.webp";
import RodrigoDePaul from "../images/players/Rodrigo De Paul.webp";
import EnzoFernández from "../images/players/Enzo Fernández.webp";
import AlexisMacAllister from "../images/players/Alexis Mac Allister.webp";
import LionelMessi from "../images/players/Lionel Messi.webp";
import JuliánÁlvarez from "../images/players/Julián Álvarez.webp";
import ÁngelDiMaría from "../images/players/Ángel Di María.webp";

import argentinaFlag from "../images/teams/argentina.svg";
import franceFlag from "../images/teams/france.svg";

const wc22Final = {
  matchId: "wc-2022-final",
  puzzleNumber: 1,
  date: "2022-12-18",
  difficulty: "Easy",
  title: "2022 FIFA World Cup Final",
  teams: {
    home: {
      name: "Argentina",
      shortName: "ARG",
      score: 3,
      penaltyScore: 4,
      logo: argentinaFlag,
    },
    away: {
      name: "France",
      shortName: "FRA",
      score: 3,
      penaltyScore: 2,
      logo: franceFlag,
    },
  },
  pitch: {
    formation: "4-3-3",
    players: [
      [
        {
          id: "p1",
          name: "Emiliano Martínez",
          shirtNumber: 23,
          position: "GK",
          gridCoordinates: { x: 50, y: 90 },
          isHidden: false,
          image: EmilianoMartinez,
        },
      ],
      [
        {
          id: "p2",
          name: "Nahuel Molina",
          shirtNumber: 26,
          position: "RB",
          gridCoordinates: { x: 85, y: 70 },
          isHidden: false,
          image: NahuelMolina,
        },
        {
          id: "p3",
          name: "Cristian Romero",
          shirtNumber: 13,
          position: "CB",
          gridCoordinates: { x: 62, y: 75 },
          isHidden: false,
          image: CristianRomero,
        },
        {
          id: "p4",
          name: "Nicolas Otamendi",
          shirtNumber: 19,
          position: "CB",
          gridCoordinates: { x: 38, y: 75 },
          isHidden: false,
          image: NicolasOtamendi,
        },
        {
          id: "p5",
          name: "Nicolas Tagliafico",
          shirtNumber: 3,
          position: "LB",
          gridCoordinates: { x: 15, y: 70 },
          isHidden: false,
          image: NicolasTagliafico,
        },
      ],
      [
        {
          id: "p6",
          name: "Rodrigo De Paul",
          shirtNumber: 7,
          position: "CM",
          gridCoordinates: { x: 70, y: 45 },
          isHidden: false,
          image: RodrigoDePaul,
        },
        {
          id: "p7",
          name: "Enzo Fernández",
          shirtNumber: 24,
          position: "CDM",
          gridCoordinates: { x: 50, y: 50 },
          isHidden: true,
          targetPlayerId: "enzo-24",
          image: EnzoFernández,
        },
        {
          id: "p8",
          name: "Alexis Mac Allister",
          shirtNumber: 20,
          position: "CM",
          gridCoordinates: { x: 30, y: 45 },
          isHidden: false,
          image: AlexisMacAllister,
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
          name: "Julián Álvarez",
          shirtNumber: 9,
          position: "ST",
          gridCoordinates: { x: 50, y: 15 },
          isHidden: false,
          image: JuliánÁlvarez,
        },
        {
          id: "p11",
          name: "Ángel Di María",
          shirtNumber: 11,
          position: "LW",
          gridCoordinates: { x: 20, y: 20 },
          isHidden: true,
          targetPlayerId: "dimaria-11",
          image: ÁngelDiMaría,
        },
      ],
    ],
  },
  hiddenPlayersData: [
    {
      targetPlayerId: "enzo-24",
      identity: {
        name: "Enzo Fernández",
        nationality: "Argentina",
        nationalityCode: "AR",
        ageAtMatch: 21,
        preferredFoot: "Right",
        shirtNumber: 24,
        position: "CDM",
        image: "/images/players/enzo-fernandez.webp",
      },
      matchStats: {
        minutesPlayed: 120,
        goals: 0,
        assists: 0,
        yellowCards: 1,
        redCards: 0,
        rating: 7.8,
      },
      progressiveClues: [
        {
          attempt: 1,
          type: "nationality",
          value: "Argentina",
          flag: "🇦🇷",
        },
        {
          attempt: 2,
          type: "careerPath",
          value: ["River Plate", "Defense y Justicia", "Benfica", "Chelsea"],
        },
        { attempt: 3, type: "shirtNumber", value: 24 },
      ],
    },
    {
      targetPlayerId: "dimaria-11",
      identity: {
        name: "Ángel Di María",
        nationality: "Argentina",
        nationalityCode: "AR",
        ageAtMatch: 34,
        preferredFoot: "Left",
        shirtNumber: 11,
        position: "LW",
        image: "/images/players/dimaria.webp",
      },
      matchStats: {
        minutesPlayed: 64,
        goals: 1,
        assists: 1,
        yellowCards: 0,
        redCards: 0,
        rating: 8.5,
      },
      progressiveClues: [
        {
          attempt: 1,
          type: "nationality",
          value: "Argentina",
          flag: "🇦🇷",
        },
        {
          attempt: 2,
          type: "careerPath",
          value: [
            "Rosario Central",
            "Benfica",
            "Real Madrid",
            "Manchester United",
            "PSG",
            "Juventus",
          ],
        },
        { attempt: 3, type: "shirtNumber", value: 11 },
      ],
    },
  ],
  matchFacts: {
    possession: { home: 54, away: 46 },
    shotsOnTarget: { home: 10, away: 5 },
    manOfTheMatch: "Lionel Messi",
    trivia:
      "Kylian Mbappé became only the second man in history to score a hat-trick in a World Cup final after Geoff Hurst in 1966.",
  },
};

export default wc22Final;
