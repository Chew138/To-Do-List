function createSpam(){

    //variaveis globais (elementos)
    var divSpan = document.createElement("div")
    var nomelabel = document.createElement("label")
    var nomeinput = document.createElement("input")
    var button = document.createElement("button")
    var buttonText = document.createTextNode("criar")
    
    //variaveis globais (referencias)
    var divReferencia = document.getElementsByClassName("conteiner")[0]
    var nomeItem = document.getElementById("nomeItem")

    //variaveis globais (atributos)
    divSpan.setAttribute("class", "span")
    nomeinput.setAttribute("id", "nomeItem")
    button.setAttribute("id", "submit")
    button.setAttribute("onclick", "addTask(nomeItem.value)")
    nomelabel.innerHTML = "Nome da tarefa:"


    //Define hierarquia dos novos elementos
    divReferencia.appendChild(divSpan)
    divSpan.appendChild(nomelabel);
    divSpan.appendChild(nomeinput);
    divSpan.appendChild(button)
    button.appendChild(buttonText)
}

function addTask(nomeItem){

    //variaveis globais (elementos)
    var novoDiv = document.createElement("div")
    var novoInput = document.createElement("input")
    var novoLabel = document.createElement("label")

    //variaveis globais (atributos)
    novoDiv.setAttribute("class", "tasks")
    novoInput.setAttribute("type", "checkbox")
    novoLabel.innerHTML = nomeItem

    //variaveis globais (referencias)
    var divReferencia = document.getElementsByClassName("conteiner")[0]

    //Define hierarquia dos novos elementos
    divReferencia.appendChild(novoDiv)
    novoDiv.appendChild(novoInput)
    novoDiv.appendChild(novoLabel)
}