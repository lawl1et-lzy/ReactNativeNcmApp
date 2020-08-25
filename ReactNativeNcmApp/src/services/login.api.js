import config from './Config';
import qs from 'qs';
export default class Login {
  // 密码登录
  static async loginWithPassword({
    phone = 13052028437,
    password = '~Museum24',
  } = {}) {
    try {
      const queryParams = qs.stringify({phone, password});
      let response = await fetch(
        `${config.baseUrl}/login/cellphone?${queryParams}`,
      );
      return await response.json();
    } catch (error) {}
  }
}
