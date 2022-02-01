let array = [];
let input = document.getElementById("textInput"); 

addEventListener('keypress', e => {
    if (e.key == "Enter") {

        preventBlank();
    }
})

function preventBlank(){
    if(input.value == ""){
        alert("Campo vazio");
    }
    else{
        add();
    }
}

function add(){
    array.push(input.value);

    input.value = "";
    print();
}

function removeAll(){
    let confirm = window.confirm("Desja remover todos os itens?");
        if (confirm){ 
            array = [];

            let p = document.getElementById("displaySorted");
            p.innerText = "";

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
        li.innerHTML += "<button onclick='test()'><img class='deleteImg' src='./delete.png'></img></button>";
        list.appendChild(li);
      })
}

function test(){
    
}

function sort(){

    if (array != ""){
        let np = array.length;
    
        let ns = Math.floor(Math.random() * np);
    
        let p = document.getElementById("displaySorted");
        p.innerText = "O sorteado(a) foi: "  + array[ns];
    }
    else{
        alert("Não há nada para sortear")
    }
    
}

