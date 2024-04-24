const cadGal = document.querySelector('.boardCadGalerias');
const cadRac = document.querySelector('.boardCadRacks');
const cadAmo = document.querySelector('.contentCadAmostrasForm');

const contentCadGaleyForm    = document.querySelector('.contentCadGalForm');
const contentCadRackForm     = document.querySelector('.contentRacksForm');
const contentCadAmostraForm  = document.querySelector('.contentCadAmostrasForm');
const wichGalery = document.getElementById('inptRackGalery');
const wichRack = document.getElementById('inptRackAmostra');
const datas=[]; 
const datasRacks=[];  
// showHideGal
// showHideRac
function bloc(){
  alert("aaa")
}
function showCadGAl(){
  cadRac.classList.remove('active');
  cadAmo.classList.remove('activeAmostras');
  cadGal.classList.toggle('active');
}

function showCadRack(){
 
  wichGalery.innerText="";
  makeFirstOption = document.createElement('option');

  wichGalery.appendChild(makeFirstOption)
  makeFirstOption.value = "Escolha";
  makeFirstOption.text = "Irá para qual galeria:";
    
  if(datas.length === 0){
    
    Swal.fire({
      icon: "error",
      title: "Nenhuma galeria encontrada.",
      text: "Não há galerias cadastradas, antes de cadastrar os racks é preciso que ajam galerias, verifique!",
  });

  } else{  
    
    cadGal.classList.remove('active');
    cadAmo.classList.remove('activeAmostras');
    cadRac.classList.toggle('active');
    
    datas.forEach((galerys, index) => {  
      makeOption = document.createElement('option');
      makeOption.ad = "Escolha";
      // makeOption.value = index;
      makeOption.text = galerys.galeryName; 
      wichGalery.appendChild(makeOption);         
    });   
    
  }

}

function showCadAmostras(){  

  wichRack.innerText="";
  makeFirstOption = document.createElement('option');

  wichRack.appendChild(makeFirstOption)
  makeFirstOption.value = "Escolha";
  makeFirstOption.text = "Irá para qual rack:";
  // makeFirstOption.setAttribute("onchange","getDadosRackOnchange()");

  // cadGal.classList.remove('active');
  // cadRac.classList.remove('active');
  // cadAmo.classList.toggle('activeAmostras');
  
  if(datasRacks.length === 0){
    
    Swal.fire({
      icon: "error",
      title: "Nenhum rack encontrado.",
      text: "Não há racks cadastrados, antes de cadastrar as amostras é preciso que ajam racks, verifique!",
  });

  } else{
    
    cadGal.classList.remove('active');
    cadRac.classList.remove('active');
    cadAmo.classList.toggle('activeAmostras');

    datasRacks.forEach((dadosRack,index) => {
      let   makeOption = document.createElement('option');
      let rackColuns = dadosRack.rackNumberColuns;
      let rackLines  = dadosRack.rackNumberLines;
      let rackName =  dadosRack.rackName;

      makeOption.value = rackName;
      makeOption.text = rackName;
      
      wichRack.appendChild(makeOption);

      console.log({
        rackColuns,
        rackLines,
        rackName
      });   
  });
  }
}

function getDadosRackOnchange() {

  if (wichRack.value === "Escolha"){
    
  } else {

    var tbody = document.querySelector("tbody");
    var thInic = document.createElement("th");
    tbody.appendChild(thInic);
  
    var limpaConteudo = document.getElementById('myTable');
    var valores = limpaConteudo.rows.length;

  if (valores != 0){
    limpaConteudo.removeChild(limpaConteudo.firstElementChild);
    let recriaTbody = document.createElement("tbody");
    var thInic = document.createElement("th");

    limpaConteudo.appendChild(recriaTbody);    
    recriaTbody.appendChild(thInic);

    makeGrid();

  } else{
  
    makeGrid();

  }
}
}

