const server = require('./api/server.js');

const PORT = process.env.PORT || 3333;
server.listen(PORT, () => {
  console.log(`\n=== Magic Happening on port ${PORT} ===\n`);
});
