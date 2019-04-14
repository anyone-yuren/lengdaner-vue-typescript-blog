const config = {
  oauth_uri: 'https://github.com/login/oauth/authorize',
  redirect_uri: 'http://www.ityouknow.top/login', // 请修改成你的信息
  client_id: '6d7e75e15622dc214c11', // 请修改成你的信息
  client_secret: '4f4821b8842b8feb38e39975b653f7f122f4fb71' // 请修改成你的信息
};

// 本地开发环境下 （如下的信息在本地开发可以当测试用）
if (process.env.NODE_ENV === 'development') {
  config.redirect_uri = 'http://localhost:3001/login';
  config.client_id = '6d7e75e15622dc214c11';
  config.client_secret = '4f4821b8842b8feb38e39975b653f7f122f4fb71';
}
export default config;
