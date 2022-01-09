function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 18 /*data.getHours()*/
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 6 && hora < 12) {
        msg.innerHTML += ' Bom dia!'
        img.src = 'img/morning.png'
        document.body.style.background = 'rgb(254 198 158)'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += ' Boa tarde!'
        img.src = 'img/afternoon.png'
        document.body.style.background = 'rgb(244 212 106)'
    } else {
        msg.innerHTML += ' Boa noite!'
        img.src = 'img/night.png'
        document.body.style.background = '#5f454c'
    }
}