import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SERVER_ADDR = process.env.SERVER_ADDR + ':' + process.env.PORT;

const Attendees = ({groupId, handleSetMembers, members}) => {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    if (groupId) {
      axios.get(`${SERVER_ADDR}/db/members/${groupId}`)
        .then((response) => {
          if (attendees.length != response.data.length) {
            setAttendees(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [groupId, members]);

  useEffect(() => {
    if (JSON.stringify(attendees) !== JSON.stringify(members)) {
      const members = [];
      attendees.map((attendee) => {
        members.push(attendee.individual_id);
      });

      handleSetMembers(members);
    }
  }, [attendees])

  return (
    <div>
      <h3> Attendees </h3>
      <ul style={{textAlign: 'left'}}>
        {attendees.map((attendee, index) => {
          return (
            <li key={index}>{attendee.username ? attendee.username : attendee.individual_id}</li>
          );
        })}
      </ul>
    </div>
  )
}

export default Attendees;