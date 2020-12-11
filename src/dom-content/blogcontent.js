export const blogContent = (title, text) => {
  const div1 = document.createElement("div");
  div1.classList.add("blog-content");
  const h = document.createElement("h1");
  const p = document.createElement("p");
  h.innerHTML = title;
  p.innerHTML = text;
  div1.appendChild(h);
  div1.appendChild(p);
  return div1;
  return blogContent;
};
