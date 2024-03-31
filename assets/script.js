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
                res.innerHTML = `Detectamos um menino com ${idade} anos.`
            } else if (idade < 21) {
                //Jovem
                imagem.setAttribute('src', 'assets/img/jovem_homem.jpg')
                res.innerHTML = `Detectamos um jovem com ${idade} anos.`
            } else if (idade < 50) {
                //Adulto
                imagem.setAttribute('src', 'assets/img/homem.jpeg')
                res.innerHTML = `Detectamos um homem com ${idade} anos.`
            } else {
                //Idoso
                imagem.setAttribute('src', 'assets/img/senhor.jpeg')
                res.innerHTML = `Detectamos um senhor com ${idade} anos.`
            }
        } else {
            gen = 'Feminino'
            if (idade >= 0 && idade < 10) {
                //Criança
                imagem.setAttribute('src', 'assets/img/crianca_menina.jpg')
                res.innerHTML = `Detectamos uma menina com ${idade} anos.`
            } else if (idade < 21) {
                //Jovem
                imagem.setAttribute('src', 'assets/img/jovem_mulher.jpeg')
                res.innerHTML = `Detectamos uma jovem com ${idade} anos.`
            } else if (idade < 50) {
                //Adulto
                imagem.setAttribute('src', 'assets/img/mulher.jpg')
                res.innerHTML = `Detectamos uma mulher com ${idade} anos.`
            } else {
                //Idoso
                imagem.setAttribute('src', 'assets/img/senhora.jpeg')
                res.innerHTML = `Detectamos uma senhora com ${idade} anos.`
            }
        }

        res.style.textAlign = 'center'
        res.appendChild(imagem)
    }
}