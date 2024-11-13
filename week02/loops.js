const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();


let lowGrades;
for (let i=0; i<studentReport.length; i++) {
    if (studentReport[i] < 30) {
        console.log(studentReport[i]);
    }
}

let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < 30) {
        console.log(studentReport[i]);
    }
    i++
}

studentReport.forEach(function (item) {
    if (item < 30) {
        console.log(item);
    }
});

for (let item in studentReport) {
    if (studentReport[item] < 30) {
        console.log(studentReport[item]);
    }
}

for (let item = 0; item < DAYS; item++) {
    const dayIndex = (today.getDay() + item) % 7;
    console.log(daysOfWeek[dayIndex]);
}


// myInfo = {
//     name: "Devon Curry",
//     photo: "images/ProfilePic.jpg",
//     favoriteFoods: ["Pizza", "Crab", "Alfredo"],
//     hobbies: ["Working Out", "Hiking", "Singing"],
//     placesLived: [
//         {
//             place: "Meridian, ID",
//             length: "17 years",
//         },
//         {
//             place: "Star, ID",
//             length: "2 years",
//         },
//         {
//             place: "Farmington, NM",
//             length: "2 years",
//         },
//         {
//             place: "Rexburg, ID",
//             length: "2 years",
//         },
//     ],
// };

// const foodsElement = document.querySelector('#favorite-foods');
// const placesElement = document.querySelector('#places-lived');
//     function generateListMarkup(list, templateCallback) {
//         const htmlList = list.map(templateCallback);
//         return htmlList.join("");
//     }

//   function foodsTemplate(food) {
//     return `<li>${food}</li>`;
//   }

//   function placesTemplate(place) {
//     return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
//   }
  
//   foodsElement.innerHTML = generateListMarkup(
//     myInfo.favoriteFoods,
//     foodsTemplate
//   );
//   placesElement.innerHTML = generateListMarkup(
//     myInfo.placesLived,
//     placesTemplate
//   );