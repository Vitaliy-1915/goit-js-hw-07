const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const element = ingredients.map(ingredient => {
  const listElement = document.createElement('li');
  listElement.textContent = ingredient;
  //console.log(listElement);
  return listElement;
});
//console.log(element);


const productListElement = document.querySelector('#ingredients');
productListElement.append(...element);

