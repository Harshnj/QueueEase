let valueCount = 1;
let increment = document.querySelector(".btn-plus");
let decrement = document.querySelector(".btn-minus");
let count = document.querySelector("#quantity");
let totalcount = document.querySelector("#price");
let totalcount1 = document.querySelector("#stotalprice");
let totalcount2 = document.querySelector("#totalprice");

increment.addEventListener("click", () => {
    let add = valueCount++;
    count.value = add++;
    totalcount.innerHTML = add * 150;
    totalcount1.innerHTML = add * 150;
    totalcount2.innerHTML = add * 150;
})

decrement.addEventListener("click", () => {
    if (valueCount >= 2) {
        let sub = valueCount--;
        count.value = sub--;
        totalcount.innerHTML = sub * 150;
        totalcount1.innerHTML = sub * 150;
        totalcount2.innerHTML = sub * 150;
    }
})