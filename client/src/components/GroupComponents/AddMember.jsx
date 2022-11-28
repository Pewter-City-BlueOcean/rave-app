import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/system/styles';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MenuItem from '@mui/material/MenuItem';

const filter = createFilterOptions();

const AddMember = ({members,groupId,setMembers,getGroupMembers}) => {

  const [add, setAdd] = useState('')

  const [individual_id, setIndividual_id] = useState(0);

  const [allMembers, setAllMembers]= useState([]);

  const handleChange = (event) => {
    setAdd(event.target.value);
  };

  const handleClicke = (event) => {
    setIndividual_id(allMembers.find(mem=>mem.spotify_username===add).individual_id);
  }

  const addNewMember = () => {
    return axios.post('/groupMember',{
      individual_id,
      group_id:groupId
    })
    .then((result)=> {
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
      // console.log('masterMemberIds', masterMemberIds)
      // console.log('result.data.individual_ids', result.data.map(mem => mem.individual_id))
      const filter = result.data.filter(res => !masterMemberIds.includes(res.individual_id))
      setAllMembers(filter)
      console.log('====', filter)
    })
  };

  useEffect (()=> {
    getAllMembers()
  },[members])

  useEffect(()=> {
    addNewMember();
  },[individual_id])

  return (
  <div className='add-member-container'>
    <div>
    <TextField
      id="text-field"
      select
      label="Add Member"
      value={add}
      onChange={handleChange}
      helperText="Please select your currency"
      >
      {
        allMembers.map((mem) => (
          <MenuItem key={mem.individual_id} value={mem.spotify_username}
          >
          {mem.spotify_username}
        </MenuItem>
      ))
      }
     </TextField>
    </div>
    <div className='add-member-button-container'>
      <Button
      id='add-member-button'
      variant="outlined"
      onClick={handleClicke}
      ><GroupAddIcon/></Button>
    </div>
  </div>

  )
}

export default AddMember;