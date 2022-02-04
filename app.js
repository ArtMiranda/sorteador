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

    let p = document.getElementById("displaySorted");

    p.innerText = "";
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
        list.appendChild(li);
      })
}

function sort(){

    let select = document.getElementById("select").value;
    console.log(select);
    switch(select){

        case "Sorteio padrão":
        if (array != ""){
            let np = array.length;
        
            let ns = Math.floor(Math.random() * np);
        
            let p = document.getElementById("displaySorted");
            p.innerText = "O sorteado foi: "  + array[ns];
        }
        else{
            alert("Não há nada para sortear")
        }
        
        break;

        case "Sortear duas opções":


            if (array != "" && array.length > 1){
                let array1 = array.slice();

                let np = array1.length;
            
                let ns1 = Math.floor(Math.random() * np);
                let a = array1[ns1]
                array1.splice(ns1, 1);

                np = array1.length;
                let ns2 = Math.floor(Math.random() * np);
                let b = array1[ns2];

                let p = document.getElementById("displaySorted");
                p.innerText = "Os sorteados foram: " + a + " e " +  b;
            }

            else if(array.length == 1){
                alert("Insira no mínimo duas opções para sortear")
            }

            else if (array == ""){
                alert("Não há nada para sortear")
            }

        break;

        case "Sortear três opções":

            if (array != "" && array.length > 2){
                let array1 = array.slice();

                let np = array1.length;
            
                let ns1 = Math.floor(Math.random() * np);
                let a = array1[ns1]
                array1.splice(ns1, 1);

                np = array1.length;
                let ns2 = Math.floor(Math.random() * np);
                let b = array1[ns2];
                array1.splice(ns2, 1);

                np = array1.length;
                let ns3 = Math.floor(Math.random() * np);
                let c = array1[ns3];

                let p = document.getElementById("displaySorted");
                p.innerText = "Os sorteados foram: " + '"' + a + '"' +", " + '"' + b + '"' + " e " + '"' + c + '"';
            }

            else if(array.length <= 2 && array.length >= 1){
                alert("Insira no mínimo três opções para sortear")
            }

            else if (array == ""){
                alert("Não há nada para sortear")
            }

            break;

            case "Sortear times":
    } 

    


  
}

