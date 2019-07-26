# DB

## MySQL

- 다운로드

  https://dev.mysql.com/ → Downloads → Community → [MySQL on Windows (Installer & Tools)](https://dev.mysql.com/downloads/windows/) → MySQL Installer →

  - (mysql-installer-web-community-8.0.17.0.msi) - 설치 후 사용하면서 필요한것 설치
  - (mysql-installer-community-8.0.17.0.msi) - 그냥 다 설치

- 설치파일 실행

  Custom → MySQL Server, Workbench만 설치 → Standalone, 

- 동작 확인

  PATH 연결을 해주자.

  내 컴퓨터 우클릭 - 속성 - 고급 시스템 설정 - 환경변수 - Path 편집 - C:\Program Files\MySQL\MySQL Server 8.0\bin 추가 (사용하고 싶은 프로그램의 bin 경로를 Path에 등록해주면 어느경로에서든 사용할 수 있다.)

  커맨드 창 - mysql -h localhost -u root -p

- RDBMS - 관계형 데이터베이스

- 관계형 데이터베이스가 불편해서 나온 NoSQL

  

- 테이블 형식으로 데이터베이스 생성됨

| 날짜      | 이름   | 생년 | 주소 | 연락처    | 구매품목 | 구매량 | 단가 |
| --------- | ------ | ---- | ---- | --------- | -------- | ------ | ---- |
| 07월 24일 | 김민수 | 1923 | 서울 | 105648651 | 운동화   | 2      | 1000 |
| 07월 25일 | 방혜찬 | 1924 | 서울 | 105648652 | 운동화   | 2      | 1000 |
| 07월 26일 | 유인국 | 1925 | 서울 | 105648653 | 운동화   | 2      | 1000 |
| 07월 27일 | 황상욱 | 1926 | 서울 | 105648654 | 운동화   | 2      | 1000 |
| 07월 28일 | 나지용 | 1927 | 서울 | 105648655 | 운동화   | 2      | 1000 |
| 07월 29일 | 안동원 | 1928 | 서울 | 105648656 | 운동화   | 2      | 1000 |
| 07월 30일 | 김현우 | 1929 | 서울 | 105648657 | 운동화   | 2      | 1000 |

- 주소나 번호 등등이 바뀌는 경우 찾기가 힘들다 - 테이블 분리

| id   | 이름 | 생년 | 주소 | 연락처 |
| ---- | ---- | ---- | ---- | ------ |
|      |      |      |      |        |
|      |      |      |      |        |

| 날짜 | 이름 | 구매품목 | 구매량 | 단가 |
| ---- | ---- | -------- | ------ | ---- |
|      |      |          |        |      |

| 제품번호 | 품목 | 단가 |
| -------- | ---- | ---- |
|          |      |      |



- mysqld는 서버 명령어, mysql은 클라이언트 명령어.
- mysql -h(접속할 서버주소선택) -u(유저의 id) -p(비밀번호 뒤에 붙여도 되고 안붙이면 로그인)

#### 명령어

