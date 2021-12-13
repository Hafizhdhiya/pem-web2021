var dataBarang=[
    "buku tulis",
    "pensil",
    "spidol"
];

function showBarang(){
    var listBarang = document.getElementById("list-barang");
    listBarang.innerHTML="";
    for(let i=0; i<dataBarang.length; i++){
        var btnEdit="<a hraf='#' onclick='editBarang("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='deleteBarang("+i+")'>Hapus</a>";
        listBarang.innerHTML += "<li>"+dataBarang[i]+" ["+btnEdit + " | "+ btnHapus +"]<li>";
        }
    }

function addBarang(){
        var input = document.querySelector("input[name=barang]");
        dataBarang.push(input.value);
        showBarang();
    }

function editBarang(id){
    var newBarang = prompt("Nama baru", dataBarang[id]);
    dataBarang[id]=newBarang;
    showBarang();
    }

function deleteBarang(id){
    dataBarang.splice(id, 1);
    showBarang();
}

showBarang();