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


class House {
    onwerName : String;
   readonly address : string ;
    numberOfDoor: number = 5;
    constructor(name : string , ads : string ){this.onwerName = name ; 
        this.address=ads;
    }

         bell() {
            console.log(this.address , "Ding Dong");
        }

}
let h1 = new House ("ibrar","G1234");
h1. bell()

let h2 = new House ("noor" , " f2334");
h2.bell()

let h3 = new House ("naz" , "G345");
h3.bell()


