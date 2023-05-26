CREATE DATABASE pi_database;
USE pi_database;

-- $ docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=RootPassword -e MYSQL_DATABASE=Backoffice -e MYSQL_USER=MainUser -e MYSQL_PASSWORD=MainPassword backoffice-db

CREATE TABLE Pessoa ( 
id_pessoa INTEGER PRIMARY KEY AUTO_INCREMENT, 
nome_pessoa VARCHAR(50), 
telefone_pessoa VARCHAR(13), 
email_pessoa VARCHAR(80), 
endereco_pessoa VARCHAR(100), 
flag_exclui_pessoa BOOLEAN 
)AUTO_INCREMENT = 10; 

CREATE TABLE Funcionario ( 
id_pessoa integer unique not null, 
matricula_func integer unique not null AUTO_INCREMENT, 
cpf_func VARCHAR(14) unique not null, 
tipo_func VARCHAR(20), 
ramal_func VARCHAR(13), 
email_func VARCHAR(30), 
flag_exclui_func BOOLEAN, 
FOREIGN KEY(id_pessoa) REFERENCES Pessoa (id_pessoa) 
)AUTO_INCREMENT = 1011; 

CREATE TABLE Clientes ( 
id_pessoa integer unique not null, 
flag_contrato_cliente boolean, 
FOREIGN KEY(id_pessoa) REFERENCES Pessoa (id_pessoa) 
); 

CREATE TABLE Fisica ( 
id_pessoa integer unique not null, 
cpf_fisica VARCHAR(14) unique not null, 
sexo VARCHAR(10), 
FOREIGN KEY(id_pessoa) REFERENCES Pessoa (id_pessoa) 
); 

CREATE TABLE Juridica ( 
id_pessoa integer unique not null, 
cnpj_juridica VARCHAR(18) unique not null, 
nome_fantasia_jurid VARCHAR(50), 
inscricao_estad_jurid VARCHAR(12), 
FOREIGN KEY(id_pessoa) REFERENCES Pessoa (id_pessoa) 
); 

 

CREATE TABLE Equipamentos ( 
id_pessoa integer not null, 
num_serie_equip VARCHAR(25) PRIMARY KEY not null, 
desc_equip VARCHAR(200), 
tipo_equip VARCHAR(45), 
avaria_equip VARCHAR(50), 
flag_exclui_equip BOOLEAN, 
FOREIGN KEY(id_pessoa) REFERENCES Pessoa (id_pessoa) 
); 

CREATE TABLE Ordem_Servico ( 
num_OS INTEGER(10) PRIMARY KEY AUTO_INCREMENT, 
id_pessoa integer not null, 
num_serie_equip VARCHAR(25), 
date_inicio_OS DATE, 
desc_servico_OS VARCHAR(300), 
stts_andamento_OS VARCHAR(25), 
date_fim_OS DATE, 
data_ult_update_OS DATE, 
matricula_func integer, 
flag_exclui_OS BOOLEAN, 
FOREIGN KEY(num_serie_equip) REFERENCES Equipamentos (num_serie_equip), 
FOREIGN KEY(matricula_func) REFERENCES Funcionario (matricula_func), 
FOREIGN KEY(id_pessoa) REFERENCES Pessoa (id_pessoa) 
)auto_increment = 100; 



-- FUNCIONARIO TI PARA TESTES 

insert into Pessoa(nome_pessoa,telefone_pessoa,email_pessoa,endereco_pessoa) values ('usuario TI', '19970707070', 'ti@ti.com', 'Fatec Campinas, Amarais'); 

insert into Funcionario(id_pessoa,cpf_func,tipo_func) values (10,'10','TECNICO LABORATORIAL'); 

 

-- INSERINDO UM CLIENTE PESSOA FISICA PARA TESTES 

insert into Pessoa(nome_pessoa,telefone_pessoa,email_pessoa,endereco_pessoa) values ('João da Silva', '19980015420', 'joãodasilva@fatec.sp.gov.br','Rua das Dores 531, Cambuí - CEP 13871-001'); 

insert into Clientes(id_pessoa,flag_contrato_cliente) values (11,0); 

insert into Fisica(id_pessoa,cpf_fisica,Sexo) values (11,'61981997032','M'); 

 

 

-- INSERINDO UM CLIENTE PESSOA JURIDICA PARA TESTES 

insert into Pessoa(nome_pessoa,telefone_pessoa,email_pessoa,endereco_pessoa) values ('Guru da bet Eireli', '1938543232', 'SAC@guruapostas.com.br','Rua das perdições 35, Taquaral - CEP 13571-015'); 

insert into Clientes(id_pessoa,flag_contrato_cliente) values (12,1); 

insert into Juridica(id_pessoa,cnpj_juridica,nome_fantasia_jurid,inscricao_estad_jurid) values (12, '46583065000108', 'Guru das Apostas esportivas', '901292801201'); 

 

-- INSERINDO UNS CLIENTES PESSOAS FISICAS PARA TESTES 

