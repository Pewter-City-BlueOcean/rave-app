import React, { useState } from 'react';
import { Modal, Button, Group, FileInput, Textarea, TextInput } from '@mantine/core';
import axios from 'axios';


const EditUser = ({opened, setOpened, user, setUser}) => {

  const [filename, setFilename] = useState('');
  const [username, setUsername] = useState(user.username);
  const [location, setLocation] = useState(user.location);
  const [motto, setMotto] = useState(user.motto);
  const [bio, setBio] = useState(user.bio);


  const handleSubmitForm = () => {
    const user = {
      username, location, motto, bio
    };
    if (filename) {
      user.photo = filename;
    }
    setOpened(false);
  };

  const handleFileChange = (e) => {
    console.log(e);
    setFilename(e);
  }

  const handleUsername = (e) => {
    console.log(e);
    setUsername(e.target.value);
  }

  const handleLocation = (e) => {
    console.log(e);
    setLocation(e.target.value);
  }

  const handleMotto = (e) => {
    console.log(e);
    setMotto(e.target.value);
  }

  const handleBio = (e) => {
    console.log(e);
    setBio(e.target.value);
  }

  return (
    <Modal
      opened={opened}
      onClose={() => { setOpened(false)}}
      title="Edit user information">
      <FileInput
        placeholder="Upload Image"
        label="Your Profile Image"
        value={filename}
        onChange={handleFileChange}
        />
      <TextInput
        placeholder={user.username}
        label="Username"
        onChange={handleUsername}
        value={username}
        />
      <TextInput
        placeholder={user.location}
        label="Location"
        onChange={handleLocation}
        value={location}
        />
      <TextInput
        placeholder={user.motto}
        label="motto"
        onChange={handleMotto}
        value={motto}
        />
      <Textarea
        placeholder={user.bio}
        label="Your Bio"
        onChange={handleBio}
        value={bio}
        />
        <Button type="submit" onClick={handleSubmitForm}>Submit</Button>
    </Modal>
  )
}

export default EditUser;