let array = [];
let input = document.getElementById("textInput"); 

addEventListener('keypress', e => {
    if (e.key == "Enter") {

        avoidBlank();
    }
})

function avoidBlank(){
    if(input.value == ""){
        alert("Campo vazio");
    }
    else{
        add();
    }
}

function add(){
    array.push(input.value);

    console.log(array);

    input.value = "";

    print();
}

function removeAll(){
    let confirm = window.confirm("Desja remover todos os itens?");
        if (confirm){ 
            array = [];

            console.log(array);
        
            print();
        }
        else{
        }
}

function print(){
    let list = document.getElementById('list');

    list.innerHTML = "";
    array.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
      })
}

function sort(){
    let np = array.length;
    
    let ns = Math.floor(Math.random() * np);

    let p = document.getElementById("displaySorted");
    p.innerText = "O sorteado(a) foi " + array[ns];
}

