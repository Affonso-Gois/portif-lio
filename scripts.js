function cliqueiNoBotao() {

    const minhasecao = document.querySelector(".sobre") //mapeamento da secao sobre

    minhasecao = document.getElementById("sobreMim").scrollIntoView({
        behavior: 'smooth'
    })

}

function cliqueiNoProjeto() {

    const projects = document.querySelector(".meusprojetos") //mapeamento secao projetos

    projects = document.getElementById("meusProjetos").scrollIntoView({
        behavior: 'smooth'
    })

}

function cliqueiNaSeta() {

    const irparatopo = document.querySelector(".caixa-master") // mapeamento ir para topo

    irparatopo = document.getElementById("caixaMaster").scrollIntoView({
        behavior: 'smooth'
    })
}

function cliqueiNaCompetencia() {

    const competencia = document.querySelector(".caixa-competencia") // mapeamento competencia

    competencia = document.getElementById("competencia").scrollIntoView({
        behavior: 'smooth'
    })
}

function scrollToWord() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase(); //pega o valor do input e converte para minuscula
    const elements = document.body.querySelectorAll('*'); //pega todos os elementos do body

    

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element.textContent.toLowerCase().includes(searchTerm)) { //verifica se o elemento contém a palavra pesquisada
            element.scrollIntoView({ behavior: 'smooth', block: 'start' }); //rola a pagina para o elemento
            return; //para a busca
        }

        


    }

  
}
