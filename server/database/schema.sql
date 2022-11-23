DROP TABLE IF EXISTS members;
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS individuals;
DROP TABLE IF EXISTS groups;

CREATE TABLE IF NOT EXISTS individuals (
  individual_id varchar (255) PRIMARY KEY NOT NULL,
  email varchar(55) NOT NULL,
  motto varchar (255) DEFAULT " ",
  location varchar (255) DEFAULT " ",
  bio TEXT DEFAULT " ",
  photo varchar (255) DEFAULT " ",
  playlist varchar (255) DEFAULT " "
);

CREATE TABLE IF NOT EXISTS groups (
  group_id int NOT NULL PRIMARY KEY,
  event_title varchar (255) NOT NULL,
  datetime_local timestamp NOT NULL,
  performers json ARRAY,
  city varchar (255) NOT NULL,
  country varchar (255) NOT NULL,
  state varchar (50),
  address varchar (255),
  extended_address varchar (255),
  postal_code int,
  location_latitude decimal,
  location_longitude decimal,
  notification int DEFAULT 0,
  created_by_individual_id int NOT NULL,
  date_added_to_db timestamp default CURRENT_TIMESTAMP,
  average_price int NOT NULL
);

CREATE TABLE IF NOT EXISTS members (
  individual_id varchar (255) NOT NULL REFERENCES individuals (individual_id),
  group_id int  NOT NULL REFERENCES groups (group_id),
  PRIMARY KEY (individual_id ,group_id)
);

CREATE TABLE IF NOT EXISTS messages (
  message_id SERIAL NOT NULL PRIMARY KEY,
  group_id int NOT NULL REFERENCES groups (group_id),
  message_creation_datetime timestamp default CURRENT_TIMESTAMP,
  individual_id varchar(255) NOT NULL REFERENCES individuals (individual_id),
  message_text varchar(255) NOT NULL
);