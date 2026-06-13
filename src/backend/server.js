const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Heartbeat system status check
app.get('/api/status', (req, res) => {
  res.json({
    status: "ONLINE",
    engine: "Mon-VS-Ultra-Core",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Mon-VS-Ultra Engine roaring on port ${PORT}`);
});
