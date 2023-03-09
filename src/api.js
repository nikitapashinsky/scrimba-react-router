export async function getData() {
  const response = await fetch("/api/cars");
  const data = await response.json();
  return data.cars;
}
