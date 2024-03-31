function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res =  document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade =  ano - Number(fano.value)
        var gen = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gen = 'Masculino'
            if (idade >= 0 && idade < 10) {
                //Criança
                imagem.setAttribute('src', 'assets/img/crianca_menino.jpeg')
            } else if (idade < 21) {
                //Jovem
                imagem.setAttribute('src', 'assets/img/jovem_homem.jpg')
            } else if (idade < 50) {
                //Adulto
                imagem.setAttribute('src', 'assets/img/homem.jpeg')
            } else {
                //Idoso
                imagem.setAttribute('src', 'assets/img/senhor.jpeg')
            }
        } else {
            gen = 'Feminino'
            if (idade >= 0 && idade < 10) {
                //Criança
                imagem.setAttribute('src', 'assets/img/crianca_menina.jpg')
            } else if (idade < 21) {
                //Jovem
                imagem.setAttribute('src', 'assets/img/jovem_mulher.jpeg')
            } else if (idade < 50) {
                //Adulto
                imagem.setAttribute('src', 'assets/img/mulher.jpg')
            } else {
                //Idoso
                imagem.setAttribute('src', 'assets/img/senhora.jpeg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos gênero ${gen} com ${idade} anos.`
        res.appendChild(imagem)
    }
}