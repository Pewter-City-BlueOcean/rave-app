require("dotenv").config();
const express = require('express');
const axios = require('axios');
const router = express.Router();

const SPOTIFY_BASE = 'https://api.spotify.com/v1';

/**
 * Get Playlist
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlist
 */
router.get('/get/:playlist_id/:access_token', (req, res) => {
  const playlist_id = req.params.playlist_id;
  const access_token = req.params.access_token;

  const headers = {
    headers: {
      "Authorization": `Bearer ${access_token}`
    }
  }
  axios.get(`${SPOTIFY_BASE}/playlists/${playlist_id}`, headers)
    .then((response) => {
      if (response.status === 200) {
        res.send(response.data);
      } else {
        res.status(500).send('Spotify responded with a status ' + response.status);
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        res.status(401).send();
      } else {
        res.status(500).send('Spotify responded with a status ' + error.response.status);
      }
    });

});

/**
 * Change Playlist Details
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/change-playlist-details
 */
router.put('/:playlist_id/:access_token', (req, res) => {
  const playlist_id = req.params.playlist_id;
  const access_token = req.params.access_token;
  const body = req.body;

  const headers = {
    headers: {
      "Authorization": `Bearer ${access_token}`
    }
  }

  axios.put(`${SPOTIFY_BASE}/playlists/${playlist_id}`, body, headers)
    .then((response) => {
      if (response.status === 200) {
        res.send(response.data);
      } else {
        res.status(500).send('Spotify responded with a status ' + response.status);
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        res.status(401).send();
      } else {
        res.status(500).send('Spotify responded with a status ' + error.response.status);
      }
    });
});

/**
 * Get Playlist Items
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlists-tracks
 */
router.get('/:playlist_id/tracks/:access_token', (req, res) => {
  const playlist_id = req.params.playlist_id;
  const access_token = req.params.access_token;

  const headers = {
    headers: {
      "Authorization": `Bearer ${access_token}`
    }
  }

  axios.get(`${SPOTIFY_BASE}/playlists/${playlist_id}/tracks`, headers)
    .then((response) => {
      if (response.status === 200) {
        res.send(response.data);
      } else {
        res.status(500).send('Spotify responded with a status ' + response.status);
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        res.status(401).send();
      } else {
        res.status(500).send('Spotify responded with a status ' + error.response.status);
      }
    });
});

/**
 * Get Playlist Cover Image
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlist-cover
 */
router.get('/:playlist_id/images/:access_token', (req, res) => {
  const playlist_id = req.params.playlist_id;
  const access_token = req.params.access_token;

  const headers = {
    headers: {
      "Authorization": `Bearer ${access_token}`
    }
  }
  axios.get(`${SPOTIFY_BASE}/playlists/${playlist_id}/images`, headers)
    .then((response) => {
      if (response.status === 200) {
        res.send(response.data);
      } else {
        res.status(500).send('Spotify responded with a status ' + response.status);
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        res.status(401).send();
      } else {
        res.status(500).send('Spotify responded with a status ' + error.response.status);
      }
    });
});

/**
 * Add items to playlist
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/add-tracks-to-playlist
 */
router.post('/:playlist_id/tracks/:access_token', (req, res) => {
  const playlist_id = req.params.playlist_id;
  const access_token = req.params.access_token;
  const body = req.body;

  const headers = {
    headers: {
      "Authorization": `Bearer ${access_token}`
    }
  }

  axios.post(`${SPOTIFY_BASE}/playlists/${playlist_id}/tracks`, body, headers)
    .then((response) => {
      if (response.status === 201) {
        res.send(response.data);
      } else {
        res.status(500).send('Spotify responded with a status ' + response.status);
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        res.status(401).send();
      } else {
        res.status(500).send('Spotify responded with a status ' + error.response.status);
      }
    });
});

/**
 * Remove Playlist Items
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/remove-tracks-playlist
 */
router.delete('/:playlist_id/tracks/:access_token', (req, res) => {
  const playlist_id = req.params.playlist_id;
  const access_token = req.params.access_token;
  const body = req.body;

  const headers = {
    headers: {
      "Authorization": `Bearer ${access_token}`
    }
  }

  axios.delete(`${SPOTIFY_BASE}/playlists/${playlist_id}/tracks`, body, headers)
    .then((response) => {
      if (response.status === 200) {
        res.send(response.data);
      } else {
        res.status(500).send('Spotify responded with a status ' + response.status);
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        res.status(401).send();
      } else {
        res.status(500).send('Spotify responded with a status ' + error.response.status);
      }
    });
});

/**
 * Get User's Playlists
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-list-users-playlists
 */
router.get(`/:user_id/:access_token`, (req, res) => {
  const access_token = req.params.access_token;
  const user_id = req.params.user_id;

  const headers = {
    headers: {
      "Authorization": `Bearer ${access_token}`
    }
  }
  axios.get(`${SPOTIFY_BASE}/users/${user_id}/playlists`, headers)
    .then((response) => {
      if (response.status === 200) {
        res.send(response.data);
      } else {
        res.status(500).send('Spotify responded with a status ' + response.status);
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        res.status(401).send();
      } else {
        res.status(500).send('Spotify responded with a status ' + error.response.status);
      }
    })
});

/**
 * Create Playlist
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/create-playlist
 */
router.post('/users/:user_id/playlists/:access_token', (req, res) => {
  const access_token = req.params.access_token;
  const user_id = req.params.user_id;
  const body = req.body;

  const headers = {
    headers: {
      "Authorization": `Bearer ${access_token}`
    }
  }

  router.post(`${SPOTIFY_BASE}/users/${user_id}/playlists`, body, headers)
    .then((response) => {
      if (response.status === 201) {
        res.send(response.data);
      } else {
        res.status(500).send('Spotify responded with a status ' + response.status);
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        res.status(401).send();
      } else {
        res.status(500).send('Spotify responded with a status ' + error.response.status);
      }
    })
});

module.exports = router;