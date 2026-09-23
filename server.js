const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve dalla root — stessa posizione usata da Cloudflare Pages
app.use(express.static(path.join(__dirname)));

// Fallback SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n  ✅  BazzoTech Labs running at http://localhost:${PORT}\n`);
});
