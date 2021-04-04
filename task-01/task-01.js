const ElementItemLi = document.querySelectorAll('.item  ');
console.log('В списке', ElementItemLi.length, 'категории.');

const elems = document.querySelectorAll('ul#categories li.item');
elems.forEach(elem => {
    console.log('Категория:',elem.firstElementChild.textContent);
    console.log('Количество элементов:',elem.lastElementChild.children.length);
});


