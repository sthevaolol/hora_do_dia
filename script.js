function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date() 
    var horas = data.getHours() //* horas
    var minutos = data.getMinutes() //* minutos
    msg.innerHTML = `Agora são extamente ${horas}:${minutos}`
    if (horas >= 0 && horas <= 13 ) {
        // BOM DIA!!
        img.src = 'fotomanha.png'
        document.body.style.background = '#FDE38E'
    } else if (horas >= 13 && horas < 18) {
        // BOA TARDE!!
        img.src = 'fototarde.png'
        document.body.style.background = '#F29E86'
    } else {
        // BOA NOITE!!
        img.src = 'fotonoite.png'
        document.body.style.background = '#402A68'
    }
    }