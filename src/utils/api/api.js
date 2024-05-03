

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

export { getData }