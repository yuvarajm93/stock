CREATE DATABASE db;
use db;
CREATE TABLE week (user_id varchar(255), date date,agenda varchar(255),start_time time,end_time time,mode varchar(255),status varchar(255));

INSERT INTO week (user_id,date,agenda,start_time,end_time, mode,status) VALUES ('u1','2019-11-01', 'meditation','6:30:00','7:30:00','silent','true');

CREATE TABLE month (user_id varchar(255), date date,agenda varchar(255),start_time time,end_time time,mode varchar(255),status varchar(255));

INSERT INTO month (user_id,date,agenda,start_time,end_time, mode,status) VALUES ('u1','2019-11-01', 'meditation','6:30:00','7:30:00','silent','true');
