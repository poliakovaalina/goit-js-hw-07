const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
const list = document.getElementById('ingredients')
const item = ingredients.forEach(element => {
      const liIngredients = document.createElement('li')
      liIngredients.textContent = element
       list.append(liIngredients)
  })
 