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
async function getOssPolicy ({dir}, ctx) {
  const policy = await ctx.servers.image.get(`/api/oss/policy`)
  return policy.data
}

export default {
  getOssPolicy
}
