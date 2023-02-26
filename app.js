/*                  Question-01. 
Declare an empty array using JS literal notation to store
student names in future.*/

var arr_literal = [];




/*                  Question-02. 
Declare an empty array using JS object notation to store
student names in future.*/

//  var arr_object = new array();


/*                  Question03. 
Declare and initialize a strings array.*/

var names = [" Adnan", " Suhail", " Daniyal", " Irfan", " Junaid"];
document.write(`Name of friends : ${names}` + "<br>");


/*                  Question-04. 
Declare and initialize a numbers array*/

var num = [3 , 4 , 9 , 5 , 8, 9, 1, 6, 4, 1, 7, 74, 4, 254, 254, 12];
document.write(`Numbers are : ${num}` + "<br>");


/*                  Question-05. 
Declare and initialize a boolean array.*/
// Using Simple for loop
let array = [];
for (var i = 0; i < 6; i++){
    array.push(true);
}
document.write(array + "<br>");

// Using from() method
let arr1 = Array.from({ length:  3}, (val, index) => false);
document.write(arr1 + "<br>");

// Using map() method:
const arr2 = [...Array(5)].map(() => {
    return false;
});
document.write(arr1 + "<br>"); 

// Initializing Boolean array Directly:
var boolean = [true , true , true , true, false];
document.write(boolean + "<br>");

/*                  Question-06. 
Declare and initialize a mixed array.*/

var mixed_array = [" Red", " Green", 5, 9];
document.write(`Mixed array ${mixed_array}` + "<br>");


/*                  Question-07. 
Declare and Initialize an array and store available
education qualifications in Pakistan (e.g. SSC, HSC, BCS,
BS, BCOM, MS, M. Phil., PhD). Show the listed
qualifications in your browser like:*/

var edu_qualification = ["SSC ", "HSC ", "BCS ", "BS ", "BCOM ", "MS ", "M. Phil. ", "PhD"];
document.write(edu_qualification);


/*              Question-08. 
Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like:*/

var students_3 = ["Adnan ", "Ahmad ", "Omair"];
var obtained_marks = [475, 423, 395];
var total_marks = 500;
var percentage_1 = (obtained_marks[0] / total_marks) * 100;
var percentage_2 = (obtained_marks[1] / total_marks) * 100;
var percentage_3 = (obtained_marks[2] / total_marks) * 100;

document.write(`Score of ${students_3[0]} is: ${obtained_marks[0]}. Percentage: ${percentage_1}%` + "<br>");
document.write(`Score of ${students_3[1]} is: ${obtained_marks[1]}. Percentage: ${percentage_2}%` + "<br>");
document.write(`Score of ${students_3[2]} is: ${obtained_marks[2]}. Percentage: ${percentage_3}%` + "<br>" + "<br>");


/*                  Question-09. 
Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser.
c. Add two more color to the beginning of the array.
Display the updated array in your browser.
d. Delete the first color in the array. Display the updated
array in your browser.
e. Delete the last color in the array. Display the updated
array in your browser.
f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser.
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.*/

let colors_name = ["Green ", "Blue ", "Red ", "White "];


document.write(`Name of colors : ${colors_name}` + "<br>" + "<br>");

//         A

colors_name.unshift(prompt("Enter the name of color you want to add at beginning."));
document.write(`Updated color names at beginning : ${colors_name}` + "<br>" + "<br>");

//         B

colors_name.push(prompt("Enter the name of color you want to add at ending."));
document.write(`Updated color names at end : ${colors_name}` + "<br>" + "<br>");

//        C

colors_name.unshift("Orange ", "Voilet");
document.write(`Added two color name at beginning  : ${colors_name}` + "<br>" + "<br>");

//       D

colors_name.shift();
document.write(`Deleted one color name from starting. ${colors_name}` + "<br>" + "<br>");

//       E

colors_name.pop();
document.write(`Deleted color names from ending : ${colors_name}` + "<br>" + "<br>");

//       F

var index = prompt("At which index you want to add?");
var howmany = prompt("Do you want to remove any element. If yes then enter index number of element else enter 0.");
var itemX = prompt("Enter name of elemnt you want to add");
colors_name.splice(index, howmany, itemX);

document.write(`Updated array : ${colors_name}`);

//        G

var start = prompt("At which index you want to start?");
var how_many = prompt("Enter index number");
var remove = colors_name.slice(start, how_many);

document.write(`Updated array after deleting some element : ${remove}`);


/*                  Question-10. 
Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort
method.*/

let students_score = [86, 85, 35, 78, 83, 91, 94, 62, 56, 25, 14, 29, 38];
document.write(`Students score in random: ${students_score}` + "<br>");

students_score.sort();
document.write(`Students score in ascending order : ${students_score}` + "<br>");

students_score.reverse()
document.write(`Students score in desending order : ${students_score}` + "<br>" + "<br>");


/*                  Question-11. 
Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array.*/

let cities = ["Karachi ", " Lahore ", " Islamabad ", " Skardu ", " Faisalabad "];
document.write(`Name of cities : ${cities}` + "<br>");

let copied_cities = [].concat(" Lahore ", " Islamabad ", " Skardu ");
document.write(`Cities name copied from cities array : ${copied_cities}`);


/*                  Question-12. 
Write a program to create a single string from the
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method)*/

var arr = ["This ", " is ", " my ", " cat"];
document.write(arr + "<br>");

arr.join();
document.write(arr + "<br>");

var joining = arr.join("");
document.write(joining + "<br>");

arr.join("-");
document.write(arr + "<br>");


/*                  Question-13. 
Create a new array. Store values one by one in such a way
that you can access the values in the order in which they
were stored. (FIFO-First In First Out)*/

let pets = ["Dog ", "Goat ", "Cat ", "hen", "horse"];
pets.unshift("cow ");
document.write(`First in : ${pets}` + "<br>");

pets.shift();
document.write(`First out : ${pets}` + "<br>" + "<br>");


/*                  Question-14. 
Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last InFirst Out)*/

let fruits = ["mango ", "orange ", "apple ", "grapes ", "cherry "];
fruits.pop();
document.write(`First out : ${fruits}` + "<br>");

fruits.push("appricot ");
document.write(`First in : ${fruits}` + "<br>" + "<br>");


/*                  Question-15. 
Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array.
Display the following dropdown/select menu in your
browser using document.write() method: */

var select = document.getElementById("selectNumber");
let phone_manufacturers = ["Apple ", "Samsung ", "Motorola ", "Nokia ", "Sony ", "Haier "];

for(var i = 0; i < phone_manufacturers.length; i++) {
    var opt = phone_manufacturers[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
