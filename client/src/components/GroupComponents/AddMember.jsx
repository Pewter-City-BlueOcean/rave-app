import React, {useState, useEffect} from 'react';
import ListNonMembers from './ListNonMembers.jsx';
const AddMember = ({members, setMembers}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  }

  return (
    <div>
      <button style={{cursor: 'pointer'}} onClick={handleButtonClick}>Add Member</button>

      <ListNonMembers isOpen={isOpen} setIsOpen={setIsOpen} members={members} setMembers={setMembers}/>
    </div>
  )
}

export default AddMember;