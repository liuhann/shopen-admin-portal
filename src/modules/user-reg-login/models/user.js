/**
 * 数据存取方法以纯函数形式编写
 *
 * 这个纯函数接受2个参数
 * 1 params 调用参数。
 * 2 ctx 请求上下文信息。
 *
 * @param params
 * @param ctx
 * @returns {Promise.<*>}
 */
async function login({email, pwd}, ctx) {
  const packages = await ctx.servers.theme.post(`/open/user/login`, {
    email,
    pwd
  })
  return packages
}

async function register({name, email, pwd}, ctx) {
  const packages = await ctx.servers.theme.post(`/open/user/login`)
  return packages
}

export default {
  login,
  register
}
