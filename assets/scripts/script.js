
document.getElementById("adc").addEventListener("click", createSpam)


function createSpam(){

    //variaveis globais (elementos)
    var divSpan = document.createElement("div")
    var nomelabel = document.createElement("label")
    var nomeinput = document.createElement("input")
    
    //variaveis globais (referencias)
    var divReferencia = document.getElementById("conteiner")

    //variaveis globais (atributos)
    divSpan.setAttribute("class", "span")
    divSpan.setAttribute("id", "span")
    nomeinput.setAttribute("id", "nomeItem")
    nomelabel.innerHTML = "Nome da tarefa:"

    //Define hierarquia dos novos elementos
    divReferencia.appendChild(divSpan)
    divSpan.appendChild(nomelabel);
    divSpan.appendChild(nomeinput);

    document.getElementById("adc").removeEventListener("click", createSpam)
    document.getElementById("adc").addEventListener("click", createTask)
}

function deleteSpam(){ 
    document.getElementById("span").remove()
    document.getElementById("adc").removeEventListener("click", createTask)
    document.getElementById("adc").addEventListener("click", createSpam)
}

function createTask(){

    var nomeItem = document.getElementById("nomeItem")

    //variaveis globais (elementos)
    var novoDiv = document.createElement("div")
    var novoInput = document.createElement("input")
    var novoLabel = document.createElement("label")
    var labelTextNode = document.createTextNode(nomeItem.value)

    //variaveis globais (atributos)
    novoDiv.setAttribute("class", "tasks")
    novoInput.setAttribute("type", "checkbox")

    //variaveis globais (referencias)
    var divReferencia = document.getElementsByClassName("conteiner")[0]

    //Define hierarquia dos novos elementos
    divReferencia.appendChild(novoDiv)
    novoDiv.appendChild(novoInput)
    novoDiv.appendChild(novoLabel)
    novoLabel.appendChild(labelTextNode)
}
