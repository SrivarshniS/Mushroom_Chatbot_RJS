export async function fetchGeminiResponse(prompt) {
  const res = await fetch("http://localhost:5000/api/gemini", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  const data = await res.json();
  return data.reply;
}
