-- 0 -> admin user, 1 -> normal retail user, 2 -> testing user

create table users (
    user_id int  primary key auto_increment,
    user_role int default 1,
    fullname varchar(30),
    email varchar(30) not null,
    password varchar(30) not null
);

SELECT * from users;

insert into users values ( 0, 'Saad', 'saad@gmail.com', 'pass1');
insert into users values ( 1, 'Nitin', 'nitin@gmail.com', 'pass2');
insert into users values ( 1, 'Pawan', 'pawan@gmail.com', 'pass3');
insert into users values ( 1, 'Deepak', 'deepak@gmail.com', 'pass4');
insert into users values ( 1, 'Kamal', 'kamal@gmail.com', 'pass5');
