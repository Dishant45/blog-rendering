import { data } from "../data.js";

export const findBlogWithId = async (blogId) => {
  let blogs = await data;
  console.log(blogs);
  return blogs.find((blog) => blog.id == blogId);
};
