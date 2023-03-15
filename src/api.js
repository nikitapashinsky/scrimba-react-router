export async function getData() {
  const response = await fetch("/api/cars");
  if (!response.ok) {
    throw {
      message: "Failed to fetch cars",
      statusText: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();
  return data.cars;
}

export async function loginUser(creds) {
  const response = await fetch("/login", {
    method: "post",
    body: JSON.stringify(creds),
  });

  const data = await response.json();

  if (!response.ok) {
    throw {
      message: data.message,
      statusText: response.statusText,
      status: response.status,
    };
  }

  return data;
}
