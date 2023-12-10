const RedisClient = require("./redis-client");

async function demo() {
  const result = RedisClient.create('God', 'damn it!');
  console.log(result);
};

demo();
