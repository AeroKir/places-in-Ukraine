import { saveAs } from 'file-saver';
import data from '../data/city.list.json';

const ukrainianCities = [];

data.forEach((element) => {
  if (element.country === 'UA') {
    ukrainianCities.push(element);
  }
});

ukrainianCities.forEach((element, i) => {
  ukrainianCities[i].nameUa = '';
  ukrainianCities[i].nameRu = '';
});

const ukrainianCitiesNamedOnA = [];
const ukrainianCitiesNamedOnB = [];
const ukrainianCitiesNamedOnC = [];
const ukrainianCitiesNamedOnD = [];
const ukrainianCitiesNamedOnE = [];
const ukrainianCitiesNamedOnF = [];
const ukrainianCitiesNamedOnG = [];
const ukrainianCitiesNamedOnH = [];
const ukrainianCitiesNamedOnI = [];
const ukrainianCitiesNamedOnJ = [];
const ukrainianCitiesNamedOnK = [];
const ukrainianCitiesNamedOnL = [];
const ukrainianCitiesNamedOnM = [];
const ukrainianCitiesNamedOnN = [];
const ukrainianCitiesNamedOnO = [];
const ukrainianCitiesNamedOnP = [];
const ukrainianCitiesNamedOnQ = [];
const ukrainianCitiesNamedOnR = [];
const ukrainianCitiesNamedOnS = [];
const ukrainianCitiesNamedOnT = [];
const ukrainianCitiesNamedOnU = [];
const ukrainianCitiesNamedOnV = [];
const ukrainianCitiesNamedOnW = [];
const ukrainianCitiesNamedOnX = [];
const ukrainianCitiesNamedOnY = [];
const ukrainianCitiesNamedOnZ = [];
const ukrainianCitiesNamedOnAnotherSymbol = [];

ukrainianCities.forEach((cityObject) => {
  switch (cityObject.name[0]) {
    case 'A':
      ukrainianCitiesNamedOnA.push(cityObject);
      break;
    case 'B':
      ukrainianCitiesNamedOnB.push(cityObject);
      break;
    case 'C':
      ukrainianCitiesNamedOnC.push(cityObject);
      break;
    case 'D':
      ukrainianCitiesNamedOnD.push(cityObject);
      break;
    case 'E':
      ukrainianCitiesNamedOnE.push(cityObject);
      break;
    case 'F':
      ukrainianCitiesNamedOnF.push(cityObject);
      break;
    case 'G':
      ukrainianCitiesNamedOnG.push(cityObject);
      break;
    case 'H':
      ukrainianCitiesNamedOnH.push(cityObject);
      break;
    case 'I':
      ukrainianCitiesNamedOnI.push(cityObject);
      break;
    case 'J':
      ukrainianCitiesNamedOnJ.push(cityObject);
      break;
    case 'K':
      ukrainianCitiesNamedOnK.push(cityObject);
      break;
    case 'L':
      ukrainianCitiesNamedOnL.push(cityObject);
      break;
    case 'M':
      ukrainianCitiesNamedOnM.push(cityObject);
      break;
    case 'N':
      ukrainianCitiesNamedOnN.push(cityObject);
      break;
    case 'O':
      ukrainianCitiesNamedOnO.push(cityObject);
      break;
    case 'P':
      ukrainianCitiesNamedOnP.push(cityObject);
      break;
    case 'Q':
      ukrainianCitiesNamedOnQ.push(cityObject);
      break;
    case 'R':
      ukrainianCitiesNamedOnR.push(cityObject);
      break;
    case 'S':
      ukrainianCitiesNamedOnS.push(cityObject);
      break;
    case 'T':
      ukrainianCitiesNamedOnT.push(cityObject);
      break;
    case 'U':
      ukrainianCitiesNamedOnU.push(cityObject);
      break;
    case 'V':
      ukrainianCitiesNamedOnV.push(cityObject);
      break;
    case 'W':
      ukrainianCitiesNamedOnW.push(cityObject);
      break;
    case 'X':
      ukrainianCitiesNamedOnX.push(cityObject);
      break;
    case 'Y':
      ukrainianCitiesNamedOnY.push(cityObject);
      break;
    case 'Z':
      ukrainianCitiesNamedOnZ.push(cityObject);
      break;
    case '-':
      ukrainianCitiesNamedOnAnotherSymbol.push(cityObject);
    default:
      break;
  }
});

export default ukrainianCities;
