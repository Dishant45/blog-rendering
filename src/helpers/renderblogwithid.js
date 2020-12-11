import { findBlogWithId } from "./findblogwithid.js";
import { blogImage } from "../dom-content/blog-image.js";
import { blogContent } from "../dom-content/blogcontent.js";
import { asideContent } from "../dom-content/asidecontent.js";
export const renderBlogWithId = async (blogId) => {
  const blogObj = await findBlogWithId(blogId);
  console.log(blogObj);
  const rootDiv = document.getElementById("root");
  const asideDiv = document.getElementById("asideroot");
  rootDiv.innerHTML = "";
  rootDiv.appendChild(blogImage(blogObj.imageUrl));
  rootDiv.appendChild(blogContent(blogObj.title, blogObj.content));
  asideDiv.innerHTML = "";
  asideDiv.appendChild(asideContent(blogObj.links));
};
