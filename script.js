const recipes = [
    {
        image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&h=300&fit=crop',
        name: 'Chicken Parmesan',
        cookingTime: '30 minutes',
        difficulty: 'Easy',
        description: 'Breaded and fried chicken topped with marinara sauce and melted mozzarella cheese.'
    },
    {
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
        name: 'Spaghetti Bolognese',
        cookingTime: '45 minutes',
        difficulty: 'Medium',
        description: 'Classic Italian pasta dish with ground beef and tomato sauce.'
    },
    {
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop',
        name: 'Vegetable Stir-Fry',
        cookingTime: '20 minutes',
        difficulty: 'Easy',
        description: 'Quick and colorful stir-fry with mixed vegetables and your choice of protein.'
    },
    {
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop',
        name: 'Beef Tacos',
        cookingTime: '25 minutes',
        difficulty: 'Medium',
        description: 'Seasoned ground beef, lettuce, tomatoes, and cheese wrapped in a crispy taco shell.'
    },
    {
        image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335e90f?w=400&h=300&fit=crop',
        name: 'Chicken Fajitas',
        cookingTime: '30 minutes',
        difficulty: 'Medium',
        description: 'Sliced chicken and bell peppers cooked with spices, served with warm flour tortillas.'
    },
    {
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
        name: 'Baked Salmon',
        cookingTime: '20 minutes',
        difficulty: 'Easy',
        description: 'Fresh salmon fillet baked with lemon, herbs, and garlic.'
    },
    {
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
        name: 'Creamy Tomato Soup',
        cookingTime: '40 minutes',
        difficulty: 'Easy',
        description: 'Rich and creamy soup made with fresh tomatoes, onions, and heavy cream.'
    },
    {
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop',
        name: 'Grilled Cheese Sandwich',
        cookingTime: '10 minutes',
        difficulty: 'Easy',
        description: 'Classic comfort food with melted cheese between two slices of toasted bread.'
    },
    {
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
        name: 'Chicken Noodle Soup',
        cookingTime: '35 minutes',
        difficulty: 'Easy',
        description: 'Hearty and comforting soup made with chicken, noodles, and vegetables.'
    },
    {
        image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=300&fit=crop',
        name: 'Roasted Vegetables',
        cookingTime: '45 minutes',
        difficulty: 'Easy',
        description: 'Colorful medley of roasted vegetables tossed with olive oil and herbs.'
    },
    {
        image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop',
        name: 'Beef and Broccoli Stir-Fry',
        cookingTime: '25 minutes',
        difficulty: 'Medium',
        description: 'Quick and flavorful stir-fry with sliced beef, broccoli, and soy sauce.'
    },
    {
        image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop',
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