insert into Pessoa(nome_pessoa,telefone_pessoa,email_pessoa,endereco_pessoa) values ('Matheus Santana Rafael', '19982275408', 'matheus.rafael@fatec.sp.gov.br','Rua do ovo 543, Peruibe/SP - CEP 13181-451'); 

insert into Clientes(id_pessoa,flag_contrato_cliente) values (13,0); 

insert into Fisica(id_pessoa,cpf_fisica,Sexo) values (13,'52059225822','M'); 

 

insert into Pessoa(nome_pessoa,telefone_pessoa,email_pessoa,endereco_pessoa) values ('Ariel Vitor de Morais Oliveira', '19973459640', 'ariel.oliveira5@fatec.sp.gov.br','Rua do vizinho 543, campinas/SP - CEP 13180-651'); 

insert into Clientes(id_pessoa,flag_contrato_cliente) values (14,0); 

insert into Fisica(id_pessoa,cpf_fisica,Sexo) values (14,'49109824855','M'); 

 

insert into Pessoa(nome_pessoa,telefone_pessoa,email_pessoa,endereco_pessoa) values ('Luka Henry', '19928535601', 'lucas.silva870@fatec.sp.gov.br','Rua dele 80, JD. Madagascar, campinas/SP - CEP 13180-639'); 

insert into Clientes(id_pessoa,flag_contrato_cliente) values (15,0); 

insert into Fisica(id_pessoa,cpf_fisica,Sexo) values (15,'32954732544','M'); 

 

insert into Pessoa(nome_pessoa,telefone_pessoa,email_pessoa,endereco_pessoa) values ('Leonardo André Branco', '19958823345', 'leonardo.branco@fatec.sp.gov.br','Av barcelona 23, Pq das Estrelas - Valinhios/SP - CEP 13040-132'); 

insert into Clientes(id_pessoa,flag_contrato_cliente) values (16,0); 

insert into Fisica(id_pessoa,cpf_fisica,Sexo) values (16,'26816724821','M'); 

 

-- INSERINDO EQUIPAMENTO PARA TESTES 

insert into Equipamentos(id_pessoa,num_serie_equip,desc_equip,tipo_equip,avaria_equip) values (11,'PE082E35V67','Lenovo thinkpad i5 10GEN 16GB RAM SSD 256GB','Notebook','Sem avarias'); 

insert into Equipamentos(id_pessoa,num_serie_equip,desc_equip,tipo_equip,avaria_equip) values (12,'QXE48Z2','Dell Inspiron 7432, i7 8GEN 8GB RAM SSD 2480GB','Notebook','Sem avarias'); 

insert into Equipamentos(id_pessoa,num_serie_equip,desc_equip,tipo_equip,avaria_equip) values (11,'EN43TG32GH','LG 29POLEGADAS 60Hz','Monitor','Sem avarias'); 

insert into Equipamentos(id_pessoa,num_serie_equip,desc_equip,tipo_equip,avaria_equip) values (12,'STW23E7','Dell Vostro i7 11GEN 32GB RAM SSD 1TB','Notebook','Sem avarias'); 

insert into Equipamentos(id_pessoa,num_serie_equip,desc_equip,tipo_equip,avaria_equip) values (13,'VB34FDZ56','ACER ASPIRE 5 i5 10GEN SSD 256GB 8GB RAM','Notebook','Sem avarias'); 

insert into Equipamentos(id_pessoa,num_serie_equip,desc_equip,tipo_equip,avaria_equip) values (14,'495FNVA','Dell Inspiron 3432 i3 5GEN 4GB RAM HDD 500gB','Notebook','Marcas de queda'); 

insert into Equipamentos(id_pessoa,num_serie_equip,desc_equip,tipo_equip,avaria_equip) values (15,'PE034FVCS','Lenovo Thinkpad i7 9GEN 8GB RAM SSD 256GB','Notebook','Sem avarias'); 

insert into Equipamentos(id_pessoa,num_serie_equip,desc_equip,tipo_equip,avaria_equip) values (16,'SMBDLNX','Positivo i3 3GEN 4GB RAM SSD 128GB','Notebook','Manchas no touchpad'); 

 

 

-- INSERINDO ORDENS DE SERVIÇOS PARA TESTES 

insert into Ordem_Servico(id_pessoa, num_serie_equip,date_inicio_OS,desc_servico_OS, stts_andamento_OS,matricula_func) VALUES (12,'QXE48Z2',now(),'Formatação com backup e instalação do pacote office','ABERTA',1011); 

insert into Ordem_Servico(id_pessoa, num_serie_equip,date_inicio_OS,desc_servico_OS,stts_andamento_OS,matricula_func) VALUES (11,'PE082E35V67',now(),'Upgrade para SSD 256GB ','ABERTA',1011); 

insert into Ordem_Servico(id_pessoa, num_serie_equip,date_inicio_OS,desc_servico_OS,stts_andamento_OS,matricula_func) VALUES (11,'EN43TG32GH',now(),'Monitor não liga, realizar orçamento para possivel conserto','ORÇAMENTO',1011); 