async function saveSite (site, ctx) {
  await ctx.servers.website.put('/')
}

export const site = {
  saveSite
}
