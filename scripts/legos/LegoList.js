import { LegoDetail } from './LegoDetail.js';
import {makeUpper} from '../helpers.js'
export const makeLegoList = (legosArray) => {
  render(legosArray)
};

const render = (legoData) => {
  	const legoDisplay = document.querySelector("#all-legos");
	//What is map?
	//what does map return? An Array.
	//https://www.w3schools.com/jsref/jsref_map.asp
  	let HTMLArray = legoData.map(oneLego => {
		oneLego.LegoName = makeUpper(oneLego.LegoName);
    	return LegoDetail(oneLego);
  	})
  	//Since HTMLArray is an array, we can use join to make it a string
  	legoDisplay.innerHTML = HTMLArray.join("");
}