const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', function () {
	navigation.classList.toggle('open');
	hamButton.textContent = hamButton.textContent === '❌' ? '☰' : '❌';
});

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
	  templeName: "Albuquerque New Mexico",
	  location: "Albuquerque, New Mexico",
	  dedicated: "2000, March, 5",
	  area: 34245,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/400x250/albuquerque-temple-lds-137883-wallpaper.jpg"
	},
	{
	  templeName: "Atlanta Georgia",
	  location: "Atlanta, Georgia",
	  dedicated: "1983, June, 1",
      area: 34500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/400x250/atlanta-temple-lds-811746-wallpaper.jpg"
	},
	{
	  templeName: "Calgary Alberta",
	  location: "Calgary, Alberta",
	  dedicated: "2012, October, 28",
	  area: 33000,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/calgary-alberta/400x250/calgary-alberta-temple-lds-1058967-wallpaper.jpg"
	}
];

function createTempleCard(filteredTemples) {
	const templeGrid = document.querySelector(".temple-grid");
    templeGrid.innerHTML = "";

    filteredTemples.forEach(temple => {
		let card = document.createElement("div");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedicated = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedicated);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector(".temple-grid").appendChild(card);
	});
}

createTempleCard(temples);

const allLink = document.querySelector("#all");
allLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => !temple.location.includes("zzzzz")));
});

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => 
		(
			temple.dedicated.includes("1888") ||
			temple.dedicated.includes("1974") ||
			temple.dedicated.includes("1983") ||
			temple.dedicated.includes("1986")
		)
	));
});

const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple =>
		(
			temple.dedicated.includes("2001") ||
			temple.dedicated.includes("2002") ||
			temple.dedicated.includes("2003") ||
			temple.dedicated.includes("2004") ||
			temple.dedicated.includes("2005") ||
			temple.dedicated.includes("2006") ||
			temple.dedicated.includes("2007") ||
			temple.dedicated.includes("2008") ||
			temple.dedicated.includes("2009") ||
			temple.dedicated.includes("2010") ||
			temple.dedicated.includes("2011") ||
			temple.dedicated.includes("2012") ||
			temple.dedicated.includes("2013") ||
			temple.dedicated.includes("2014") ||
			temple.dedicated.includes("2015") ||
			temple.dedicated.includes("2016") ||
			temple.dedicated.includes("2017") ||
			temple.dedicated.includes("2018") ||
			temple.dedicated.includes("2019") ||
			temple.dedicated.includes("2020") ||
			temple.dedicated.includes("2021") ||
			temple.dedicated.includes("2022") ||
			temple.dedicated.includes("2023") ||
			temple.dedicated.includes("2024")
		)
	));
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.area > 90000));
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.area <= 10000));
});