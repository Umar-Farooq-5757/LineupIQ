import PeterSchmeichel from "../images/players/Peter Schmeichel.webp";
import GaryNeville from "../images/players/Gary Neville.jfif";
import RonnyJohnsen from "../images/players/Ronny Johnsen.jfif";
import JaapStam from "../images/players/Jaap Stam.jfif";
import DenisIrwin from "../images/players/Denis Irwin.jfif";
import RyanGiggs from "../images/players/Ryan Giggs.png";
import DavidBeckham from "../images/players/David Beckham.webp";
import NickyButt from "../images/players/Nicky Butt.jfif";
import JesperBlomqvist from "../images/players/Jesper Blomqvist.jfif";
import DwightYorke from "../images/players/Dwight Yorke.jfif";
import AndyCole from "../images/players/Andy Cole.jfif";

import manchesterUnitedLogo from "../images/teams/manchester-united.svg";
import bayernMunichLogo from "../images/teams/bayern-munich.svg";

const treble1999UCLFinal = {
  matchId: "ucl-final-camp-nou-1999",
  puzzleNumber: 137,
  date: "1999-05-26",
  difficulty: "Hard",
  title: "UCL Final 1998/99: Manchester United vs Bayern Munich",
  teams: {
    home: {
      name: "Manchester United",
      shortName: "MUN",
      score: 2,
      logo: manchesterUnitedLogo,
    },
    away: {
      name: "Bayern Munich",
      shortName: "BAY",
      score: 1,
      logo: bayernMunichLogo,
    },
  },
  pitch: {
    formation: "4-4-2",
    players: [
      [
        {
          id: "p1",
          name: "Peter Schmeichel",
          shirtNumber: 1,
          position: "GK",
          gridCoordinates: { x: 50, y: 90 },
          isHidden: false,
          image: PeterSchmeichel,
        },
      ],
      [
        {
          id: "p2",
          name: "Gary Neville",
          shirtNumber: 2,
          position: "RB",
          gridCoordinates: { x: 85, y: 70 },
          isHidden: false,
          image: GaryNeville,
        },
        {
          id: "p3",
          name: "Ronny Johnsen",
          shirtNumber: 6,
          position: "CB",
          gridCoordinates: { x: 62, y: 75 },
          isHidden: false,
          image: RonnyJohnsen,
        },
        {
          id: "p4",
          name: "Jaap Stam",
          shirtNumber: 6,
          position: "CB",
          gridCoordinates: { x: 38, y: 75 },
          isHidden: false,
          image: JaapStam,
        },
        {
          id: "p5",
          name: "Denis Irwin",
          shirtNumber: 3,
          position: "LB",
          gridCoordinates: { x: 15, y: 70 },
          isHidden: false,
          image: DenisIrwin,
        },
      ],
      [
        {
          id: "p6",
          name: "Ryan Giggs",
          shirtNumber: 11,
          position: "RM",
          gridCoordinates: { x: 85, y: 45 },
          isHidden: false,
          image: RyanGiggs,
        },
        {
          id: "p7",
          name: "David Beckham",
          shirtNumber: 7,
          position: "CM",
          gridCoordinates: { x: 60, y: 45 },
          isHidden: true,
          targetPlayerId: "beckham-7",
          image: DavidBeckham,
        },
        {
          id: "p8",
          name: "Nicky Butt",
          shirtNumber: 8,
          position: "CM",
          gridCoordinates: { x: 40, y: 45 },
          isHidden: false,
          image: NickyButt,
        },
        {
          id: "p9",
          name: "Jesper Blomqvist",
          shirtNumber: 15,
          position: "LM",
          gridCoordinates: { x: 15, y: 45 },
          isHidden: false,
          image: JesperBlomqvist,
        },
      ],
      [
        {
          id: "p10",
          name: "Dwight Yorke",
          shirtNumber: 19,
          position: "ST",
          gridCoordinates: { x: 62, y: 18 },
          isHidden: false,
          image: DwightYorke,
        },
        {
          id: "p11",
          name: "Andy Cole",
          shirtNumber: 9,
          position: "ST",
          gridCoordinates: { x: 38, y: 18 },
          isHidden: true,
          targetPlayerId: "cole-9",
          image: AndyCole,
        },
      ],
    ],
  },
  hiddenPlayersData: [
    {
      targetPlayerId: "beckham-7",
      identity: {
        name: "David Beckham",
        nationality: "England",
        nationalityCode: "GB-ENG",
        ageAtMatch: 24,
        preferredFoot: "Right",
        shirtNumber: 7,
        position: "CM",
        image: "/images/players/beckham.webp",
      },
      matchStats: {
        minutesPlayed: 90,
        goals: 0,
        assists: 2,
        yellowCards: 0,
        redCards: 0,
        rating: 8.8,
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
          value: [
            "Manchester United",
            "Preston North End",
            "Real Madrid",
            "LA Galaxy",
            "AC Milan",
            "PSG",
          ],
        },
        { attempt: 3, type: "shirtNumber", value: 7 },
      ],
    },
    {
      targetPlayerId: "cole-9",
      identity: {
        name: "Andy Cole",
        nationality: "England",
        nationalityCode: "GB-ENG",
        ageAtMatch: 27,
        preferredFoot: "Right",
        shirtNumber: 9,
        position: "ST",
        image: "/images/players/cole.webp",
      },
      matchStats: {
        minutesPlayed: 81,
        goals: 0,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
        rating: 6.9,
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
          value: [
            "Arsenal",
            "Bristol City",
            "Newcastle United",
            "Manchester United",
            "Blackburn Rovers",
            "Fulham",
            "Manchester City",
          ],
        },
        { attempt: 3, type: "shirtNumber", value: 9 },
      ],
    },
  ],
  matchFacts: {
    possession: { home: 53, away: 47 },
    shotsOnTarget: { home: 5, away: 3 },
    manOfTheMatch: "Peter Schmeichel",
    trivia:
      "Manchester United scored twice in stoppage time through substitutes Teddy Sheringham and Ole Gunnar Solskjær to complete an unprecedented Treble.",
  },
};

export default treble1999UCLFinal;