export async function signinRequest(credentials) {
  const response = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: credentials.username,
      password: credentials.password,
    }),
    credentials: 'include',
  });

  if (response.status !== 200) {
    const json = await response.json();
    throw Error(json.message);
  }

  return {
    username: credentials.username,
  };
}

export async function signoutRequest() {
  const response = await fetch('http://localhost:3001/logout', {
    method: 'POST',
    credentials: 'include',
  });

  if (response.status !== 200) {
    const json = await response.json();
    throw Error(json.message);
  }

  return;
}

export async function meRequest() {
  const response = await fetch('http://localhost:3001/me', {
    credentials: 'include',
  });

  const json = await response.json();

  if (response.status !== 200) {
    throw Error(json.message);
  }

  return json;
}
