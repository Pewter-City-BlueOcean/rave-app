import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SERVER_ADDR = process.env.SERVER_ADDR + ':' + process.env.PORT;

const Attendees = ({groupId, setMembers}) => {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    if (groupId) {
      axios.get(`${SERVER_ADDR}/db/members/${groupId}`)
        .then((response) => {
          setAttendees(response.data);

        })
        .catch((error) => {
          console.log(error);
        });

    }
  }, [groupId]);

  useEffect(() => {
    const members = [];
    attendees.map((attendee) => {
      members.push(attendee.individual_id);
    });

    setMembers[members];
  }, [attendees])

  return (
    <div>
      <h3> Attendees </h3>
      <ul style={{textAlign: 'left'}}>
        {attendees.map((attendee) => {
          return (
            <li>{attendee.username ? attendee.username : attendee.individual_id}</li>
          );
        })}
      </ul>
    </div>

  )
}

export default Attendees;