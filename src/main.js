import { data } from "./data.js";
import { blogImage } from "../src/dom-content/blog-image.js";
import { blogContent } from "../src/dom-content/blogcontent.js";
import { asideContent } from "../src/dom-content/asidecontent.js";
import { renderBlogWithId } from "./helpers/renderblogwithid.js";

const blogDiv = document.getElementById("root");
const asidediv = document.getElementById("asideroot");

data.then((blogs) => {
  renderBlogWithId(blogs[0].id);
});
const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");
hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
});
//const flexr=document.getElementById("flexq");
//flexr.appendChild(blogDiv);
//flexr.appendChild(asidediv[0]);
