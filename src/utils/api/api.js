

async function getData(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch data",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json();
  return await data;
}

async function loginUser(creds) {
  const res = await fetch("/api/login", {method: "post", body: JSON.stringify(creds)})
  const data = await res.json()
  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status
    }
  }
  return data
}


export { getData, loginUser }