const minhasecao = document.querySelector(".sobre") //mapeamento da secao sobre 


const projects = document.querySelector(".meusprojetos")

// essa funcao faz rolar até um lugar especifico na tela
function cliqueiNoBotao(){ 

   minhasecao = document.getElementById("sobreMim").scrollIntoView({
    behavior: 'smooth'})

}


function cliqueiNoProjeto(){ 

    projects = document.getElementById("meusProjetos").scrollIntoView({
     behavior: 'smooth'})
 
 }