function makeGrid(){
  var tbody = document.querySelector("tbody");
  let rackColuns;
  let rackLines;
  let rackName;

  datasRacks.filter((dadosRack,index) => {

    if(wichRack.value === dadosRack.rackName){
      
        rackColuns = dadosRack.rackNumberColuns;
        rackLines = dadosRack.rackNumberLines;
        rackName =  dadosRack.rackName;
      stop;
    }
  })
  
  for(var indexTHeader = 0; indexTHeader < rackColuns; indexTHeader++) {
    var th     = document.createElement("th");
    tbody.appendChild(th);
    th.innerText="Coluna";
  }

  for(var indexTLines = 0; indexTLines < rackLines; indexTLines++) {
    var tdLines = document.createElement("td");
    var trLinas = document.createElement("tr");
    tbody.appendChild(trLinas);
    trLinas.appendChild(tdLines)
    tdLines.innerText="Linhas";
    trLinas.setAttribute("id","l"+indexTLines);
  }

  for(var indexLines = 0; indexLines < parseInt(rackLines); indexLines++) {   
    var table = document.getElementById('l'+indexLines);

        //Pego a qtde de linhas mais para manter as linhas do grid e a frente as linhas geradas.
        var proximaLinha = parseInt(rackColuns) + 1;
        
        //Cria as celulas
        for(var indexCels = 1; indexCels < proximaLinha; indexCels++) {
          
          //cria uma nova célula para a linha          
          let cels = table.insertCell(indexCels);
          
          //Define a propriedade name
          //o nome será unico para cada textarea no formato "campo_NUMEROLINHA_NUMEROCOLUNA"
          cels.className  = "linha_" + table.rowIndex + "coluna_" + cels.cellIndex;
                              
          //Seta a função no evento onclick das celulas
          cels.setAttribute("onclick","getGridPosition(this.className)")
          cels.innerText="TESTESSS" + indexCels;
        }     
  }

}

function getGridPosition(x,y) {
  alert(x)    
  let valor = x;
  let teste = document.querySelector('.'+valor);
  console.log(teste.innerText)

  document.querySelector('.linha_3coluna_1').innerText = "Não foi automático, foi na mão."
  // alert("Cell index is: " + x.cellIndex + " " + row.rowIndex + "_" + cell0.cellIndex);
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
  
  //console.log(datas)
  //console.log(datas.length)
}  

function cadRack(event){
  event.preventDefault();
  const rackName         = document.getElementById('inptCadNameRack').value;
  const rackNumberLines  = document.getElementById('inptCadNumLines').value;
  const rackNumberColuns = document.getElementById('inptCadNumColuns').value;
  const rackInicLines    = document.getElementById('inptCadInicLinha').value;
  const rackInicColuns   = document.getElementById('inptCadInicColuna').value;
  const rackGalery       = document.getElementById('inptRackGalery').value;

  datasRacks.push({
    rackName,
    rackNumberLines,
    rackNumberColuns,
    rackInicLines,
    rackInicColuns,
    rackGalery
  });

  console.log(datasRacks);

  Swal.fire({
    icon: "success",
    title: "Cadastrado",
    text: "Rack cadastrado com sucesso!",
    html:document.getElementById('inptCadNameRack').value   = "",
    html:document.getElementById('inptCadNameRack').focus(),
    html:document.getElementById('inptCadNumLines').value   = "",
    html:document.getElementById('inptCadNumColuns').value  = ""
  }); 

  document.getElementById('inptCadInicLinha').value  = "Escolha",
  document.getElementById('inptCadInicColuna').value = "Escolha",
  document.getElementById('inptRackGalery').value    ="Escolha"
  
}

function cadAmostra(event){
  event.preventDefault();

  datasRacks.forEach((nomeRack,numLine,Numconluns) => {
      return({
        nomeRack,
        numLine,
        Numconluns
      });
  });
}

contentCadGaleyForm.addEventListener('submit', cadGalery);
contentCadRackForm.addEventListener('submit', cadRack);  
  


