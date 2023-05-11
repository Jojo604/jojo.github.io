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

    sedlar_mynt_array = {}

    //500.............................................
    pengar_tillbaka = inbetalning - priset
    antal_mynt = exChange(pengar_tillbaka, 500)

    console.log(`antal= ${antal_mynt}`)


}

function kalkyleraClick(e) {

    let t_pris = parseInt(input_pris.value)
    let t_inbet = parseInt(input_inbet.value)

    getexchangeArray(t_inbet, t_pris)

    //console.log(`klick`)
}