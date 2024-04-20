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

  cadGal.classList.remove('active');
  cadRac.classList.remove('active');
  cadAmo.classList.toggle('activeAmostras');
  
  // if(datasRacks.length === 0){
    
  //   Swal.fire({
  //     icon: "error",
  //     title: "Nenhum rack encontrado.",
  //     text: "Não há racks cadastrados, antes de cadastrar as amostras é preciso que ajam racks, verifique!",
  // });

  // } else{
    
  //   cadGal.classList.remove('active');
  //   cadRac.classList.remove('active');
  //   cadAmo.classList.toggle('activeAmostras');

  //   datasRacks.forEach((dadosRack,index) => {
  //     let   makeOption = document.createElement('option');
  //     let rackColuns = dadosRack.rackNumberColuns;
  //     let rackLines  = dadosRack.rackNumberLines;
  //     let rackName =  dadosRack.rackName;

  //     makeOption.value = rackName;
  //     makeOption.text = rackName;
      
  //     wichRack.appendChild(makeOption);

  //     console.log({
  //       rackColuns,
  //       rackLines,
  //       rackName
  //     });   
  // });
  // }
}

// function getDadosRackOnchange(){

//   let table      = document.getElementById("myTable");

//   datasRacks.filter((dadosRack,index) => {

//     if(wichRack.value === dadosRack.rackName){
      
//       let rackColuns = dadosRack.rackNumberColuns;
//       let rackLines  = dadosRack.rackNumberLines;
//       let rackName =  dadosRack.rackName;
      
//       console.log({
//         rackColuns,
//         rackLines,
//         rackName
//       }); 
//       stop;
//       let testePreenche = document.getElementById('teste');
//       let testePreenche1 = document.getElementById('teste1');
//       let testePreenche2 = document.getElementById('teste2');
//       let getGrid    = document.getElementById('gridAmostras');
//       let getBody    = document.querySelector('tbody');

      

//       for (let i = 0; i < rackColuns; i++) {
//         let makeColumn = document.createElement('th');
//         getGrid.appendChild(makeColumn);
//         makeColumn.setAttribute("id",i);
//         makeColumn.innerText="Column " + parseFloat(i) * 1;
        
//       }

//     //   <tr>
//     //   <td>Linha 1</td> 
//     //   <td>Alfreds Futterkiste</td>
//     //   <td>Maria Anders</td>
//     //   <td>Germany</td>
//     // </tr>

//       for (let i = 0; i < rackLines; i++) {
//         let makeLines = document.createElement('tr');
//         let makeTd    = document.createElement('td');
//         let getLinha    = document.querySelector('tr');
//         // 

//         // getGrid.appendChild(makeLines);
//         getBody.appendChild(makeLines); 
//         makeLines.appendChild(makeTd);
//         makeLines.setAttribute("id","tr"+i);
//         makeTd.innerText="Linha " + i;
//         // makeLines.appendChild(makeTd);       
//         // makeTd.setAttribute("id","linha"+i);
//         // makeTd.innerText="Teste" + i;        
//       }

      

//       for (let i = 0; i < rackLines; i++) {

//         let getTr      = document.getElementById("tr"+i);
        
//         // let makeCels   = document.createElement('td');
//         let makeCels2   = document.createElement('td');
//         let makeCels3   = document.createElement('td');
//         let makeCels4   = document.createElement('td');
//         let a = 0;
//         let b =rackLines * rackColuns;

//         //getTr.appendChild(makeCels); 
        
//         // var row = table.insertRow(proximaLinha);
        

//         do {
          
//           let makeCels   = document.createElement('td');
//           getTr.appendChild(makeCels);
//          // makeCels.setAttribute("id","td"+a,onclick="myFunction(this)");
//           makeCels.setAttribute("onclick",`myFunction(${a})`);
//           makeCels.textContent="idLinha","td"+a,"idColumn","cl" + b--;
//           makeCels.innerText="Conteudo linha" + i + "col" + i;       
          
//           a++ 

//         } while (a <4);
//       }

//       var proximaLinha = table.rows.length
//       alert(proximaLinha)

//       // testePreenche.innerText  = rackName;
//       // testePreenche1.innerText = rackColuns;
//       // testePreenche2.innerText = rackLines;
//     }
// });
// }

// function myFunction(x,y) {
  
//   alert("Cell index is: " + x.cellIndex);
// }

function addLinha() {
  //Recupera a tabela onde serão adicionado as linhas
  // var table = document.getElementById("myTable");
  var tbody = document.querySelector("tbody");
  var thInic = document.createElement("th");
  tbody.appendChild(thInic);

  var limpaConteudo = document.getElementById('myTable');
  var valores = limpaConteudo.rows.length;

  if (valores != 0){
    alert(valores)
    alert("re")
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

function makeGrid(){
  var tbody = document.querySelector("tbody");
  
  for(var c = 0; c < 5; c++) {
    var th     = document.createElement("th");
    tbody.appendChild(th);
    th.innerText="Coluna";
  }
  for(var c = 0; c < 5; c++) {
    var tdLines = document.createElement("td");
    var trLinas = document.createElement("tr");
    tbody.appendChild(trLinas);
    trLinas.appendChild(tdLines)
    tdLines.innerText="Linhas";
    trLinas.setAttribute("id","l"+c);
  }

  for(var c = 0; c < 5; c++) {   
    var table = document.getElementById('l'+c);

        //recupera a quantidade atual de linhas da tabela, para inserir a nova linha na proxima posição disponivel
        var proximaLinha = 0
        
        //Como serão 5 células, um for para criar cada uma das células e os textareas
        for(var d = 1; d < 6; d++) {
          //cria uma nova célula para a linha
          
          let cels = table.insertCell(d);
          
          //Cria um novo elemento textarea
          // var cels = document.createElement("td");
          
          //Define a propriedade name
          //o nome será unico para cada textarea no formato "campo_NUMEROLINHA_NUMEROCOLUNA"
          cels.className  = "linha_" + table.rowIndex + "coluna_" + cels.cellIndex;
                              
          //Altera o style do textarea definindo a propriedade overflow
          cels.setAttribute("onclick","myFunction(this.className)")
          cels.innerText="TESTESSS" + c;
          //Insere o textarea criado dentro da celula
          // cell0.appendChild(cels);
        }     
  }

}

function myFunction(x,y) {
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
  


