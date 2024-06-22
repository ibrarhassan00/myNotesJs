// console.log("frist");
// setTimeout(()=>{
//     console.log("Sceond");
// },3000)
// console.log("3rd")
//----------------------------------------------time limit set in function-----------------------------------------------------
// function orderPizza (prepareFizza){
//     setTimeout(()=>{console.log("order paced");
//         prepareFizza()
//      },2000)
// }
"newone";
// function prepareFizza (){
//     setTimeout(()=>{console.log("prepared pizza")},2000)
// }
var House = /** @class */ (function () {
    function House(name, ads) {
        this.numberOfDoor = 5;
        this.onwerName = name;
        this.address = ads;
    }
    House.prototype.bell = function () {
        console.log(this.address, "Ding Dong");
    };
    return House;
}());
var h1 = new House("ibrar", "G1234");
h1.bell();
var h2 = new House("noor", " f2334");
h2.bell();
var h3 = new House("naz", "G345");
h3.bell();
