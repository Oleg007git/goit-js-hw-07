const countItems = document.querySelectorAll('.item');
console.log(`Numbers of categories: ${countItems.length}`);
const allTitle = document.querySelectorAll('h2');
console.log(allTitle);
allTitle.forEach(function (title) {
  const titleName = title.textContent;
  console.log(titleName);
  const categoriesNames = title.parentElement.querySelectorAll('ul > li');
  console.log(`Elements ${categoriesNames.length}`);
});
