create table Magazine (
    mag_id int not null primary key auto_increment,
    mag_name varchar(60),
    pub_id int, genre varchar(20),
    constraint mag_pub foreign key(pub_id) references publishers(pub_id)
);



SELECT  * FROM Magazine ;


insert into Magazine (mag_name,pub_id) values('magazine1',1);
insert into Magazine (mag_name,pub_id) values('magazine2',2);
insert into Magazine (mag_name,pub_id) values('magazine3',3);
insert into magazines (mag_name,pub_id) values('magazine4',4);


ALTER TABLE Magazine ADD genre varchar(20);
ALTER TABLE Magazine ADD image varchar(1024);
UPDATE Magazine set genre="bollywood" where mag_id =1;
UPDATE Magazine set genre="finance" where mag_id =2;
UPDATE Magazine set genre="business" where mag_id =3;
UPDATE Magazine set genre="technology" where mag_id =4;

ALTER TABLE Magazine ADD image varchar(1024);

