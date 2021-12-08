create table Subscribed (
    subed_id int not null primary key auto_increment,
    sub_id int,
    constraint subed_sub foreign key(sub_id) references Subscription(sub_id),
    user_id int,
    constraint subed_user foreign key(user_id) references User(user_id),
    start_date date,
    end_date date
);