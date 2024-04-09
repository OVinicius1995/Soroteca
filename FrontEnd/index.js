const LoghideShow     = document.getElementById('showHideL');
const CadhideShow     = document.getElementById('showHideC');
const Cadillustration = document.getElementById('illustration');
const contentCadForm  = document.querySelector('.contentAddForm');
const contentLogForm  = document.querySelector('.contentLogForm');


const fetchRules = async () =>{
  const responseRules = await fetch('http://localhost:8888/rules', {
    method: 'GET',
    // headers: {
    //     'x-tenant': '44d939129da1372c74eb4798ffd930cc' // 
    // }
    
 }); 

  const rules = await responseRules.json();
  //console.log(rules)

  const key = rules[0].cypherkey;
  const uay = rules[0].matrix;
  const tph = rules[0].typeHash;

 return {
  key,
  uay,
  tph
        }    
}

const fetchUsers = async () =>{
  const Usersresponse = await fetch('http://localhost:8888/cadUsers/', {
    method: 'GET',
    headers: {
        'x-tenant': '44d939129da1372c74eb4798ffd930cc' // 
    }    

  });
      const users = await Usersresponse.json();      

      // const Upass  = users[0].Upass;
      // const Uemail = users[0].Uemail;

      //console.log(users)
      // console.log(Upass)

      return users 
}


function cadHidShow(){
  LoghideShow.classList.toggle('remove');
  CadhideShow.classList.toggle('active');
  document.getElementById('inptCadName').focus();
  document.getElementById('inptLoginEmail').focus();
  illustration.style.backgroundImage = `url('assets/soroteca-01.png')`;
}

function mascaraCpf(i){
   
  var v = i.value;
  
  if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
     i.value = v.substring(0, v.length-1);
     return;
  }
  
  i.setAttribute("maxlength", "14");
  if (v.length == 3 || v.length == 7) i.value += ".";
  if (v.length == 11) i.value += "-";

}

function changImg(){
  illustration.style.backgroundImage = `url('assets/soroteca-02.png')`;
}

function Superdog(textCript, key) {
  if (key < 0) return Superdog(textCript, key + 26);

  const alphabetCapitalMinIndex = 'A'.charCodeAt(0);
  const alphabetMinIndex = 'a'.charCodeAt(0);
  const isCapital = (char) => char.charCodeAt(0) >= alphabetCapitalMinIndex && char.charCodeAt(0) <= 'Z'.charCodeAt(0)

  const getCharIndexInAlphabet = (char) =>
    !isCapital(char)  ? char.charCodeAt(0) - alphabetMinIndex  : isCapital(char)
    
    ? char.charCodeAt(0) - alphabetCapitalMinIndex    : null
    
  let newMessage = ''

  for (let messageIndex in textCript) {
    const char = textCript[messageIndex]
    const charIndexInAlphabet = getCharIndexInAlphabet(char)
    
    if (!char.match(/[a-z]/i)) {
      newMessage += char
      continue
    }

    const sumBaseIndex = isCapital(char) ? alphabetCapitalMinIndex : alphabetMinIndex
    const newCharCode = ((charIndexInAlphabet + key) % 26) + sumBaseIndex
    newMessage += String.fromCharCode(newCharCode)
  }

  return newMessage
}

async function hash(message/*: string */) {
  const getRules = await fetchRules();
 
  //Essa informação deverá vir do banco de dados.
  const getTypeHash = getRules.tph.toString();

	const text_encoder = new TextEncoder;
	const data = text_encoder.encode(message);
	const message_digest = await window.crypto.subtle.digest(getTypeHash, data);
	return message_digest;
} // -> ArrayBuffer

function in_hex(data/*: ArrayBuffer */) {

  const matrix = Uint8Array;
	const octets = new matrix(data);
	const hex = [].map.call(octets, octet => octet.toString(16).padStart(2, "0")).join("");
	return hex;
} // -> string

