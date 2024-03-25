const LoghideShow     = document.getElementById('showHideL');
const CadhideShow     = document.getElementById('showHideC');
const Cadillustration = document.getElementById('illustration');
const contentCadForm  = document.querySelector('.contentAddForm');
const contentLogForm  = document.querySelector('.contentLoginForm');
const data = [];

function cadHidShow(){
  LoghideShow.classList.toggle('remove');
  CadhideShow.classList.toggle('active');
  illustration.style.backgroundImage = `url('assets/soroteca-01.png')`;
}

function changImg(){
  illustration.style.backgroundImage = `url('assets/soroteca-02.png')`;
}

function cadUser(event){

  const inptName    = document.getElementById('inptCadName').value;
  const inptCpf     = document.getElementById('inptCadCpf').value;
  const inptPaper   = document.getElementById('inptCadPaper').value;
  const inptUf      = document.getElementById('inptCadUf').value;
  const inptConsPro = document.getElementById('inptCadConsProf').value;
  const inptEmail   = document.getElementById('inptCadEmail').value;
  const inptPass    = parseInt(document.getElementById('inptCadPass').value);
  

  data.push({
    inptName,
    inptCpf,
    inptPaper,
    inptUf,
    inptConsPro,
    inptEmail,
    inptPass
 });
 

  console.log(data);

  event.preventDefault();
  alert("Teste cadastro.");
}

function logIn(event){
  const inptEmailLogin = document.getElementById('inptLoginEmail').value;
  const inptPassLogin = document.getElementById('inptLoginPass').value;
  event.preventDefault();
  
  data.filter((filterUser, indice) => {

    if(filterUser.inptEmail === inptEmailLogin & filterUser.inptPass == inptPassLogin) {
      alert("Show!");
    } else{
      alert("Usuário ou senha inválidos! Verifique");
    }

  });
  
}

contentLogForm.addEventListener('submit', logIn);
contentCadForm.addEventListener('submit', cadUser);