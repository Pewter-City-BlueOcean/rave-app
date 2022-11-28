DROP TABLE IF EXISTS members;
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS individuals;
DROP TABLE IF EXISTS groups;


CREATE TABLE IF NOT EXISTS individuals (
  individual_id varchar (255) PRIMARY KEY NOT NULL,
  email varchar(55) NOT NULL,
  username varchar(255),
  motto varchar (255),
  location varchar (255),
  bio TEXT,
  age varchar (255),
  photo varchar (255),
  playlist varchar (255)
);

CREATE TABLE groups (
  group_id int NOT NULL PRIMARY KEY,
  event_title varchar (255) NOT NULL,
  datetime_local timestamp NOT NULL,
  performers json ARRAY,
  city varchar (255) NOT NULL,
  country varchar (255) NOT NULL,
  state varchar (50),
  address varchar (255),
  extended_address varchar (255),
  postal_code varchar (255),
  location_latitude decimal,
  location_longitude decimal,
  notification int DEFAULT 0,
  created_by_individual_id varchar (255) NOT NULL,
  date_added_to_db timestamp default CURRENT_TIMESTAMP,
  average_price int NOT NULL
);

CREATE TABLE IF NOT EXISTS members (
  individual_id varchar (255) NOT NULL REFERENCES individuals (individual_id),
  group_id int  NOT NULL REFERENCES groups (group_id),
  PRIMARY KEY (individual_id ,group_id)
);

CREATE TABLE messages (
  message_id SERIAL NOT NULL PRIMARY KEY,
  group_id int NOT NULL REFERENCES groups (group_id),
  message_creation_datetime timestamp default CURRENT_TIMESTAMP,
  individual_id varchar(255) NOT NULL REFERENCES individuals (individual_id),
  message_text varchar(255) NOT NULL
);