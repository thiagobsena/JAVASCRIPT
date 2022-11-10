function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
   // var hora = data.getHours
   var hora = 19 
   msg.innerHTML = `Agora são ${data} horas.`
    if (hora >= 0 && hora < 12) {
       // console.log('Bom dia')
       <img src="manhã.png">
        document.body.style.background = yellow
    }else if ( hora >= 12 && < 18) {
       // console.log('Bom dia')
       <img src="tarde.png">
    }else {
       // console.log('Boa noite')
       <img src="noite.png">
    }

}
