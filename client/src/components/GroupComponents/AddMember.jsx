import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button, TextField, InputAdornment, Autocomplete, createFilterOptions} from '@mui/material';
import { GroupAddIcon, AccountCircle } from '@mui/icons-material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Dropdown from 'react-bootstrap/Dropdown';

const AddMember = ({members,groupId,setMembers,getGroupMembers}) => {

  const [add, setAdd] = useState('')

  const [individual_id, setIndividual_id] = useState('');

  const [allMembers, setAllMembers]= useState([]);

  const handleChange = (event) => {
    setAdd(event.target.value);
  };

  const handleClicke = (event) => {
    setIndividual_id(allMembers.find(mem=>mem.spotify_username===add).individual_id);
  }

  const addNewMember = (individualId) => {
    return axios.post('/groupMember',{
      individual_id: individualId,
      group_id: groupId
    })
    .then((result)=> {
      console.log(result)
      return getGroupMembers();
    })
    .then((result)=> {
      setIndividual_id(0);
      setAdd('');
    })
  }

  const getAllMembers = () => {
    const masterMemberIds = members.map(mem=>mem.individual_id)
    axios.get('/getMembers')
    .then((result)=> {
      const filteredMembers = result.data.filter(res => !masterMemberIds.includes(res.individual_id));
      setAllMembers(filteredMembers);
    })
  };

  useEffect (()=> {
    getAllMembers()
  },[members])

  useEffect(()=> {
    addNewMember();
  },[individual_id])

  return (
    !!allMembers.length &&
    <Dropdown className="test" style={{ color: 'white'}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Add Member
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {
          allMembers.length && allMembers.map((mem, index) => (
            <Dropdown.Item key={index} onClick={(e) => {
              addNewMember(e.target.text)
            }
            }>{mem.individual_id}</Dropdown.Item>
          ))
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default AddMember;
