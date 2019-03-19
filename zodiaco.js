const Http = new XMLHttpRequest();
const urlGet='https://api.jsonbin.io/b/5c9127a42d33133c4017541b/latest';
const urlPut='https://api.jsonbin.io/b/5c9127a42d33133c4017541b';
const secretKey = "$2a$10$wJH09HEURWbKWYnejThzouyrmWYpHk38G6ZZH6NjNpOMnZqwUjSEW";
var dados = {}

function buscarDados () {
  chamarApi("GET").then(function(response){
    dados = response
  })
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

buscarDados()