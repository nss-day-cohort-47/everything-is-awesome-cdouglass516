console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';
import {navBar,noLegoId} from './nav/nav.js';

const navElement = document.querySelector("nav");
navElement.addEventListener("change", (event) => {
	if (event.target.id === "brickMaterial") {
		const mtl = document.getElementById(event.target.id).value;
		filterLegos(mtl,"M");
	}
	if (event.target.id === "LegoId") {
		filterLegos(document.getElementById("LegoId").value,"N");
	}
	if(event.target.id === "byYear") {
		filterLegos("","S");
	}
});

navElement.addEventListener("keyup", (event) => {
    if (event.target.id !== "LegoId") return;
	if (event.isComposing || event.keyCode === 229) {
		return;
	}
	else if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		filterLegos(document.getElementById("LegoId").value,"N");
	}
});
  // do something

navElement.addEventListener("click", (event) => {

	if (event.target.id === "showBlue") {
		filterLegos("Blue",'C');
	}
	else if (event.target.id === "showRed") {
		filterLegos("Red",'C');
	} 
	else if (event.target.id === "showGreen") {
		filterLegos("Green",'C');
	} 
	else if (event.target.id === "showAll") {
		makeLegoList(useLegos());
	}
})

const filterLegos = (whatFilter, type) => {
	let filterArray = [];
	if (type === 'A') {
		filterArray = useLegos();
	}
	if (type === 'C') {
		filterArray = useLegos().filter(singleLego => {
			if (singleLego.LegoName.includes(whatFilter.toUpperCase())) {
				return singleLego;
			}
		})
	}
	else if (type === 'M') {
		filterArray = useLegos().filter(singleLego => {
			if (singleLego.Material.includes(whatFilter)) {
				return singleLego;
			}
		})
	}
	else if (type === 'N') {
		filterArray = useLegos().filter(singleLego => {
			if (singleLego.LegoId === whatFilter) {
				return singleLego;
			}
		})
		if(filterArray.length < 1){
			filterArray = noLegoId;
		}
	}
	let noYear = [];
	let year = [];
	const srt = document.getElementById('byYear').value;
	if (filterArray.length < 1 && type === 'S') {
		filterArray = useLegos();
	}
	filterArray.forEach(item => {
		if (item.YearFrom === "" || item.YearFrom === null) {
			noYear.push(item)
		} else {
			year.push(item);
		}
	});
	if (srt !== 'no') { //sort array
		filterArray = [];
		if (srt === 'new') {
			year.sort((a, b) => (a.YearFrom > b.YearFrom) ? -1 : 1);
		} else {
			year.sort((a, b) => (a.YearFrom > b.YearFrom) ? 1 : -1);
		}
	}
	filterArray = [...year, ...noYear];
	makeLegoList(filterArray);
}

const selectList =["Solid", "Transparent", "Pearl", "Chrome", "Metallic", "Milky", "Glitter", "Speckle", "Ink", "Process", "Modulex"];
const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		const navDisplay = document.querySelector("nav");
		navDisplay.innerHTML = navBar();
		const selectBrickMaterial = document.getElementById('brickMaterial');
		selectList.forEach((item, index) =>{
			selectBrickMaterial.options[index] = new Option(item, item);
		})
		makeLegoList(legoArray)
	})

}

startEIA();