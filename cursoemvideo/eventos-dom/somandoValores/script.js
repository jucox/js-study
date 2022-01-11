let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let res = document.getElementById('res')

function somar() {
    res.innerHTML = ''
    let soma = Number(n1.value) + Number(n2.value)
    res.innerHTML += ` ${soma}`
}