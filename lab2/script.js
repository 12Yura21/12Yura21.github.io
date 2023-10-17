const startButton = document.querySelector("button");
const texts = document.querySelectorAll("#text > h2, #text > p");
const tableCells = document.querySelectorAll("table td");

startButton.addEventListener("click", function() {
    tableCells[6].innerText = texts[1].textContent;
    tableCells[7].innerText = texts[3].textContent;
    tableCells[8].innerText = texts[5].textContent;

    tableCells[0].innerText = texts[0].textContent;
    tableCells[1].innerText = texts[2].textContent;
    tableCells[2].innerText = texts[4].textContent;
    
    document.getElementById("text").textContent = ""
    var table = document.querySelector('table');
    table.rows[1].remove();
});
