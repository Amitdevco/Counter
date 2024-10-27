const box = document.querySelector('.box span'); // Select the span inside the box

let num = 0; // Start with an initial number
const inc = document.getElementById('inc');
const dec = document.getElementById('dec');
const clear = document.getElementById('clear');

inc.addEventListener("click", function() {
    num++; // Increment the number
    box.textContent = num; // Update the display
    box.style.color = "green"
});

dec.addEventListener("click", function() {
    num--; // Decrement the number
    box.textContent = num; // Update the display
    box.style.color = "red"
});
clear.addEventListener("click", function() {
    num = 0;
    box.textContent = num;
});
