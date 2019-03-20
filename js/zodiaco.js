const Http = new XMLHttpRequest();
const urlGet='https://api.jsonbin.io/b/5c9127a42d33133c4017541b/latest';
const urlPut='https://api.jsonbin.io/b/5c9127a42d33133c4017541b';
const secretKey = "$2a$10$wJH09HEURWbKWYnejThzouyrmWYpHk38G6ZZH6NjNpOMnZqwUjSEW";
var dados = {};
var menu = 'inicio';
var horarios = {
  siege: [
    moment().subtract(moment().day(), 'days').add(1, 'days').format("DD/MM/YYYY"),
    moment().subtract(moment().day(), 'days').add(4, 'days').format("DD/MM/YYYY")
  ],
  gvg: [
    moment().subtract(moment().day(), 'days').add(1, 'days').format("DD/MM/YYYY") + " 09:00hs",
    moment().subtract(moment().day(), 'days').add(1, 'days').format("DD/MM/YYYY") + " 21:00hs",

    moment().subtract(moment().day(), 'days').add(2, 'days').format("DD/MM/YYYY") + " 09:00hs",
    moment().subtract(moment().day(), 'days').add(2, 'days').format("DD/MM/YYYY") + " 21:00hs",

    moment().subtract(moment().day(), 'days').add(3, 'days').format("DD/MM/YYYY") + " 09:00hs",
    moment().subtract(moment().day(), 'days').add(3, 'days').format("DD/MM/YYYY") + " 21:00hs",

    moment().subtract(moment().day(), 'days').add(4, 'days').format("DD/MM/YYYY") + " 09:00hs",
    moment().subtract(moment().day(), 'days').add(4, 'days').format("DD/MM/YYYY") + " 21:00hs",

    moment().subtract(moment().day(), 'days').add(5, 'days').format("DD/MM/YYYY") + " 09:00hs",
    moment().subtract(moment().day(), 'days').add(5, 'days').format("DD/MM/YYYY") + " 21:00hs",

    moment().subtract(moment().day(), 'days').add(6, 'days').format("DD/MM/YYYY") + " 09:00hs",
    moment().subtract(moment().day(), 'days').add(6, 'days').format("DD/MM/YYYY") + " 21:00hs"
  ],
  labirinto: [
    moment().subtract(moment().day(), 'days').format("DD/MM/YYYY"),
    moment().subtract(moment().day(), 'days').add(1, 'days').format("DD/MM/YYYY"),
    moment().subtract(moment().day(), 'days').add(2, 'days').format("DD/MM/YYYY"),
    moment().subtract(moment().day(), 'days').add(3, 'days').format("DD/MM/YYYY"),
    moment().subtract(moment().day(), 'days').add(4, 'days').format("DD/MM/YYYY"),
    moment().subtract(moment().day(), 'days').add(5, 'days').format("DD/MM/YYYY"),
    moment().subtract(moment().day(), 'days').add(6, 'days').format("DD/MM/YYYY")
  ]
}

function buscarDados () {
  chamarApi("GET").then(function(response){
    dados = response
  })
}

function mudaTela (novaTela) {
  if (novaTela == menu) {
    return false;
  }
  document.getElementById(menu).style.display = "none";
  document.getElementById(novaTela).style.display = "block";
  menu = novaTela
}

function chamarApi (metodo, body) {
  return new Promise((resolve, reject) => {
    Http.open(metodo, metodo == "GET" ? urlGet: urlPut);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.setRequestHeader("secret-key", secretKey);
    Http.onload=()=>{
      if (Http.status == 200) {
        resolve(JSON.parse(Http.responseText));
      } else {
        alert ("Falha ao comunicar com a base de dados.");
        reject()
      }
    }
    Http.send(body);
  })
}

function login () {
  var senha = document.getElementById("password").value;
  var usuario = document.getElementById("user").value;
  if (senha == "123456" && usuario == "conselho") {
    $('#sign-in-form').modal('hide');
    document.getElementById("admin").style.display = "block";
  } else {
    alert("Senha inválida.")
  }
}

buscarDados()