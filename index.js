const RedisClient = require("./redis-client");

async function demo() {
  await RedisClient.create('Car', 'Tesla S3X Models');
  const result = await RedisClient.retrieve('Car');
  console.log(result);
};

demo();
