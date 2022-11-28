import React from 'react';
import ListNonMembers from './ListNonMembers.jsx';
const AddMember = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  }

  return (
    <div>
      <button style={{cursor: 'pointer'}} onClick={() => {

      }}>Add Member</button>

      <ListNonMembers />
    </div>
  )
}

export default AddMember;