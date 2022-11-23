import React, { useState } from 'react';
import { Modal, Button, Group, FileInput, Textarea, TextInput } from '@mantine/core';
import axios from 'axios';
import { useRaveStore } from '../helpers/raveStore.js';


const EditUser = ({opened, setOpened, user, setUser}) => {

  const [filename, setFilename] = useState('');
  const [username, setUsername] = useState(user.username);
  const [location, setLocation] = useState(user.location);
  const [motto, setMotto] = useState(user.motto);
  const [bio, setBio] = useState(user.bio);

  const userId = useRaveStore((state) => state.userId);

  const handleSubmitForm = () => {
    const user = {
      location, motto, bio
    };
    setOpened(false);
    console.log(user);
    //create Form from object
    const formData = new FormData();
    formData.append('individual_id', userId);
    formData.append('location', location);
    formData.append('motto', motto);
    formData.append('bio', bio);
    if (filename) {
      const photo = filename;
      formData.append('photo', photo);
    }
    //post Form to server
    axios.post(`${process.env.SERVER_ADDR}:${process.env.PORT}/db/individuals`, formData, config).then(result => {
      console.log(result.data[0]);
      setUser(result.data[0])
    })
  };

  const handleFileChange = (e) => {
    setFilename(e);
  }
  const handleLocation = (e) => {
    setLocation(e.target.value);
  }
  const handleMotto = (e) => {
    setMotto(e.target.value);
  }
  const handleBio = (e) => {
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

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
}

export default EditUser;