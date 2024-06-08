// console.log("frist");
// setTimeout(()=>{
//     console.log("Sceond");
// },3000)
// console.log("3rd")
//----------------------------------------------time limit set in function-----------------------------------------------------
function orderPizza(prepareFizza) {
    setTimeout(function () {
        console.log("order paced");
        prepareFizza();
    }, 2000);
}
function prepareFizza() {
    setTimeout(function () { console.log("prepared pizza"); }, 2000);
}
orderPizza(prepareFizza);
