create table Publisher(
    pub_id int not null primary key auto_increment,
    pub_name varchar(60)
);


insert into Publisher (pub_name) values('pub1');
insert into Publisher (pub_name) values('pub2');
insert into Publisher (pub_name) values('pub3');
insert into Publisher (pub_name) values('pub4');
insert into Publisher (pub_name) values('pub5');



SELECT * from Publisher;