function validCpf(cpf){
  cpf = cpf.replace(/\D/g, '');
  if(cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  var result = true;
  [9,10].forEach(function(j){
      var soma = 0, r;
      cpf.split(/(?=)/).splice(0,j).forEach(function(e, i){
          soma += parseInt(e) * ((j+2)-(i+1));
      });
      r = soma % 11;
      r = (r <2)?0:11-r;
      if(r != cpf.substring(j, j+1)) result = false;
  });
  return result;
}

function loadingShow(){
 
  const divLoading = document.createElement('div');
     divLoading.classList.add("loading");

  const labelLoading = document.createElement('p');
     labelLoading.classList.add("loadingText");
     labelLoading.innerText = "Carregando...";

     document.getElementById('loading').appendChild(divLoading);
     divLoading.appendChild(labelLoading); 
          
}

function loadingHide(){
  const loadings = document.getElementsByClassName("loading");
  if (loadings.length){
    loadings[0].remove();
  }
}

async function cadUser(event){
  loadingShow();
  event.preventDefault();
  const getRules = await fetchRules();
  

  //Essa informação deverá vir do banco de dados.
  const key  = [parseInt(getRules.key)];

  if (validCpf(document.getElementById('inptCadCpf').value)){
    
    const inptName    = Superdog(document.getElementById('inptCadName').value, key[0]);
    const inptCpf     = in_hex(await hash(document.getElementById('inptCadCpf').value));
    const inptPaper   = Superdog(document.getElementById('inptCadPaper').value, key[0]);
    const inptUf      = Superdog(document.getElementById('inptCadUf').value, key[0]);
    const inptConsPro = Superdog(document.getElementById('inptCadConsProf').value, key[0]);
    const inptEmail   = Superdog(document.getElementById('inptCadEmail').value, key[0]);
    const inptPass    = in_hex(await hash(document.getElementById('inptCadPass').value));

   const dataUsers = {
    "Uname":  inptName,
    "Ucpf":   inptCpf,
    "Upaper": inptPaper,
    "Uuf":    inptUf,
    "UconsPro": inptConsPro,
    "Uemail":   inptEmail,
    "Upass":    inptPass
   }
   
    await fetch('http://localhost:8888/cadUsers', {
      method: 'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(dataUsers),
    });
    
    Swal.fire({
      title: "Cadastrado.",
      text: "Usuário cadastrado com sucesso!",
      icon: "success"
    });

    loadingHide();
  
    document.getElementById('inptCadName').value     = "";
    document.getElementById('inptCadCpf').value      = "";
    document.getElementById('inptCadPaper').value    = "Escolha";
    document.getElementById('inptCadUf').value       = "";
    document.getElementById('inptCadConsProf').value = "";
    document.getElementById('inptCadEmail').value    = "";
    document.getElementById('inptCadPass').value     = "";

    document.getElementById('inptCadName').focus();
    document.getElementById('inptCadCpf').style.backgroundColor = "#fbf9ff";

  }else{
    loadingHide();

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "O cpf informado é inválido, verifique!",
      html:document.getElementById('inptCadCpf').focus()
    });        
  } 
  document.getElementById('inptCadCpf').value  = "";
  document.getElementById('inptCadCpf').style.backgroundColor = "red";
  document.getElementById('inptCadCpf').focus();
}

async function logIn(event){
  loadingShow();
  event.preventDefault();
  const getRules = await fetchRules(); 
  
  const key  = [parseInt(getRules.key)];

  const email = document.getElementById('inptLoginEmail').value;
  const pass  = document.getElementById('inptLoginPass').value;
  let find = false;

  if(email === "" || email === undefined){
    alert("O email não foi informado");
    loadingHide();
  } else if (pass === "" || pass === undefined){
    alert("A senha não foi informada");
    loadingHide();
  } else {

  const getUsers = await fetchUsers();   
  
  const inptEmailLogin = Superdog(document.getElementById('inptLoginEmail').value, key[0]);
  const inptPassLogin = in_hex(await hash(document.getElementById('inptLoginPass').value));  

  getUsers.filter((filterUser, indice) => { 

    if(filterUser.Uemail === inptEmailLogin & filterUser.Upass == inptPassLogin) {
      return find = true;
    } 
    stop
  
  })

  if(find){
    alert("Bem vindo!");
    loadingHide();
  } else{
    alert("Usuário ou senha inválidos,verifique!");
    loadingHide();
  }

};
  
}

contentLogForm.addEventListener('submit', logIn);
contentCadForm.addEventListener('submit', cadUser);
