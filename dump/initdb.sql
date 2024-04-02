CREATE DATABASE soroteca
    DEFAULT CHARACTER SET = 'utf8mb4';

    USE soroteca;


    CREATE TABLE cadUsers (
      id INT PRIMARY KEY AUTO_INCREMENT,
      Uname VARCHAR(80) NOT NULL,
      Ucpf VARCHAR(80) NOT NULL,
      Upaper CHAR(1) NOT NULL,
      Uuf CHAR(2) NOT NULL,
      UconsPro CHAR(3) NOT NULL,
      Uemail VARCHAR(80) NOT NULL,
      Upass VARCHAR(80) NOT NULL
    );
	
	INSERT INTO cadUsers (Uname,Ucpf,Upaper,Uuf,UconsPro,Uemail,Upass) VALUES ("Super irmão mais aranha","111.111.226-57","1","MG","CRM","super@aranhasstore.com","a1234567");
