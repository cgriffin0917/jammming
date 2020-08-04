  let accessToken = ''
  const clientId = 'c9fcb26077984d88ba4765604551cbeb';
  const redirectUri = 'http://localhost:3000/';

  const Spotify = {
      getAccessToken = () => {
        if (accessToken) {
          return accessToken;
        }

        // check for an access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = windows.location.href.match(/expires_in=([^&]*/));

        if (accessTokenMatch && expiresInMatch) {
          accessToken = accessTokenMatch[1]
          const expiresIn = Number(expiresInMatch[1])

          window.setTimeout(() => accessToken = '', expiresIn * 1000);
          window.history.pushState('Access Token', null, '/
          return accessToken;
        } else {
          const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}
          &response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
          window.location = accessUrl }
      }
  }

  export default Spotify;
