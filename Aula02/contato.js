function enviar() {
    document.getElementById("nome").style.border = "none"
    document.getElementById("msg").style.border = "none"
    const nome = document.getElementById("nome").value
    const assunto = document.getElementById("msg").value
 
    if (!nome || !assunto) {
        document.getElementById("nome").style.border = "3px solid red"
        document.getElementById("msg").style.border = "3px solid red"
        return
    }
 
    const mensagem = `Gostaria de entrar em contato! \n\nNome: ${nome} \nAssunto: ${assunto}`
    const msg = encodeURIComponent(mensagem)
    window.open(`https://wa.me/5541999999999?text=${msg}`, "_blank")
}