- ```mysql
  mysql> show databases; -- (DB 조회)
  
  mysql> CREATE DATABASE testdb; -- (testdb 데이터베이스 생성)
  Query OK, 1 row affected (0.09 sec)
  
  mysql> use testdb; -- (데이터베이스를 사용하겠다 선언 - testdb로 접속됨.)
  Database changed
  
  mysql> show tables; -- (DB안의 테이블 조회 - 아직 만들지 않아서 empty)
  Empty set (0.02 sec)
  
  mysql> CREATE TABLE SAMPLE (USERID VARCHAR(45)); -- (SAMPLE이란 테이블 생성 후 USERID 컬럼과 USERID의 데이터타입 정의)
  Query OK, 0 rows affected (0.45 sec)
  
  mysql> show tables;
  +------------------+
  | Tables_in_testdb |
  +------------------+
  | sample           |
  +------------------+
  1 row in set (0.00 sec)
  
  mysql> CREATE TABLE SAMPLE2 (USERID VARCHAR(45), NAME VARCHAR(45));
  Query OK, 0 rows affected (0.37 sec)
  
  mysql> show tables;
  +------------------+
  | Tables_in_testdb |
  +------------------+
  | sample           |
  | sample2          |
  +------------------+
  2 rows in set (0.00 sec)
  
  mysql> DESC SAMPLE; -- (다른사람의 DB 테이블의 구조는 show tables로 확인하기 힘들다.)
  +--------+-------------+------+-----+---------+-------+
  | Field  | Type        | Null | Key | Default | Extra |
  +--------+-------------+------+-----+---------+-------+
  | USERID | varchar(45) | YES  |     | NULL    |       |
  +--------+-------------+------+-----+---------+-------+
  1 row in set (0.00 sec)
  
  mysql> DESC SAMPLE2;
  +--------+-------------+------+-----+---------+-------+
  | Field  | Type        | Null | Key | Default | Extra |
  +--------+-------------+------+-----+---------+-------+
  | USERID | varchar(45) | YES  |     | NULL    |       |
  | NAME   | varchar(45) | YES  |     | NULL    |       |
  +--------+-------------+------+-----+---------+-------+
  2 rows in set (0.00 sec)
  
  mysql> CREATE TABLE USER (NAME VARCHAR(45), BIRTHYEAR INT, ADDR VARCHAR(200), PHONE VARCHAR(20));
  Query OK, 0 rows affected (0.40 sec)
  
  mysql> DESC USER
      -> ;
  +-----------+--------------+------+-----+---------+-------+
  | Field     | Type         | Null | Key | Default | Extra |
  +-----------+--------------+------+-----+---------+-------+
  | NAME      | varchar(45)  | YES  |     | NULL    |       |
  | BIRTHYEAR | int(11)      | YES  |     | NULL    |       |
  | ADDR      | varchar(200) | YES  |     | NULL    |       |
  | PHONE     | varchar(20)  | YES  |     | NULL    |       |
  +-----------+--------------+------+-----+---------+-------+
  4 rows in set (0.00 sec)
  
  mysql> INSERT INTO USER (NAME) VALUES ('JAMES'); (집어넣을 데이터와 대상 테이블, 컬럼을 지정)
  Query OK, 1 row affected (0.05 sec)
  
  mysql> INSERT INTO USER (NAME, BIRTHYEAR, ADDR, PHONE) VALUES ('TOM', 1988, 'SEOUL', '010-2357-8437');
  Query OK, 1 row affected (0.09 sec)
  
  mysql> SELECT * FROM USER; (데이터가 잘 들어갔나 확인해보자.)
  +-------+-----------+-------+---------------+
  | NAME  | BIRTHYEAR | ADDR  | PHONE         |
  +-------+-----------+-------+---------------+
  | JAMES |      NULL | NULL  | NULL          |
  | TOM   |      1988 | SEOUL | 010-2357-8437 |
  +-------+-----------+-------+---------------+
  2 rows in set (0.00 sec)
  
  mysql> SELECT NAME, PHONE FROM USER;
  +-------+---------------+
  | NAME  | PHONE         |
  +-------+---------------+
  | JAMES | NULL          |
  | TOM   | 010-2357-8437 |
  +-------+---------------+
  2 rows in set (0.00 sec)
  
  
  ```

#### Workbench

- MySQL을 위한 GUI

- Administration - Users and Privileges - root계정 - Limit to Hosts Matching을 %로 바꿔줌(연결허용)

- Schemas - 우클릭 - Create schema (DB 생성) 

- 생성된 DB에서 Tables 우클릭 - Create table

