import React, {useState, useEffect} from 'react';
import {Modal, ActionIcon } from '@mantine/core';
import axios from 'axios';

const ListMembers = ({ isOpen, setIsOpen, members, handleSetMembers, eventInfo}) => {
  const [nonMembers, setNonMembers] = useState([]);
  const [memberToAdd, setMemberToAdd] = useState();

  useEffect(() => {
    console.log('m', members)
    if (isOpen && members) {
      axios.get(`/db/individuals/all`)
        .then((response) => {
          const allIndividuals = response.data;
          const buildNonMembersArray = [];
          allIndividuals.map((individual) => {
            if (!members.includes(individual.individual_id) && !members.includes(individual.username)) {
              buildNonMembersArray.push(individual);
            }
          })
          setNonMembers(buildNonMembersArray);
        })
    }
  }, [isOpen]);

  useEffect(() => {
    console.log(nonMembers);
  }, [nonMembers])

  const handleAdd = (nonMember) => {
    axios.post(`/db/members/${eventInfo.group_id}/${nonMember.individual_id}`)
      .then((response) => {
        const memberToAdd = nonMember.username ? nonMember.username : nonMember.individual_id;
        handleSetMembers([...members, memberToAdd]);
      });

    setIsOpen(false);

  }

  return isOpen ? (
    <Modal
      opened={isOpen}
      onClose={() => { setIsOpen(false)}}
      title="Add someone to the Group"
      style={{marginTop: '100px', backgroundColor: '0, 0, 0, 1'}}
    >
      {
        nonMembers.map((nonMember) => {
          return (
            <div stlye={{display: 'flex', flexDirection: 'column'}}>
            <div>{nonMember.username ? nonMember.username : nonMember.individual_id}</div>
            <div style={{cursor: 'pointer'}} onClick={() => {
              handleAdd(nonMember);
            }}>+</div>
            </div>
            )
          })
        }
    </Modal>
  ) : (
    null
  )
}

export default ListMembers;