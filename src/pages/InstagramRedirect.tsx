import { useEffect } from 'react';

export default function InstagramRedirect() {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');

    if (code) {
      fetch('https://eoftnlbtn72xg09.m.pipedream.net', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('Access Token:', data.access_token);
          // You can store token in localStorage, or redirect to dashboard
        })
        .catch((err) => {
          console.error('Token exchange failed:', err);
        });
    }
  }, []);

  return <p>Logging you in with Instagram...</p>;
}
