import Post from '../models/post.model';
console.log('post controller');

function load(params) {
  return Post.get(params.id);
}

function get(req, res) {
  console.log('post_get');
  return res.json(req.post);
}

function create(params) {
  const post = new Post({
    title: params.data.title,
    content: params.data.content
  });
  return post.save();
}

function update(params) {
  return load(params).then(post => {
    const tmp = post;
    post.title = params.data.title;
    post.content = params.data.content;
    return post.save()
  });
}

function list(params) {
  console.log('post_list');
  const { limit = 50, skip = 0 } = params;
  return Post.list({ limit, skip })
}

function remove(params) {
  return load(params).then(post => post.remove());
}

export default { load, get, create, update, list, remove };
