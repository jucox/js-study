let numberS = document.getElementById('numberS')
let select = document.getElementById('listaValores')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(numberS.value) && !inLista(numberS.value, valores)) {
        valores.push(Number(numberS.value))
        let item = document.createElement('option')
        item.text = `Valor ${numberS.value} adicionado.`
        select.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert(`Valor inválido ou já encontrado na lista.`)
    }
    numberS.value = ''
    numberS.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert(`Adicione valores antes de finalizar.`)
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }

        let media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números digitados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}