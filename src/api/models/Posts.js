import { query, queryText as _queryText } from '../db';

class Posts {
  static create(
    user_id,
    title,
    category,
    tag,
    post_body,
    date_created,
    location
  ) {
    const queryText = `INSERT INTO posts (user_id, title, category, tag, post_body, date_created, location)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`;
    return query(queryText, [
      user_id,
      title,
      category,
      tag,
      post_body,
      date_created,
      location
    ]);
  }

  static update(
      user_id,
      title,
      category,
      tag,
      post_body,
      date_created,
      location
  ) {
    const queryText = 'UPDATE posts SET title = $2, category = $3, tag = $4, post_body = $5, date_created = $6, location = $7 WHERE user_id = $1 RETURNING *;';
    return query(queryText, [
      user_id,
      title,
      category,
      tag,
      post_body,
      date_created,
      location
    ]);
  }

  static delete(post_id) {
    const queryText = 'DELETE FROM posts WHERE post_id = $1;';
    return query(queryText, [post_id]);
  }

  static getById(post_id) {
    const queryText = 'SELECT * FROM posts WHERE post_id = $1;';
    return query(queryText, [post_id]);
  }

  static getAll(post_id) {
    const queryText = 'SELECT * FROM posts;';
    return query(queryText);
  }
}

export default Posts;
