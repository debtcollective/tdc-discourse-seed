const { authGet, authPost, authPut, authDelete } = require('./api');

module.exports = {
  get: id => authGet(`/t/${id}.json`)(),
  update: t => authPut(`/t/${t.slug}/${t.id}.json`)(t),
  getPostId: ({ post_stream: { posts: [{ id }] } }) => id,
};