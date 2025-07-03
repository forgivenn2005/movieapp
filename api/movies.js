export default async function handler(req, res) {
  const { title } = req.query;
  const apiKey = process.env.MOVIE_API_KEY; // No VITE_ prefix here

  if (!apiKey) {
    return res.status(500).json({ error: "Missing API Key" });
  }

  try {
    const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movie data" });
  }
}
