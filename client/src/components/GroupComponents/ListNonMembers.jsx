import React, {useState, useEffect} from 'react';
import {Modal, ActionIcon } from '@mantine/core';
import axios from 'axios';

const ListMembers = ({ isOpen, setIsOpen, members, setMembers }) => {
  const [nonMembers, setNonMembers] = useState([]);

  useEffect(() => {
    console.log();
    if (isOpen) {
      axios.get('/db/individuals/all')
        .then((response) => {
          const allIndividuals = response.data;
          const buildNonMembers = [];

          allIndividuals.map((individual) => {
            if (members.indexOf(individual.individual_id) === -1 && members.indexOf(individual.username) === -1) {
              console.log(members);
              buildNonMembers.push(individual);
            }
          })

          setNonMembers([...buildNonMembers]);

        })
    }
  }, [isOpen]);

  useEffect(() => {
    console.log(nonMembers);
  }, [nonMembers])

  return isOpen ? (
    <Modal
      opened={isOpen}
      onClose={() => { setIsOpen(false)}}
      title="Add someone to the Group"
      style={{marginTop: '100px', backgroundColor: '0, 0, 0, 1'}}
    >
      {nonMembers.map((nonMember) => {
        console.log(nonMember);
      })}
    </Modal>
  ) : (
    null
  )
}

export default ListMembers;