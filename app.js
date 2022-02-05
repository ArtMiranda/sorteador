let array = [];
let input = document.getElementById("textInput");

addEventListener('keypress', e => {
    if (e.key == "Enter") {

        preventBlank();
    }
})

function preventBlank() {
    if (input.value == "") {
        alert("Campo vazio");
    }
    else {
        add();
    }
}

function add() {
    array.push(input.value);

    input.value = "";

    let p = document.getElementById("displaySorted");

    p.innerText = "";
    print();
}

function removeAll() {
    let confirm = window.confirm("Desja remover todos os itens?");
    if (confirm) {
        array = [];

        let list1 = document.getElementById("teamList1");
        let list2 = document.getElementById("teamList2");

        let teamTitle1 = document.getElementById("teamTitle1");
        let teamTitle2 = document.getElementById("teamTitle2");

        teamTitle1.classList.add("hidden");
        teamTitle2.classList.add("hidden");

        list1.innerHTML = "";
        list2.innerHTML = "";
        let p = document.getElementById("displaySorted");
        p.innerText = "";

        print();
    }
    else {
    }
}

function print() {


    let list = document.getElementById('list');

    list.innerHTML = "";
    array.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    });
}

function sort() {

    let select = document.getElementById("select").value;
    switch (select) {

        case "Sorteio padrão":
            if (array != "") {
                let np = array.length;

                let ns = Math.floor(Math.random() * np);

                let p = document.getElementById("displaySorted");
                p.innerText = "O sorteado foi: " + array[ns];
            }
            else {
                alert("Não há nada para sortear")
            }

            break;

        case "Sortear duas opções":


            if (array != "" && array.length > 1) {
                let array1 = array.slice();

                let np = array1.length;

                let ns1 = Math.floor(Math.random() * np);
                let a = array1[ns1]
                array1.splice(ns1, 1);

                np = array1.length;
                let ns2 = Math.floor(Math.random() * np);
                let b = array1[ns2];

                let p = document.getElementById("displaySorted");
                p.innerText = "Os sorteados foram: " + a + " e " + b;
            }

            else if (array.length == 1) {
                alert("Insira no mínimo duas opções para sortear")
            }

            else if (array == "") {
                alert("Não há nada para sortear")
            }

            break;

        case "Sortear três opções":

            if (array != "" && array.length > 2) {
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
                p.innerText = "Os sorteados foram: " + '"' + a + '"' + ", " + '"' + b + '"' + " e " + '"' + c + '"';
            }

            else if (array.length <= 2 && array.length >= 1) {
                alert("Insira no mínimo três opções para sortear")
            }

            else if (array == "") {
                alert("Não há nada para sortear")
            }

            break;

        case "Sortear times":

            let list = document.getElementById("list");  

            let team1 = [];

            let tArray = array.slice();

            console.log("A tArrat é:" + tArray);
            
            console.log("A tArray.length é: " + tArray.length);

            let npt = array.length;

            for(let a = npt / 2; a < npt; a++){
            let t1p = Math.floor(Math.random() * tArray.length);
            team1.push(tArray[t1p]);
            tArray.splice(t1p, 1);

            console.log(a);
            }
            console.log("A tArray.length é: " + tArray.length);


            tArray = tArray.filter(item => !team1.includes(item));

            let teamTitle1 = document.getElementById("teamTitle1");
            let teamTitle2 = document.getElementById("teamTitle2");

            teamTitle1.classList.remove("hidden");
            teamTitle2.classList.remove("hidden");

            let list1 = document.getElementById("teamList1");

            list1.innerHTML = "";
            team1.forEach((item) => {

                let li = document.createElement("li");
                li.innerText = item;
                list1.appendChild(li);

            });
            
            let list2 = document.getElementById("teamList2");
            list2.innerHTML = "";
            tArray.forEach((item) => {

                let li = document.createElement("li");
                li.innerText = item;
                list2.appendChild(li);

            });


    }





}

