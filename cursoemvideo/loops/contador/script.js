function contar(){
    let inicio = window.document.getElementById('numeroInicio')
    let fim = window.document.getElementById('numeroFim')
    let passo = document.getElementById('numeroPasso')
    let res = window.document.getElementById('resultado')

    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        res.innerHTML = `[ERRO] É necessário que todos os campos estejam preenchidos para que a contagem seja feita.`
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0) {
            window.alert('Passo inválido. Iremos considerar 1 no passo.')
            p = 1
        }
        // CONTAGEM CRESCENTE
        if (i < f) {
            for(c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        
        // CONTAGEM DESCRESCENTE
        } else {
            for(c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}