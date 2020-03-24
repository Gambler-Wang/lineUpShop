// 开发环境 http://172.16.98.44:8899
// 测试环境 http://172.16.97.110:8899
// 正式环境 http://172.16.97.202:8899
const root = '';
export const IS_MOCK = false;
export const API_BASE_URL = IS_MOCK ? '/mock/' : (process.env.NODE_ENV === 'development' ? '/healthlog' + root : 'http://www.xhuachina.com/healthlog');
export const TOKEN_KEY = 'X-Token';
export const HISTORY_KEY = 'History-Key';