- CRUD

  - C - CREATE

    - 각종 테이블 생성 명령어

    ```mysql
    숫자 관련
    
    use testdb;
    
    DROP TABLE SAMPLE5;
    
    CREATE TABLE SAMPLE3 (COL_INT INT);
    
    ALTER TABLE SAMPLE3 ADD COL_DECIMAL DECIMAL(7,2);
    
    ALTER TABLE SAMPLE3 ADD COL_FLOAT FLOAT(7,2);
    
    ALTER TABLE SAMPLE3 ADD COL_DOUBLE DOUBLE(10,6);
    
    INSERT INTO SAMPLE3 (COL_DECIMAL) VALUES (88410.12584684846518651);
    INSERT INTO SAMPLE3 (COL_DECIMAL) VALUES (10.12);
    INSERT INTO SAMPLE3 (COL_INT) VALUES (10);
    INSERT INTO SAMPLE3 (COL_INT) VALUES (-10);
    INSERT INTO SAMPLE3 (COL_INT) VALUES (68979981);
    INSERT INTO SAMPLE3 (COL_INT) VALUES (10.54864644516616186185686541);
    
    SELECT * FROM SAMPLE3;
    
    문자 관련
    
    use testdb;
    
    DROP TABLE SAMPLE3;
    
    CREATE TABLE SAMPLE3 (COL_CHAR CHAR(5)); -- CHAR는 입력된 문자열이 정한길이보다 짧아도 문자열의 길이를 유지한다.
    
    ALTER TABLE SAMPLE3 ADD COL_VARCHAR VARCHAR(5); -- VARCHAR는 입력된 문자열이 정한 길이보다 짧으면 길이가 맞춰진다.
    
    ALTER TABLE SAMPLE3 ADD COL_TEXT TEXT; -- TEXT는 길이를 정해주지 않아도 된다. 긴 문자열을 저장하기 좋다.
    
    ALTER TABLE SAMPLE3 ADD COL_DATE DATE; -- 날짜를 저장해주는 데이터 타입
    
    ALTER TABLE SAMPLE3 ADD COL_DATETIME DATETIME; -- 날짜와 시간까지 저장해주는 데이터 타입
    
    ALTER TABLE SAMPLE3 ADD COL_TIMESTAMP TIMESTAMP; -- 1970년 1월 1일 이후로 몇 ms가 지났는지 타임스탬프형식으로 저장된다.
    
    INSERT INTO SAMPLE3 (COL_CHAR) VALUES ('AABBB');
    INSERT INTO SAMPLE3 (COL_VARCHAR) VALUES ('ABC');
    INSERT INTO SAMPLE3 (COL_TEXT) VALUES ('DEEPINTHEHEARTOFTEXAS');
    INSERT INTO SAMPLE3 (COL_DATE) VALUES ('1999-09-09');
    INSERT INTO SAMPLE3 (COL_DATETIME) VALUES ('1999-09-09 23:40:34');
    INSERT INTO SAMPLE3 (COL_TIMESTAMP) VALUES (NOW());
    
    SELECT * FROM SAMPLE3;
    ```

  - R - READ

    ```mysql
    USE employees;
    
    SELECT * FROM departments;
    SELECT * FROM employees;
    SELECT first_name, last_name, gender FROM employees;
    SELECT first_name, last_name, gender FROM employees WHERE gender='M'; -- 검색 조건을 정할 수 있다.
    SELECT * FROM employees WHERE emp_no <= 10010 AND birth_date <= '1959-12-01'; -- 검색 조건을 여러개 정해줄 수 있다.
    SELECT * FROM employees ORDER BY BIRTH_DATE; -- 정렬도 가능
    SELECT * FROM employees ORDER BY FIRST_NAME DESC, LAST_NAME ASC; -- 정렬조건을 여러개써주면 앞의 조건부터 우선하고, 오름차순, 내림차순 정렬도 정할 수 있다.
    SELECT * FROM employees LIMIT 10; -- 출력 개수 제한
    SELECT * FROM employees LIMIT 10 OFFSET 10; -- OFFSET 의 숫자만큼 건너뛰고 그 다음부터 출력
    SELECT DISTINCT FIRST_NAME FROM employees; -- DISTINCT 를 사용하면 중복 데이터들은 1건만 조회된다.
    SELECT * FROM employees WHERE first_name LIKE 'KA%'; -- 검색에 부분조건을 정할 수 있다.
    
    ```

  - U - UPDATE

    ```mysql
    USE employees;
    
    select * from employees WHERE birth_date='1953-12-03';
    
    UPDATE employees SET birth_date = '2011-11-11' WHERE first_name='Tomokazu' AND emp_no=11607;
    
    ALTER TABLE employees ADD del_yn CHAR(1);
    
    UPDATE employees SET del_yn = 'N';
    
    select * from employees WHERE emp_no=11607;
    ```

  - D - DELETE

    ```mysql
    USE employees;
    
    DELETE FROM employees WHERE emp_no = 10001;
    
    SELECT * FROM employees;
    ```

    

  모두 만족하면 그 DB는 사용할 수 있다고 한다.

  

- NN(Not Null) - Null 인 데이터가 삽입될 수 없는 컬럼을 지정해준다. 필수입력 항목을 선택할 수 있다.(회원가입 등에서 사용 가능)

- UQ(Unique Index) - 중복이 되는 데이터는 입력이 안되도록 설정해준다.

- PK(Primary Key) - 테이블에서 각 행을 대표하는 키. 보통 NN과 UQ 속성을 같이 가지고 있는다. 이 PK 를 다른 테이블에서 참조해서 사용할 수 있다. 시퀀스 넘버를 PK로서 사용할 경우 AI(Auto Incremental) 속성도 같이 사용한다(순서대로 자동 부여).



## DB 연동

이제 서버에서 DB를 사용해보자.

서버쪽에서 mysql 확장 모듈을 인스톨해주자.

```cmd
npm install --save mysql
```

npmjs 에서 mysql 모듈을 검색해 instruction을 따라가자

```js
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',   // 서버 주소
    user: 'root',        // 접속할 계정
    password: '123456',      // 접속할 계정 패스워드
    database: 'carhistory'        // 접속할 db
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
    res.json(JSON.stringify(results, null, 2));

    connection.end();
});
```

