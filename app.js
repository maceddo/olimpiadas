function pesquisar() {
    // Seleciona a seção HTML com o ID "resultados-pesquisa" para exibir os resultados
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se o campo de pesquisa for uma string sem nada
    if (campoPesquisa == ""){
      section.innerHTML = "<p>Nada foi encontrado</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Cria uma string vazia para armazenar o HTML que será gerado
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada objeto `dado` dentro do array `dados`
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      if(titulo.includes(campoPesquisa)
        || descricao.includes(campoPesquisa)
        || tags.includes(campoPesquisa)){
        // Constrói uma string de HTML para cada resultado, 
      // utilizando template literals para facilitar a formatação
      resultados += `
      <div class="item-resultado"> 
        <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p> 
          <a href=${dado.link} target="_blank">Mais informações</a> </div>
      `;
      }      
    }

    if(!resultados){
      resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Substitui o conteúdo HTML da seção pelos resultados gerados
    section.innerHTML = resultados;
  }


