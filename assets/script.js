function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!!
        img.src = 'assets/img/morning.jpg'
        document.body.style.background = '#deca7a'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!!
        img.src = 'assets/img/afternoon.jpg'
        document.body.style.background = '#468cc7'
    } else {
        // BOA NOITE!!
        img.src = 'assets/img/night.jpg'
        document.body.style.background = '#141f15'
    }
}