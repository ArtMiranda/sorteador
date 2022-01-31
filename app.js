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
}

function removeAll(){
    array = [];

    console.log(array);

    print();
}

function sort(){
   Math.round Math.random();
}

function print(){

}