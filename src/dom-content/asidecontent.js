import { renderBlogWithId } from "../helpers/renderblogwithid.js";
export const asideContent = (links) => {
  const ul = document.createElement("ul");
  ul.classList.add("aside-ul");

  links.forEach((element) => {
    let li = document.createElement("li");
    li.innerHTML = element.title;
    li.id = element.id;
    li.addEventListener("click", () => {
      renderBlogWithId(element.id);
    });
    ul.appendChild(li);
  });

  return ul;
};
