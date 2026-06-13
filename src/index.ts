import { createServer } from 'http';

// Bootstrapping the Unified Framework
console.log('🚀 Initializing Mon-VS-Ultra Unified Framework...');

// Validate critical environment variables (defined in your .env.example)
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const AR_LICENSE = process.env.AR_ENGINE_LICENSE_KEY;

if (!AR_LICENSE) {
  console.warn('⚠️ WARNING: AR_ENGINE_LICENSE_KEY is missing. Spatial rendering may operate in fallback mode.');
}

// Scaffold a basic HTTP server for health checks and container routing
const server = createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'online',
      environment: NODE_ENV,
      timestamp: new Date().toISOString(),
      modules: {
        arSpatial: AR_LICENSE ? 'authorized' : 'unauthorized',
        socialDistribution: 'standby',
      }
    }));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Mon-VS-Ultra System Endpoint Not Found\n');
});

// Start the core engine
server.listen(PORT, () => {
  console.log(`\n=========================================`);
  console.log(`✅ System Active on Port: ${PORT}`);
  console.log(`🌍 Environment: ${NODE_ENV.toUpperCase()}`);
  console.log(`=========================================\n`);
});

// Graceful shutdown logic for containerized environments
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM received. Shutting down unified pipelines gracefully...');
  server.close(() => {
    console.log('Core server closed.');
    process.exit(0);
  });
});
