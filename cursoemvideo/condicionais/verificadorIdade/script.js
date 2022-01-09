function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoS = document.getElementById('anoS')
    var resultado = document.querySelector('div#resultado')
    
    if (anoS.value.length == 0 || Number(anoS.value) > ano) {
        window.alert('[ERRO] O ano digitado é maior que o ano atual!')
    } else {
        var genero = document.getElementsByName('genero')
        var idade = ano - Number(anoS.value)
        var generoChecked = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        
        if (genero[0].checked) {
            generoChecked = 'homem'
            if (idade >=0 && idade < 12) {
                img.setAttribute('src','img/foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src','img/foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src','img/foto-adulto-m.png')
            } else {
                img.setAttribute('src','img/foto-idoso-m.png')
            }
        } else if (genero[1].checked) {
            generoChecked = 'mulher'
            if (idade >=0 && idade < 12) {
                    img.setAttribute('src','img/foto-bebe-f.png')
            } else if (idade < 21) {
                    img.setAttribute('src','img/foto-jovem-f.png')
            } else if (idade < 50) {
                    img.setAttribute('src','img/foto-adulto-f.png')
            } else {
                    img.setAttribute('src','img/foto-idoso-f.png')
            }
        }
    }
    
    resultado.style.textAlign = 'center'
    resultado.innerHTML = `${generoChecked} com ${idade} anos`
    resultado.appendChild(img)
}