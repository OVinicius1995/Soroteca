<div><h1> Projeto em HTML <img "width="40" height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"> e se trata de uma Soroteca </h1></div>
<div><p></p>/p>

<hr>
<div align="center"><h2>Breve visão das telas do projeto.</h2><img src="https://github.com/OVinicius1995/Projeto_livraria_POO/blob/Atual/assets/Livraria_final_2.gif"></div>


<hr>


<p> Vou tentar explicar um pouco sobre este projeto, bom o projeto de livraria surgiu inicial para ser um estoque de livros visando aplicar o conceito de CRUDs (create, update,delete), porem mais uma vez tive a ideia de ampliar um pouco e colocar também uma opção de venda de livros. </p>



<p> Dito isso e após apresentar o exterior do proejto irei apresentar apresentar um pouco da beleza interior do mesmo :sweat_smile:. Conforme falado anteriormente o sistema foi pensando (num escopo até antigo) de programação em 3 camadas (Bll, DTO, DAL).
<ul>
   <li>Por tanto temos a camada <a href="https://github.com/OVinicius1995/Projeto_livraria_POO/blob/master/Livraria_BLL.cs" target="_blank">BLL</a> onde é inserido a camada de regra de negocio (ou seja onde ficam as operações do CRUD)</li>
   <li>Na sequência vem a camda de dados <a href="https://github.com/OVinicius1995/Projeto_livraria_POO/blob/master/livraria_DTO.cs" target="_blank">DTO</a> camada que é responsável por encapsular os dados capturando os mesmo, deixando os dados privado, e liberando os dados somente para os herdeiros e às instanciações.</li>
<li>E por ultimo porem não menos importante vem a camada <a href="https://github.com/OVinicius1995/Projeto_livraria_POO/blob/master/DAO_MySql.cs" target="_blank">DAL</a> esta é a camada onde é feito a conexão com a base de dados.</li>
    <li>Base de dados <a href="https://github.com/OVinicius1995/Projeto_livraria_POO/blob/Atual/assets/livraria.sql" target="_blank">Schema.</a></li>  


</ul>
</p>

<p>
    Em pesquisas feitas recentemente acabei por ver que essa forma de desenvolvimento já é considerada ultrapassada, porem foi a forma como surgiu o projeto. Pra mim o importante é a usabilidade do cliente, facilidade de manutenção no código, e a programação em objetos que conta com os pilares principais (Abstração, Encapsulamento, Herança, Polimorfismo).
</p>
<div align="center"><h2>UML</h2><img height="620" width="935" src="https://github.com/OVinicius1995/Projeto_livraria_POO/blob/Atual/assets/diagrama_livraria.jpeg"></div>



<div align="center"><h2>DEER</h2><img height="620" width="935" src="https://github.com/OVinicius1995/Projeto_livraria_POO/blob/Atual/assets/DEER_Livraria.png"></div>
