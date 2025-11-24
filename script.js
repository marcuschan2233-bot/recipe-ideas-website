const recipes = [
    {
        image: 'https://picsum.photos/200/300?seed=1',
        name: 'Chicken Parmesan',
        cookingTime: '30 minutes',
        difficulty: 'Easy',
        description: 'Breaded and fried chicken topped with marinara sauce and melted mozzarella cheese.'
    },
    {
        image: 'https://picsum.photos/200/300?seed=2',
        name: 'Spaghetti Bolognese',
        cookingTime: '45 minutes',
        difficulty: 'Medium',
        description: 'Classic Italian pasta dish with ground beef and tomato sauce.'
    },
    {
        image: 'https://picsum.photos/200/300?seed=3',
        name: 'Vegetable Stir-Fry',
        cookingTime: '20 minutes',
        difficulty: 'Easy',
        description: 'Quick and colorful stir-fry with mixed vegetables and your choice of protein.'
    },
    {
        image: 'https://picsum.photos/200/300?seed=4',
        name: 'Beef Tacos',
        cookingTime: '25 minutes',
        difficulty: 'Medium',
        description: 'Seasoned ground beef, lettuce, tomatoes, and cheese wrapped in a crispy taco shell.'
    },
    {
        image: 'https://picsum.photos/200/300?seed=5',
        name: 'Chicken Fajitas',
        cookingTime: '30 minutes',
        difficulty: 'Medium',
        description: 'Sliced chicken and bell peppers cooked with spices, served with warm flour tortillas.'
    },
    {
        image: 'https://picsum.photos/200/300?seed=6',
        name: 'Baked Salmon',
        cookingTime: '20 minutes',
        difficulty: 'Easy',
        description: 'Fresh salmon fillet baked with lemon, herbs, and garlic.'
    },
    {
        image: 'https://picsum.photos/200/300?seed=7',
        name: 'Creamy Tomato Soup',
        cookingTime: '40 minutes',
        difficulty: 'Easy',
        description: 'Rich and creamy soup made with fresh tomatoes, onions, and heavy cream.'
    },
    {
        image: 'https://picsum.photos/200/300?seed=8',
        name: 'Grilled Cheese Sandwich',
        cookingTime: '10 minutes',
        difficulty: 'Easy',
        description: 'Classic comfort food with melted cheese between two slices of toasted bread.'
    },
    {
        image: 'https://picsum.photos/200/300?seed=9',
        name: 'Chicken Noodle Soup',
        cookingTime: '35 minutes',
        difficulty: 'Easy',
        description: 'Hearty and comforting soup made with chicken, noodles, and vegetables.'
    },
    {
        image: 'https://picsum.photos/200/300?seed=10',
        name: 'Roasted Vegetables',
        cookingTime: '45 minutes',
        difficulty: 'Easy',
        description: 'Colorful medley of roasted vegetables tossed with olive oil and herbs.'
    },
    {
        image: 'https://picsum.photos/200/300?seed=11',
        name: 'Beef and Broccoli Stir-Fry',
        cookingTime: '25 minutes',
        difficulty: 'Medium',
        description: 'Quick and flavorful stir-fry with sliced beef, broccoli, and soy sauce.'
    },
    {
        image: 'https://picsum.photos/200/300?seed=12',
        name: 'Lemon Garlic Shrimp',
        cookingTime: '20 minutes',
        difficulty: 'Medium',
        description: 'Succulent shrimp cooked in a zesty lemon garlic butter sauce.'
    }
];

const recipeGrid = document.querySelector('.recipe-grid');
const searchInput = document.getElementById('search-input');

let filteredRecipes = recipes;

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filteredRecipes = recipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(searchTerm) || recipe.description.toLowerCase().includes(searchTerm);
    });
    renderRecipeGrid(filteredRecipes);
});

function renderRecipeGrid(recipes) {
    recipeGrid.innerHTML = '';
    recipes.forEach((recipe) => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.image;
        recipeCard.appendChild(recipeImage);

        const content = document.createElement('div');
        content.classList.add('content');

        const recipeName = document.createElement('h2');
        recipeName.textContent = recipe.name;
        content.appendChild(recipeName);

        const cookingTime = document.createElement('p');
        cookingTime.classList.add('cooking-time');
        cookingTime.textContent = `Cooking Time: ${recipe.cookingTime}`;
        content.appendChild(cookingTime);

        const difficulty = document.createElement('p');
        difficulty.classList.add('difficulty');
        difficulty.textContent = `Difficulty: ${recipe.difficulty}`;
        content.appendChild(difficulty);

        const description = document.createElement('p');
        description.textContent = recipe.description;
        content.appendChild(description);

        recipeCard.appendChild(content);
        recipeGrid.appendChild(recipeCard);
    });
}

renderRecipeGrid(recipes);
