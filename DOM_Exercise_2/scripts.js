/*document.querySelector('a').addEventListener('click', function(event) {
    console.log('Clicked');
    event.preventDefault();
});
*/
document.querySelector("#letters").addEventListener('click', function(event) {
 const letters = document.getElementById("letters-content");
 letters.style.display = "block";
 event.preventDefault();

const numbers = document.getElementById("numbers-content");
numbers.style.display = "none"
event.preventDefault();
});

