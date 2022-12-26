document.addEventListener('DOMContentLoaded', function() {
    let add = document.querySelector('#add');
    let subtract = document.querySelector('#subtract');
    let output = document.querySelector("#output");

    add.addEventListener("click", function() {
        let result = Number(output.innerHTML) + 1;
        output.innerHTML = result;
    });
    subtract.addEventListener("click", function() {
        let result = Number(output.innerHTML) - 1;
        output.innerHTML = result;
    });
});

