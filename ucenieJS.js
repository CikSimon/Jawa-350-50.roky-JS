// ucenie sa:

//var - variable

alert("wezeo je super")   //mozes iba odsuhlasit
confirm("wezeo je super (odpovedaj ano!)")  //cancel alebo suhlasit

function firstfunction() {
    alert("alert1 funkcie")
    alert("alert2 funkcie")
}

firstfunction()

function secondfunction() {
    console.log("test")
}
secondfunction()

function thirdfunction(param1, param2) {
    console.log(param1+param2)
}
thirdfunction(3, 4)

function zgs() {
    alert("tu si vypocitas gravitacnu silu")
    var hmotnosttelesa = prompt("Napis vahu telesa v kg:", "") //funkcia ktora prijima dva parametre = 1. otazka, co vyzadujeme 2. hodnota z formulara
    if (hmotnosttelesa == null) {
        alert("hmotnost telesa je povinny udaj")
        return
    }
    console.log(hmotnosttelesa)
    var gsila = hmotnosttelesa*10
    alert(gsila)
}

// typeof = testovanie hodnoty = string, int, float atd...

function tofuncton() {
    var i = "text"
    console.log(typeof i)  // typ suboru i (string)
    i = false   // nemusim znova pisat var, premenna je uz definovana
    console.log(typeof i)  // zmenil som hodnotu i
}

if (typeof i == "number") {
    console.log("super, i je cislo")
}else{
    console.log("nepoznam typ")
} // mozem pridavat vela else za sebou 
