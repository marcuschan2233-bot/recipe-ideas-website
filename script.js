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
        image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400&h=300&fit=crop',
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
    },
    {
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
        name: 'Caesar Salad',
        cookingTime: '15 minutes',
        difficulty: 'Easy',
        description: 'Crisp romaine lettuce with parmesan, croutons, and creamy Caesar dressing.'
    },
    {
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop',
        name: 'Margherita Pizza',
        cookingTime: '25 minutes',
        difficulty: 'Medium',
        description: 'Classic pizza with fresh mozzarella, tomato sauce, and basil leaves.'
    },
    {
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
        name: 'Mushroom Risotto',
        cookingTime: '40 minutes',
        difficulty: 'Hard',
        description: 'Creamy Italian rice dish with mushrooms, white wine, and parmesan.'
    },
    {
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
        name: 'Classic Burger',
        cookingTime: '20 minutes',
        difficulty: 'Easy',
        description: 'Juicy beef patty with lettuce, tomato, cheese, and special sauce.'
    },
    {
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
        name: 'Pad Thai',
        cookingTime: '30 minutes',
        difficulty: 'Medium',
        description: 'Thai stir-fried rice noodles with shrimp, peanuts, and tangy sauce.'
    },
    {
        image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop',
        name: 'BBQ Ribs',
        cookingTime: '2 hours',
        difficulty: 'Hard',
        description: 'Tender pork ribs slow-cooked with smoky BBQ sauce.'
    },
    {
        image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop',
        name: 'Chicken Curry',
        cookingTime: '45 minutes',
        difficulty: 'Medium',
        description: 'Aromatic Indian curry with tender chicken in a spiced sauce.'
    },
    {
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop',
        name: 'Greek Salad',
        cookingTime: '10 minutes',
        difficulty: 'Easy',
        description: 'Fresh vegetables, feta cheese, olives, and olive oil dressing.'
    },
    {
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop',
        name: 'French Onion Soup',
        cookingTime: '1 hour',
        difficulty: 'Medium',
        description: 'Rich beef broth with caramelized onions and melted cheese on top.'
    },
    {
        image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&h=300&fit=crop',
        name: 'Sushi Rolls',
        cookingTime: '50 minutes',
        difficulty: 'Hard',
        description: 'Fresh sushi rolls with fish, vegetables, and seasoned rice.'
    },
    {
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=300&fit=crop',
        name: 'Lasagna',
        cookingTime: '1 hour 30 minutes',
        difficulty: 'Hard',
        description: 'Layered pasta with meat sauce, ricotta, and mozzarella cheese.'
    },
    {
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop',
        name: 'Fish Tacos',
        cookingTime: '25 minutes',
        difficulty: 'Easy',
        description: 'Crispy fish with cabbage slaw and lime crema in soft tortillas.'
    },
    {
        image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
        name: 'Ramen Bowl',
        cookingTime: '40 minutes',
        difficulty: 'Medium',
        description: 'Japanese noodle soup with pork, egg, and flavorful broth.'
    },
    {
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
        name: 'Caprese Salad',
        cookingTime: '10 minutes',
        difficulty: 'Easy',
        description: 'Fresh mozzarella, tomatoes, and basil with balsamic glaze.'
    },
    {
        image: 'https://images.unsplash.com/photo-1603073163308-9fa2f49c8d59?w=400&h=300&fit=crop',
        name: 'Beef Wellington',
        cookingTime: '2 hours',
        difficulty: 'Hard',
        description: 'Tender beef tenderloin wrapped in puff pastry with mushroom duxelles.'
    },
    {
        image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400&h=300&fit=crop',
        name: 'Chicken Tikka Masala',
        cookingTime: '50 minutes',
        difficulty: 'Medium',
        description: 'Marinated chicken in creamy tomato-based curry sauce.'
    },
    {
        image: 'https://images.unsplash.com/photo-1619221882931-a72ef451a9bc?w=400&h=300&fit=crop',
        name: 'Lobster Roll',
        cookingTime: '20 minutes',
        difficulty: 'Easy',
        description: 'Fresh lobster meat with mayo on a buttered toasted bun.'
    },
    {
        image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop',
        name: 'Eggs Benedict',
        cookingTime: '25 minutes',
        difficulty: 'Hard',
        description: 'Poached eggs on English muffin with Canadian bacon and hollandaise.'
    },
    {
        image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=300&fit=crop',
        name: 'Beef Stroganoff',
        cookingTime: '40 minutes',
        difficulty: 'Medium',
        description: 'Tender beef in creamy mushroom sauce served over egg noodles.'
    },
    {
        image: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6e5d6?w=400&h=300&fit=crop',
        name: 'Bibimbap',
        cookingTime: '35 minutes',
        difficulty: 'Medium',
        description: 'Korean rice bowl with vegetables, egg, and spicy gochujang sauce.'
    },
    {
        image: 'https://images.unsplash.com/photo-1598511757337-fe2cafc31ba0?w=400&h=300&fit=crop',
        name: 'Pulled Pork Sandwich',
        cookingTime: '4 hours',
        difficulty: 'Medium',
        description: 'Slow-cooked shredded pork with BBQ sauce on a soft bun.'
    },
    {
        image: 'https://images.unsplash.com/photo-1559058922-4c2276b1ca2c?w=400&h=300&fit=crop',
        name: 'Falafel Wrap',
        cookingTime: '30 minutes',
        difficulty: 'Easy',
        description: 'Crispy chickpea fritters with tahini sauce in pita bread.'
    },
    {
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
        name: 'Chicken Alfredo',
        cookingTime: '30 minutes',
        difficulty: 'Easy',
        description: 'Fettuccine pasta with grilled chicken in creamy alfredo sauce.'
    },
    {
        image: 'https://images.unsplash.com/photo-1534938665420-4193effeacc4?w=400&h=300&fit=crop',
        name: 'Pho',
        cookingTime: '2 hours',
        difficulty: 'Hard',
        description: 'Vietnamese noodle soup with beef, herbs, and aromatic broth.'
    },
    {
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=400&h=300&fit=crop',
        name: 'Carbonara',
        cookingTime: '25 minutes',
        difficulty: 'Medium',
        description: 'Pasta with crispy bacon, egg, parmesan, and black pepper.'
    },
    {
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
        name: 'Stuffed Bell Peppers',
        cookingTime: '1 hour',
        difficulty: 'Medium',
        description: 'Bell peppers filled with ground beef, rice, and tomato sauce.'
    },
    {
        image: 'https://images.unsplash.com/photo-1572441713132-c542fc4fe282?w=400&h=300&fit=crop',
        name: 'Shakshuka',
        cookingTime: '30 minutes',
        difficulty: 'Easy',
        description: 'Poached eggs in spiced tomato and pepper sauce with herbs.'
    },
    {
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop',
        name: 'Lamb Chops',
        cookingTime: '20 minutes',
        difficulty: 'Medium',
        description: 'Pan-seared lamb chops with rosemary and garlic.'
    },
    {
        image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=300&fit=crop',
        name: 'Paella',
        cookingTime: '1 hour',
        difficulty: 'Hard',
        description: 'Spanish rice dish with seafood, chicken, and saffron.'
    },
    {
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop',
        name: 'Enchiladas',
        cookingTime: '45 minutes',
        difficulty: 'Medium',
        description: 'Rolled tortillas filled with chicken, topped with sauce and cheese.'
    },
    {
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
        name: 'Bruschetta',
        cookingTime: '15 minutes',
        difficulty: 'Easy',
        description: 'Toasted bread topped with fresh tomatoes, basil, and olive oil.'
    },
    {
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop',
        name: 'Chili Con Carne',
        cookingTime: '1 hour 30 minutes',
        difficulty: 'Easy',
        description: 'Hearty beef chili with beans, tomatoes, and spices.'
    },
    {
        image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=400&h=300&fit=crop',
        name: 'Pesto Pasta',
        cookingTime: '20 minutes',
        difficulty: 'Easy',
        description: 'Pasta tossed with fresh basil pesto and parmesan cheese.'
    },
    {
        image: 'https://images.unsplash.com/photo-1613564834361-9436948817d1?w=400&h=300&fit=crop',
        name: 'Butter Chicken',
        cookingTime: '50 minutes',
        difficulty: 'Medium',
        description: 'Indian chicken curry in rich, creamy tomato butter sauce.'
    },
    {
        image: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=400&h=300&fit=crop',
        name: 'Quesadilla',
        cookingTime: '15 minutes',
        difficulty: 'Easy',
        description: 'Grilled tortilla filled with melted cheese and your choice of fillings.'
    },
    {
        image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop',
        name: 'Chicken Wings',
        cookingTime: '40 minutes',
        difficulty: 'Easy',
        description: 'Crispy baked or fried wings with buffalo or BBQ sauce.'
    },
    {
        image: 'https://images.unsplash.com/photo-1623428454614-abaf00244e52?w=400&h=300&fit=crop',
        name: 'Gnocchi',
        cookingTime: '35 minutes',
        difficulty: 'Medium',
        description: 'Soft potato dumplings in butter sage sauce or tomato sauce.'
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
