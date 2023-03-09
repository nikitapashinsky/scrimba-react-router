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
