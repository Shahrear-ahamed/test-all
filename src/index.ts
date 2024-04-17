const favoriteFruits: string[] = ['apple', 'strawberry', 'orange']

function addFruit(fruit: string) {
  favoriteFruits.push(fruit)
}

addFruit('banana')

console.log(favoriteFruits) // ['apple', 'strawberry', 'orange', 'banana']
