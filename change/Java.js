class Pengar {
    constructor(antal, pengsort) {
        this.antal = antal
        this.pengsort = pengsort
    }

}

const input_pris = document.getElementById("pris")
const input_inbet = document.getElementById("inbet")

const svardiv = document.getElementById("svar_div")

const kalkyleraknapp = document.getElementById("kalk_knapp")
kalkyleraknapp.addEventListener("click", kalkyleraClick)
/**
 * exChange 
 * in: belopp som ska växlas
 * out: antal sedlar eller mynt 
 */


function exChange(belopp, sedel) {
    return Math.floor(belopp / sedel)
}

/**
 * getexchangeArray()
 * in inbetalt belopp
 * out: array innehåller antal mynt i varje valör
 */
function getexchangeArray(inbetalning, priset) {

    let antal_mynt = 0
    let pengar_tillbaka = 0

    sedlar_mynt_array = []

    //500.............................................
    pengar_tillbaka = inbetalning - priset
    antal_mynt = exChange(pengar_tillbaka, 500)
    pengar_tillbaka = pengar_tillbaka % 500

    let t_pengar = new Pengar(0, 500)
    

    if (antal_mynt > 0){
        t_pengar = antal_mynt
    }

    sedlar_mynt_array.push(t_pengar)

    console.log(`t_pengar= ${t_pengar}`)

    //100.............................................
    antal_mynt = exChange(pengar_tillbaka, 100)
    pengar_tillbaka = pengar_tillbaka % 100

    t_pengar = new Pengar(0, 100)
    

    if (antal_mynt > 0){
        t_pengar = antal_mynt
    }

    sedlar_mynt_array.push(t_pengar)

    console.log(`t_pengar= ${t_pengar}`)


 //50.............................................
 antal_mynt = exChange(pengar_tillbaka, 50)
 pengar_tillbaka = pengar_tillbaka % 50

 t_pengar = new Pengar(0, 50)
 

 if (antal_mynt > 0){
     t_pengar = antal_mynt
 }

 sedlar_mynt_array.push(t_pengar)

 console.log(`t_pengar= ${t_pengar}`)

  //20.............................................
  antal_mynt = exChange(pengar_tillbaka, 20)
  pengar_tillbaka = pengar_tillbaka % 20

  t_pengar = new Pengar(0, 20)
  

  if (antal_mynt > 0){
      t_pengar = antal_mynt
  }

  sedlar_mynt_array.push(t_pengar)

  console.log(`t_pengar= ${t_pengar}`)

   //10.............................................
   antal_mynt = exChange(pengar_tillbaka, 10)
   pengar_tillbaka = pengar_tillbaka % 10

   t_pengar = new Pengar(0, 10)
   

   if (antal_mynt > 0){
       t_pengar = antal_mynt
   }

   sedlar_mynt_array.push(t_pengar)

   console.log(`t_pengar= ${t_pengar}`)

 //5.............................................
 antal_mynt = exChange(pengar_tillbaka, 5)
 pengar_tillbaka = pengar_tillbaka % 5

 t_pengar = new Pengar(0, 5)
 

 if (antal_mynt > 0){
     t_pengar = antal_mynt
 }

 sedlar_mynt_array.push(t_pengar)

 console.log(`t_pengar= ${t_pengar}`)

 //2.............................................
 antal_mynt = exChange(pengar_tillbaka, 2)
 pengar_tillbaka = pengar_tillbaka % 2

 t_pengar = new Pengar(0, 2)
 

 if (antal_mynt > 0){
     t_pengar = antal_mynt
 }

 sedlar_mynt_array.push(t_pengar)

 console.log(`t_pengar= ${t_pengar}`)

 //1.............................................
 antal_mynt = exChange(pengar_tillbaka, 1)
 pengar_tillbaka = pengar_tillbaka % 1

 t_pengar = new Pengar(0, 1)
 

 if (antal_mynt > 0){
     t_pengar = antal_mynt
 }

 sedlar_mynt_array.push(t_pengar)

 console.log(`t_pengar= ${t_pengar}`)

 

}


function kalkyleraClick(e) {

    let t_pris = parseInt(input_pris.value)
    let t_inbet = parseInt(input_inbet.value)

    if (t_pris > t_inbet){
        alert("varan kostar mer är du betalat")
    }
    else{
        let exChange_array = getexchangeArray(t_inbet, input_pris)

        svardiv.innerHTML = `<br><hr><h3><Växel tillbaka</h3>
        femmhundringar = ${exChange_array[0].antal}`

    }

    getexchangeArray(t_inbet, t_pris)

    //console.log(`klick`)
}