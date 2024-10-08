import input from "file:///j:/12.c/webprog/input.js"

const szoveg = 'Szenzációs beadást követően Marcus Thuram a kapuba fejel.'

let otkar = szoveg.slice(0,5)
console.log(`Elso feladat: ${otkar}`)

let haromnyolc = szoveg.slice(3,8)
console.log(`Masodik feladat: ${haromnyolc}`)

let otvegig = szoveg.slice(5)
console.log(`Harmadik feladat: ${otvegig}`)

let ottolhatkar = szoveg.substr(5,6)
console.log(`Negyedik feladat: ${ottolhatkar}`)

let nagybetu = szoveg.toUpperCase()
console.log(`Otodik feladat: ${nagybetu}`)

let masodiknagy = ''.concat(szoveg.split('').map((x,index) => {
    let ures = ''
    if (index%2!=0) {
       ures+=x.toUpperCase()
    }
    else {
        ures+=x.toLowerCase()
    }
    return ures
})).replaceAll(',','')

console.log(`Hatodik feladat: ${masodiknagy}`)

let kisenagye = szoveg.replaceAll('e','E')
console.log(`Hetedik feladat: ${kisenagye}`)

let elvalasztos = szoveg.split('e')
console.log(elvalasztos)





