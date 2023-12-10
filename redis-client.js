const client = require("./redis-config");

class RedisClient {

  static async retrieve(key) {
    try {
      console.info(`RedisClient.retrieve: ${JSON.stringify(key)}`);
      return await client.get(key);
    } catch (e) {
      console.error(`RedisClient.retrieve: ${JSON.stringify(e)}`);
      return null;
    }
  }
  static async create(key, value) {
    try {
      console.info(`RedisClient.create: ${JSON.stringify(key)}, ${JSON.stringify(value)}`);
      await client.set(key, value);
    } catch (e) {
      console.error(`RedisClient.create: ${JSON.stringify(e)}`);
      return null;
    }
  }
}

module.exports = RedisClient;
