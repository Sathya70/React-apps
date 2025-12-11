const BASE_URL = "http://localhost:8080";

// STUDENT LOGIN
export async function studentLogin(email, regNo, password) {
  const response = await fetch(`${BASE_URL}/api/students/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, regNo, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return await response.json();
}

// GET MARKS BY REG NO
export async function getMarksByRegNo(regNo) {
  const response = await fetch(`${BASE_URL}/api/marks/regno/${regNo}`);

  if (!response.ok) {
    throw new Error("Failed to fetch marks");
  }

  const data = await response.json();
  console.log("MARKS RESPONSE:", data);
  return data;
}
