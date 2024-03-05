const countItems = document.querySelectorAll('.item > h2');

console.log(`Numbers of categories: ${countItems.length}`);

const categoryHeadings = document.querySelectorAll(' h2');

console.log(categoryHeadings);

categoryHeadings.forEach(function (title) {
  const titleName = title.textContent;
  console.log(titleName);
  const categoriesNames = title.parentElement.querySelectorAll('ul > li');
  console.log(`Elements ${categoriesNames.length}`);
});
