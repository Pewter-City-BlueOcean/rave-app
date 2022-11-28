import React from 'react';

const AddMember = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  }

  return (
    <div>
      <button style={{cursor: 'pointer'}} onClick={() => {

      }}>Add Member</button>

      <ListMembers />
    </div>
  )
}

export default AddMember;