use employeedb;

CREATE TABLE employee(
id int(11) NOT NULL AUTO_INCREMENT,
name varchar(45) DEFAULT NULL,
salary int(11) DEFAULT NULL,
PRIMARY KEY(id)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT
CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO employee(id,name,salary)
VALUES(1,"Ram",50000),
(2,"Shyam",40000),
(3,"Mohan",450000);

SELECT * FROM employee;
