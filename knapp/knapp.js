let p_tag
let tal=0

function plusClick(){

    tal=tal+1

    document.getElementById("svar").innerHTML=tal

    console.log("Click")
}
const minusknapp = document.getElementById("minusclick")
minusknapp.addEventListener("click", minusClick)

function minusClick()(
    tal=tal-1
    document.getElementById("svar").innerHTML = tal
)