내 임의코드

```js
var express = require('express');
var mysql = require('mysql');
const dbconfig = require('./dbconfig');
var cc = (host, port, user, password, database)=>{
    return (mysql.createConnection({
        host: host,   // 서버 주소
        port: port,
        user: user,        // 접속할 계정
        password: password,      // 접속할 계정 패스워드
        database: database        // 접속할 db
    }));
};

module.exports = function () {
    var router = express.Router();

    router.get('/test', (req, res) => {
        let connection = cc('70.12.50.174', '3306', 'root', '123456', 'carhistory');
        connection.connect();

        connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results[0].solution);
            res.json(results);

            connection.end();
        });
    });

    router.get('/getuser', (req, res) => {
        let connection = cc('70.12.50.174', '3306', 'root', '123456', 'carhistory');
        connection.connect();

        connection.query('SELECT * FROM user', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results[0].solution);
            res.json(results);

            connection.end();
        });
    });

    router.get('/adduser', (req, res) => {
        let connection = cc('70.12.50.174', '3306', 'root', '123456', 'carhistory');
        connection.connect();

        connection.query("INSERT INTO user (userid, password, salt, name, email) values ('dktqornjs','123','fh293f','안동원','없음')", function (error, results, fields) {
            if (error) throw error;
            console.log('users : ', results);
            res.json(results);

            connection.end();
        });
    });

    router.get('/router', (req, res) => {
        console.log('/mysql/router');
        res.send('<h1>/mysql/router</h1>');
    });


    return router;
}
```

보안을 위해 dbconfig.js 파일을 만들어 모듈로 사용하자

`dbconfig.js`

```js
module.exports = {
    host: '70.12.50.174',   // 서버 주소
    user: 'root',        // 접속할 계정
    password: '123456',      // 접속할 계정 패스워드
    database: 'carhistory'        // 접속할 db
}
```

mysql 라우터에서 dbconfig를 사용해주자.

`var connection = mysql.createConnection(dbconfig);`



## 테이블끼리 합쳐서 select를 해보자.

```mysql
use employees;

SELECT * FROM employees;

SELECT * FROM titles;

SELECT * FROM employees LEFT JOIN titles ON employees.emp_no = titles.emp_no;

SELECT e.emp_no, e.first_name, e.last_name, t.title, t.from_date, t.to_date 
FROM employees as e
LEFT JOIN titles as t
ON e.emp_no = t.emp_no;

SELECT * FROM employees.salaries;

SELECT e.emp_no, e.first_name, e.last_name, s.salary, s.from_date, s.to_date 
FROM employees as e
LEFT JOIN salaries as s
ON e.emp_no = s.emp_no;

```

1:n 관계면 그냥 위대로 하면 되고

테이블 A, B가 서로 n:m 관계면 사이에 테이블 C 하나가 있어야한다.

```mysql
SELECT e.emp_no, e.first_name, e.last_name, de.dept_no, d.dept_name, de.from_date, de.to_date
FROM employees as e
LEFT JOIN dept_emp as de
ON e.emp_no = de.emp_no
LEFT JOIN departments as d
ON de.dept_no = d.dept_no
WHERE de.to_date > now();

select * from dept_manager;

select * from departments;

SELECT e.emp_no, e.first_name, e.last_name, d.dept_no, d.dept_name, dm.from_date, dm.to_date
FROM employees as e
LEFT JOIN dept_manager as dm
ON e.emp_no = dm.emp_no
LEFT JOIN departments as d
ON dm.dept_no = d.dept_no
WHERE dm.to_date > now();

SELECT * 
FROM departments as d
LEFT JOIN
	( SELECT dm.dept_no, e.first_name, e.last_name 
      FROM dept_manager as dm
	  LEFT JOIN employees as e
      ON dm.emp_no = e.emp_no
      WHERE dm.to_date > now()) as dme
ON d.dept_no = dme.dept_no;
```

```mysql
SELECT e.emp_no, e.last_name, MIN(e.hire_date), s.salary 
FROM employees as e
LEFT JOIN salaries as s
ON e.emp_no = s.emp_no;

SELECT last_name, count(emp_no) as namecnt FROM employees
GROUP BY last_name
ORDER BY namecnt DESC
LIMIT 3;

SELECT YEAR(birth_date) as yb, COUNT(emp_no) FROM employees
GROUP BY YEAR(birth_date)
ORDER BY yb
LIMIT 10;

SELECT YEAR(hire_date) as hired_year, count(emp_no) as NumofWorker FROM employees
GROUP BY hired_year
ORDER BY hired_year ASC
LIMIT 10;
```

