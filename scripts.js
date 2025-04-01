const minhasecao = document.querySelector(".sobre") //mapeamento da secao sobre 

const projects = document.querySelector(".meusprojetos") //mapeamento secao projetos

const irparatopo = document.querySelector(".caixa-master") // mapeamento ir para topo

const competencia = document.querySelector(".caixa-competencia") // mapeamento competencia

// essa funcao faz rolar até um lugar especifico na tela
function cliqueiNoBotao() {

    minhasecao = document.getElementById("sobreMim").scrollIntoView({
        behavior: 'smooth'
    })

}

function cliqueiNoProjeto() {

    projects = document.getElementById("meusProjetos").scrollIntoView({
        behavior: 'smooth'
    })

}

function cliqueiNaSeta() {

    irparatopo = document.getElementById("caixaMaster").scrollIntoView({
        behavior: 'smooth'
    })
}

function cliqueiNaCompetencia() {
    competencia = document.getElementById("competencia").scrollIntoView({
        behavior: 'smooth'
    })
}