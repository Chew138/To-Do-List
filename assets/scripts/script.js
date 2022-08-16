
var buttonEl = document.getElementById("adc").addEventListener("click", main)

const element = {
    
    tag: "",
    class: "",
    type: "",
    text: "",
    id: "",
    eventListener: ""
    
}

function createElement(element, reference){
    
    try{
        if( element.tag.length === 0){
            throw console.log("Admin message: Nenhuma tag HTML foi definida \n")
        }

        let newElement = document.createElement(element.tag)

        if(element.class.length != 0)
        {
            newElement.setAttribute("class", element.class)
        }
        
        if(element.id.length != 0){
            newElement.setAttribute("id", element.id)
        }
        
        if(element.type.length != 0){
            newElement.setAttribute("type", element.type)
        }
        
        if(element.text.length != 0){
            newElement.innerHTML = element.text
        }

        reference.appendChild(newElement)
    }
    catch(e){
        console.log(e)
    }
}

function main(){

    let spammerConteinerEl = document.getElementById("spammer")
    let taskConteinerEl = document.getElementById("conteiner")

    if(spammerConteinerEl.childElementCount == 0){

        //gera o spammer
        element.tag = "span"
        element.class = "span"
        element.id = "span"
        createElement(element , spammerConteinerEl)
        clearObject()

        //texto do spammer
        let spammerEl = document.getElementById("span")
        element.tag = "p"
        element.text = "Nome da tarefa"
        createElement(element, spammerEl)
        clearObject()

        //input
        element.tag = "input"
        element.id = "input"
        createElement(element, spammerEl)
        clearObject()
    }
    else{

        //conteiner task
        element.tag = "div"
        element.class = "tasks"
        createElement(element, taskConteinerEl)
        clearObject()

        //checkbox
        element.tag = "input"
        element.type = "checkbox"
        createElement(element, taskConteinerEl.lastChild)
        clearObject()

        //label
        element.tag = "label"
        element.text = document.getElementById("input").value
        createElement(element, taskConteinerEl.lastChild)
        clearObject()

        let getLastInputEl = document.getElementsByTagName("input").length-1
        let inputEl = document.getElementsByTagName("input")[getLastInputEl]

        let getLastLabelEl =  document.getElementsByTagName("label").length-1
        let labelEl = document.getElementsByTagName("label")[getLastLabelEl]

        let getLastDivEl = document.getElementsByClassName("tasks").length-1
        let divTaskEl = document.getElementsByClassName("tasks")[getLastDivEl]

        inputEl.addEventListener("click",  () => {
            if(inputEl.checked){

                //efeito de exclusao do elemento
                setTimeout( () => {
                    
                    labelEl.style.color = "green"
                    labelEl.classList.toggle("taskToggle")

                    setTimeout(() => {
                        labelEl.style.color = "red"

                        setTimeout(() => {
                            
                            inputEl.remove()
                            labelEl.remove()
                            divTaskEl.remove()

                        }, 1500);
                    }, 1000);

                }, 800)

            }
            else{
                labelEl.classList.toggle("taskToggle")
            }
        })
    }
}

function clearObject(){
    element.tag = ""
    element.class = ""
    element.text = ""
    element.id = ""
    element.type = ""
}