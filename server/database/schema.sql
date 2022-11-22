DROP TABLE IF EXISTS members;
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS individuals;
DROP TABLE IF EXISTS groups;

CREATE TABLE IF NOT EXISTS individuals (
  individual_id int NOT NULL PRIMARY KEY,
  email varchar(55) NOT NULL,
  spotify_username varchar (255) NOT NULL,
  bio varchar (255),
  photo varchar (255),
  playlist varchar (255)
);

CREATE TABLE IF NOT EXISTS groups (
  group_id int NOT NULL PRIMARY KEY,
  event_title varchar (255) NOT NULL,
  datetime_local timestamp NOT NULL,
  performers json ARRAY,
  city varchar (255) NOT NULL,
  country varchar (255) NOT NULL,
  state varchar (50),
  postal_code int,
  location_latitude decimal,
  location_longitude decimal,
  notification int DEFAULT 0,
  created_by_individual_id int NOT NULL,
  date_added_to_db timestamp default CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS members (
  individual_id int NOT NULL REFERENCES individuals (individual_id),
  group_id int  NOT NULL REFERENCES groups (group_id),
  PRIMARY KEY (individual_id,group_id)
);

CREATE TABLE IF NOT EXISTS messages (
  message_id SERIAL NOT NULL PRIMARY KEY,
  group_id int NOT NULL REFERENCES groups (group_id),
  message_creation_datetime timestamp default CURRENT_TIMESTAMP,
  individual_id int NOT NULL REFERENCES individuals (individual_id),
  message_text varchar(255) NOT NULL
);