const cadGal = document.querySelector('.boardCadGalerias');
const cadRac = document.querySelector('.boardCadRacks');
const contentCadGaleyForm  = document.querySelector('.contentCadGalForm');
const contentLogForm  = document.querySelector('.contentLogForm');
const datas=[];   
// showHideGal
// showHideRac
function showCadGAl(){
  cadRac.classList.remove('active');
  cadGal.classList.toggle('active');
}

function showCadRack(){ 

  const wichGalery = document.getElementById('inptRackGalery');
  
  if(datas.length === 0){
    alert("Atenção antes de cadastrar os racks é preciso cadastrar as galarias!");
  } else{
    
    cadGal.classList.remove('active');
    cadRac.classList.toggle('active');

    datas.forEach((galerys, index) => {
      let   makeOption = document.createElement('option');
      
      makeOption.value = index;
      makeOption.text = galerys.galeryName;
      // wichGalery.add(makeOption);
      wichGalery.appendChild(makeOption);
      console.log(index);
      console.log(galerys);
    })

  }

}

function cadGalery(event){
  event.preventDefault();
  const galeryName     = document.getElementById('inptGaleryName').value; 
  const galeryCapacity = document.getElementById('inptGaleryCapacity').value;
  const galeryTemp     = document.getElementById('inptGaleryTemperatura').value;
  const galeryTipe     = document.getElementById('inptGaleryTipoAmostra').value;
  
  datas.push({
    galeryName,
    galeryCapacity,
    galeryTemp,
    galeryTipe
  })
  
  Swal.fire({
    icon: "success",
    title: "Cadastrado",
    text: "Galeria cadastrada com sucesso!",
    html:document.getElementById('inptGaleryName').value = "",      
    html:document.getElementById('inptGaleryName').focus(),      
    html:document.getElementById('inptGaleryCapacity').value = "",
    html:document.getElementById('inptGaleryTemperatura').value = "",     
    html:document.getElementById('inptGaleryTipoAmostra').value = ""     
  }); 
  
  console.log(datas)
  console.log(datas.length)
}  

contentCadGaleyForm.addEventListener('submit', cadGalery);
// contentCadForm.addEventListener('submit', cadUser);  
  


