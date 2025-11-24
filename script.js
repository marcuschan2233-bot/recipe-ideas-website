const recipes = [
    {
        image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&h=300&fit=crop',
        name: 'Chicken Parmesan',
        cookingTime: '30 minutes',
        difficulty: 'Easy',
        description: 'Breaded and fried chicken topped with marinara sauce and melted mozzarella cheese.',
        instructions: [
            'Pound chicken breasts to even thickness and season with salt and pepper',
            'Set up breading station: flour, beaten eggs, and breadcrumb mixture',
            'Coat chicken in flour, dip in egg, then coat with breadcrumbs',
            'Heat oil in a large skillet and fry chicken until golden brown (3-4 minutes per side)',
            'Place fried chicken in a baking dish, top with marinara sauce and mozzarella',
            'Bake at 400°F for 15 minutes until cheese is melted and bubbly',
            'Garnish with fresh basil and serve with pasta'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=400&h=300&fit=crop',
        name: 'Spaghetti Bolognese',
        cookingTime: '45 minutes',
        difficulty: 'Medium',
        description: 'Classic Italian pasta dish with ground beef and tomato sauce.',
        instructions: [
            'Heat olive oil in a large pan and sauté diced onions, carrots, and celery',
            'Add ground beef and cook until browned, breaking it up with a spoon',
            'Stir in tomato paste and cook for 2 minutes',
            'Add crushed tomatoes, beef broth, and Italian herbs',
            'Simmer on low heat for 30 minutes, stirring occasionally',
            'Meanwhile, cook spaghetti according to package directions',
            'Toss pasta with sauce and serve with grated parmesan'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop',
        name: 'Vegetable Stir-Fry',
        cookingTime: '20 minutes',
        difficulty: 'Easy',
        description: 'Quick and colorful stir-fry with mixed vegetables and your choice of protein.',
        instructions: [
            'Prepare all vegetables: slice bell peppers, broccoli, carrots, and snap peas',
            'Heat wok or large skillet over high heat with vegetable oil',
            'Add protein (chicken, tofu, or shrimp) and cook until done, then set aside',
            'Stir-fry harder vegetables first (carrots, broccoli) for 2-3 minutes',
            'Add softer vegetables (peppers, snap peas) and stir-fry for 2 minutes',
            'Return protein to pan and add soy sauce, garlic, and ginger',
            'Toss everything together and serve over rice or noodles'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop',
        name: 'Beef Tacos',
        cookingTime: '25 minutes',
        difficulty: 'Medium',
        description: 'Seasoned ground beef, lettuce, tomatoes, and cheese wrapped in a crispy taco shell.',
        instructions: [
            'Brown ground beef in a skillet over medium-high heat',
            'Drain excess fat and add taco seasoning with water',
            'Simmer for 5-7 minutes until sauce thickens',
            'Warm taco shells in the oven according to package directions',
            'Prepare toppings: shred lettuce, dice tomatoes, grate cheese',
            'Fill each taco shell with seasoned beef',
            'Top with lettuce, tomatoes, cheese, sour cream, and salsa'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1605333396915-3c5c8f95000f?w=400&h=300&fit=crop',
        name: 'Chicken Fajitas',
        cookingTime: '30 minutes',
        difficulty: 'Medium',
        description: 'Sliced chicken and bell peppers cooked with spices, served with warm flour tortillas.',
        instructions: [
            'Slice chicken breasts into thin strips and marinate with lime juice and fajita seasoning',
            'Slice bell peppers and onions into strips',
            'Heat oil in a large skillet over high heat',
            'Cook chicken strips until golden and cooked through, then set aside',
            'Sauté peppers and onions until tender-crisp',
            'Return chicken to pan and toss everything together',
            'Serve sizzling hot with warm tortillas, guacamole, and sour cream'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=400&h=300&fit=crop',
        name: 'Baked Salmon',
        cookingTime: '20 minutes',
        difficulty: 'Easy',
        description: 'Fresh salmon fillet baked with lemon, herbs, and garlic.',
        instructions: [
            'Preheat oven to 400°F and line a baking sheet with parchment paper',
            'Place salmon fillet on the prepared sheet, skin-side down',
            'Brush with olive oil and season with salt, pepper, and garlic',
            'Top with lemon slices and fresh herbs (dill or parsley)',
            'Bake for 12-15 minutes until salmon flakes easily with a fork',
            'Let rest for 2 minutes before serving',
            'Serve with roasted vegetables or rice'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
        name: 'Creamy Tomato Soup',
        cookingTime: '40 minutes',
        difficulty: 'Easy',
        description: 'Rich and creamy soup made with fresh tomatoes, onions, and heavy cream.',
        instructions: [
            'Sauté diced onions and garlic in butter until soft',
            'Add fresh tomatoes (or canned), vegetable broth, and sugar',
            'Simmer for 20 minutes until tomatoes break down',
            'Blend soup until smooth using an immersion blender',
            'Stir in heavy cream and fresh basil',
            'Season with salt and pepper to taste',
            'Serve hot with grilled cheese sandwiches or croutons'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=400&h=300&fit=crop',
        name: 'Grilled Cheese Sandwich',
        cookingTime: '10 minutes',
        difficulty: 'Easy',
        description: 'Classic comfort food with melted cheese between two slices of toasted bread.',
        instructions: [
            'Butter one side of each bread slice generously',
            'Place one slice butter-side down in a heated skillet',
            'Add 2-3 slices of your favorite cheese',
            'Top with second slice of bread, butter-side up',
            'Cook over medium heat for 3-4 minutes until golden brown',
            'Flip and cook other side until cheese is melted',
            'Cut diagonally and serve immediately'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1588566565463-180a5f3c822e?w=400&h=300&fit=crop',
        name: 'Chicken Noodle Soup',
        cookingTime: '35 minutes',
        difficulty: 'Easy',
        description: 'Hearty and comforting soup made with chicken, noodles, and vegetables.',
        instructions: [
            'Sauté diced onions, carrots, and celery in olive oil',
            'Add chicken broth and bring to a boil',
            'Add diced cooked chicken and egg noodles',
            'Simmer for 10-12 minutes until noodles are tender',
            'Season with thyme, parsley, salt, and pepper',
            'Add a squeeze of lemon juice for brightness',
            'Serve hot with crusty bread'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop',
        name: 'Roasted Vegetables',
        cookingTime: '45 minutes',
        difficulty: 'Easy',
        description: 'Colorful medley of roasted vegetables tossed with olive oil and herbs.',
        instructions: [
            'Preheat oven to 425°F',
            'Chop vegetables (carrots, bell peppers, zucchini, onions) into similar-sized pieces',
            'Toss vegetables with olive oil, salt, pepper, and herbs',
            'Spread in a single layer on baking sheets',
            'Roast for 35-40 minutes, stirring halfway through',
            'Vegetables should be tender and caramelized',
            'Garnish with fresh herbs and serve as a side dish'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop',
        name: 'Beef and Broccoli Stir-Fry',
        cookingTime: '25 minutes',
        difficulty: 'Medium',
        description: 'Quick and flavorful stir-fry with sliced beef, broccoli, and soy sauce.',
        instructions: [
            'Slice beef thinly against the grain and marinate in soy sauce and cornstarch',
            'Blanch broccoli florets in boiling water for 2 minutes, then drain',
            'Heat wok with oil over high heat',
            'Stir-fry beef until browned, then set aside',
            'Add garlic and ginger to wok, then add broccoli',
            'Return beef to wok and add sauce (soy sauce, oyster sauce, sugar)',
            'Toss until everything is coated and serve over rice'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1633504581786-6e5c0e7c6f6c?w=400&h=300&fit=crop',
        name: 'Lemon Garlic Shrimp',
        cookingTime: '20 minutes',
        difficulty: 'Medium',
        description: 'Succulent shrimp cooked in a zesty lemon garlic butter sauce.',
        instructions: [
            'Pat shrimp dry and season with salt and pepper',
            'Heat butter in a large skillet over medium-high heat',
            'Add minced garlic and sauté for 30 seconds',
            'Add shrimp and cook 2-3 minutes per side until pink',
            'Squeeze fresh lemon juice over shrimp',
            'Add white wine or chicken broth and let sauce reduce',
            'Garnish with parsley and serve with pasta or crusty bread'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
        name: 'Caesar Salad',
        cookingTime: '15 minutes',
        difficulty: 'Easy',
        description: 'Crisp romaine lettuce with parmesan, croutons, and creamy Caesar dressing.',
        instructions: [
            'Wash and chop romaine lettuce into bite-sized pieces',
            'Make dressing: blend mayo, garlic, lemon juice, Worcestershire, and anchovies',
            'Toss lettuce with Caesar dressing',
            'Add freshly grated parmesan cheese',
            'Top with crunchy croutons',
            'Optional: add grilled chicken for a complete meal',
            'Serve immediately while lettuce is crisp'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
        name: 'Margherita Pizza',
        cookingTime: '25 minutes',
        difficulty: 'Medium',
        description: 'Classic pizza with fresh mozzarella, tomato sauce, and basil leaves.',
        instructions: [
            'Preheat oven to 475°F with pizza stone inside',
            'Roll out pizza dough on floured surface',
            'Spread thin layer of tomato sauce on dough',
            'Tear fresh mozzarella and distribute evenly',
            'Drizzle with olive oil and season with salt',
            'Transfer to hot pizza stone and bake 10-12 minutes',
            'Top with fresh basil leaves immediately after removing from oven'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1476124369491-c311b27fe1c5?w=400&h=300&fit=crop',
        name: 'Mushroom Risotto',
        cookingTime: '40 minutes',
        difficulty: 'Hard',
        description: 'Creamy Italian rice dish with mushrooms, white wine, and parmesan.',
        instructions: [
            'Warm chicken or vegetable broth in a separate pot',
            'Sauté sliced mushrooms in butter until golden, set aside',
            'In same pan, sauté onions until translucent',
            'Add Arborio rice and toast for 2 minutes',
            'Add white wine and stir until absorbed',
            'Add broth one ladle at a time, stirring constantly',
            'After 20 minutes, stir in mushrooms, butter, and parmesan'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
        name: 'Classic Burger',
        cookingTime: '20 minutes',
        difficulty: 'Easy',
        description: 'Juicy beef patty with lettuce, tomato, cheese, and special sauce.',
        instructions: [
            'Form ground beef into patties, season generously with salt and pepper',
            'Heat grill or skillet to medium-high heat',
            'Cook burgers 4-5 minutes per side for medium',
            'Add cheese in last minute of cooking',
            'Toast burger buns on the grill',
            'Spread sauce on buns, add lettuce and tomato',
            'Place burger patty on bun and serve with fries'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop',
        name: 'Pad Thai',
        cookingTime: '30 minutes',
        difficulty: 'Medium',
        description: 'Thai stir-fried rice noodles with shrimp, peanuts, and tangy sauce.',
        instructions: [
            'Soak rice noodles in warm water for 20 minutes',
            'Prepare sauce: mix fish sauce, tamarind, sugar, and lime juice',
            'Heat wok with oil and scramble eggs, set aside',
            'Stir-fry shrimp until cooked, set aside',
            'Add drained noodles to wok with sauce and toss',
            'Add eggs, shrimp, bean sprouts, and green onions',
            'Serve topped with crushed peanuts and lime wedges'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
        name: 'BBQ Ribs',
        cookingTime: '2 hours',
        difficulty: 'Hard',
        description: 'Tender pork ribs slow-cooked with smoky BBQ sauce.',
        instructions: [
            'Remove membrane from back of ribs',
            'Rub ribs with dry rub (paprika, brown sugar, garlic powder)',
            'Wrap ribs in foil and bake at 275°F for 2 hours',
            'Remove from oven and unwrap carefully',
            'Brush generously with BBQ sauce',
            'Broil or grill for 5 minutes to caramelize sauce',
            'Let rest 5 minutes, then cut between bones and serve'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=300&fit=crop',
        name: 'Chicken Curry',
        cookingTime: '45 minutes',
        difficulty: 'Medium',
        description: 'Aromatic Indian curry with tender chicken in a spiced sauce.',
        instructions: [
            'Cut chicken into bite-sized pieces',
            'Sauté onions, garlic, and ginger until fragrant',
            'Add curry powder, turmeric, and cumin',
            'Add chicken and cook until browned',
            'Pour in coconut milk and tomatoes',
            'Simmer for 20 minutes until chicken is tender',
            'Garnish with cilantro and serve with rice or naan'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
        name: 'Greek Salad',
        cookingTime: '10 minutes',
        difficulty: 'Easy',
        description: 'Fresh vegetables, feta cheese, olives, and olive oil dressing.',
        instructions: [
            'Chop tomatoes, cucumbers, and red onions',
            'Add Kalamata olives and cubed feta cheese',
            'Drizzle with extra virgin olive oil',
            'Add red wine vinegar and dried oregano',
            'Season with salt and pepper',
            'Toss gently to combine',
            'Serve immediately as a side or light meal'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
        name: 'French Onion Soup',
        cookingTime: '1 hour',
        difficulty: 'Medium',
        description: 'Rich beef broth with caramelized onions and melted cheese on top.',
        instructions: [
            'Slice onions thinly and caramelize in butter (30-40 minutes)',
            'Add flour and stir for 1 minute',
            'Pour in beef broth and white wine',
            'Add thyme and bay leaf, simmer for 20 minutes',
            'Ladle soup into oven-safe bowls',
            'Top with toasted bread and Gruyere cheese',
            'Broil until cheese is bubbly and golden'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
        name: 'Sushi Rolls',
        cookingTime: '50 minutes',
        difficulty: 'Hard',
        description: 'Fresh sushi rolls with fish, vegetables, and seasoned rice.',
        instructions: [
            'Cook sushi rice and season with rice vinegar mixture',
            'Place nori sheet on bamboo mat',
            'Spread thin layer of rice on nori, leaving 1 inch at top',
            'Add fish (tuna, salmon) and vegetables in a line',
            'Roll tightly using the mat, sealing with water',
            'Slice into 8 pieces with a sharp wet knife',
            'Serve with soy sauce, wasabi, and pickled ginger'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop',
        name: 'Lasagna',
        cookingTime: '1 hour 30 minutes',
        difficulty: 'Hard',
        description: 'Layered pasta with meat sauce, ricotta, and mozzarella cheese.',
        instructions: [
            'Prepare meat sauce with ground beef, tomatoes, and Italian seasonings',
            'Mix ricotta cheese with egg, parmesan, and parsley',
            'Cook lasagna noodles according to package directions',
            'Layer: sauce, noodles, ricotta mixture, mozzarella',
            'Repeat layers 2-3 times, ending with mozzarella',
            'Cover with foil and bake at 375°F for 45 minutes',
            'Remove foil and bake 15 more minutes until golden'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=400&h=300&fit=crop',
        name: 'Fish Tacos',
        cookingTime: '25 minutes',
        difficulty: 'Easy',
        description: 'Crispy fish with cabbage slaw and lime crema in soft tortillas.',
        instructions: [
            'Season white fish with cumin, chili powder, and lime',
            'Pan-fry or grill fish until flaky',
            'Make slaw: shred cabbage and mix with lime juice',
            'Prepare lime crema: mix sour cream with lime juice and zest',
            'Warm corn tortillas',
            'Assemble: tortilla, fish, slaw, crema',
            'Top with cilantro and serve with lime wedges'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&h=300&fit=crop',
        name: 'Ramen Bowl',
        cookingTime: '40 minutes',
        difficulty: 'Medium',
        description: 'Japanese noodle soup with pork, egg, and flavorful broth.',
        instructions: [
            'Prepare broth with chicken stock, miso paste, soy sauce, and mirin',
            'Cook ramen noodles according to package, set aside',
            'Marinate pork belly and roast until tender',
            'Soft boil eggs (6-7 minutes), peel and halve',
            'Sauté mushrooms and bok choy',
            'Assemble bowl: noodles, hot broth, pork, egg, vegetables',
            'Top with green onions, nori, and sesame seeds'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400&h=300&fit=crop',
        name: 'Caprese Salad',
        cookingTime: '10 minutes',
        difficulty: 'Easy',
        description: 'Fresh mozzarella, tomatoes, and basil with balsamic glaze.',
        instructions: [
            'Slice fresh mozzarella and ripe tomatoes into rounds',
            'Arrange alternating slices on a platter',
            'Tuck fresh basil leaves between slices',
            'Drizzle with extra virgin olive oil',
            'Add balsamic glaze in a decorative pattern',
            'Season with sea salt and cracked black pepper',
            'Serve immediately at room temperature'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=300&fit=crop',
        name: 'Beef Wellington',
        cookingTime: '2 hours',
        difficulty: 'Hard',
        description: 'Tender beef tenderloin wrapped in puff pastry with mushroom duxelles.',
        instructions: [
            'Sear beef tenderloin on all sides, let cool',
            'Prepare mushroom duxelles: finely chop and cook until dry',
            'Spread duxelles on prosciutto slices',
            'Wrap beef with prosciutto-mushroom layer',
            'Roll in puff pastry, sealing edges with egg wash',
            'Brush pastry with egg wash and score decoratively',
            'Bake at 425°F for 25-35 minutes until golden'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop',
        name: 'Chicken Tikka Masala',
        cookingTime: '50 minutes',
        difficulty: 'Medium',
        description: 'Marinated chicken in creamy tomato-based curry sauce.',
        instructions: [
            'Marinate chicken in yogurt, garam masala, and spices for 30 minutes',
            'Grill or broil chicken until charred',
            'In a pan, sauté onions, garlic, and ginger',
            'Add tomato paste, garam masala, and chili powder',
            'Pour in crushed tomatoes and heavy cream',
            'Add grilled chicken and simmer for 15 minutes',
            'Garnish with cilantro and serve with basmati rice'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1590759668628-05b0fc34754d?w=400&h=300&fit=crop',
        name: 'Lobster Roll',
        cookingTime: '20 minutes',
        difficulty: 'Easy',
        description: 'Fresh lobster meat with mayo on a buttered toasted bun.',
        instructions: [
            'Boil lobster tails for 8-10 minutes until cooked',
            'Remove meat and chop into chunks',
            'Mix lobster with mayo, lemon juice, and celery',
            'Season with salt, pepper, and a pinch of Old Bay',
            'Butter split-top hot dog buns',
            'Toast buns in a pan until golden',
            'Fill buns with lobster mixture and serve'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop',
        name: 'Eggs Benedict',
        cookingTime: '25 minutes',
        difficulty: 'Hard',
        description: 'Poached eggs on English muffin with Canadian bacon and hollandaise.',
        instructions: [
            'Make hollandaise: whisk egg yolks with lemon juice over double boiler',
            'Slowly add melted butter while whisking constantly',
            'Toast English muffins and warm Canadian bacon',
            'Poach eggs in simmering water with vinegar (3-4 minutes)',
            'Assemble: muffin half, bacon, poached egg',
            'Spoon hollandaise generously over top',
            'Garnish with paprika and chives'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=400&h=300&fit=crop',
        name: 'Beef Stroganoff',
        cookingTime: '40 minutes',
        difficulty: 'Medium',
        description: 'Tender beef in creamy mushroom sauce served over egg noodles.',
        instructions: [
            'Slice beef into thin strips and season',
            'Sear beef in hot pan until browned, set aside',
            'Sauté onions and mushrooms until golden',
            'Add flour and cook for 1 minute',
            'Pour in beef broth and bring to simmer',
            'Stir in sour cream and return beef to pan',
            'Serve over cooked egg noodles with parsley'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=400&h=300&fit=crop',
        name: 'Bibimbap',
        cookingTime: '35 minutes',
        difficulty: 'Medium',
        description: 'Korean rice bowl with vegetables, egg, and spicy gochujang sauce.',
        instructions: [
            'Cook rice and keep warm',
            'Prepare vegetables: sauté spinach, bean sprouts, carrots separately',
            'Season each vegetable with sesame oil and salt',
            'Cook ground beef with soy sauce and garlic',
            'Fry an egg sunny-side up',
            'Arrange rice in bowl with vegetables and beef in sections',
            'Top with egg and serve with gochujang sauce on the side'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1619895092538-128341789043?w=400&h=300&fit=crop',
        name: 'Pulled Pork Sandwich',
        cookingTime: '4 hours',
        difficulty: 'Medium',
        description: 'Slow-cooked shredded pork with BBQ sauce on a soft bun.',
        instructions: [
            'Rub pork shoulder with spice mix (paprika, brown sugar, garlic)',
            'Place in slow cooker with onions and apple cider vinegar',
            'Cook on low for 6-8 hours until very tender',
            'Shred pork with two forks',
            'Mix with your favorite BBQ sauce',
            'Toast hamburger buns',
            'Pile pork high on buns and serve with coleslaw'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1593560704563-f176a2eb61db?w=400&h=300&fit=crop',
        name: 'Falafel Wrap',
        cookingTime: '30 minutes',
        difficulty: 'Easy',
        description: 'Crispy chickpea fritters with tahini sauce in pita bread.',
        instructions: [
            'Blend chickpeas, onion, garlic, parsley, and spices in food processor',
            'Form mixture into small balls',
            'Fry falafel in oil until golden and crispy',
            'Make tahini sauce: mix tahini with lemon juice and water',
            'Warm pita bread',
            'Fill pita with falafel, lettuce, tomatoes, cucumbers',
            'Drizzle with tahini sauce and serve'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&h=300&fit=crop',
        name: 'Chicken Alfredo',
        cookingTime: '30 minutes',
        difficulty: 'Easy',
        description: 'Fettuccine pasta with grilled chicken in creamy alfredo sauce.',
        instructions: [
            'Season and grill chicken breasts, let rest then slice',
            'Cook fettuccine according to package directions',
            'Melt butter in a large pan',
            'Add heavy cream and bring to simmer',
            'Stir in grated parmesan cheese until melted',
            'Toss pasta in sauce with sliced chicken',
            'Garnish with parsley and extra parmesan'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=400&h=300&fit=crop',
        name: 'Pho',
        cookingTime: '2 hours',
        difficulty: 'Hard',
        description: 'Vietnamese noodle soup with beef, herbs, and aromatic broth.',
        instructions: [
            'Char onions and ginger over flame',
            'Simmer beef bones, charred aromatics, star anise, cinnamon for 2 hours',
            'Strain broth and season with fish sauce and sugar',
            'Cook rice noodles according to package',
            'Thinly slice raw beef',
            'Place noodles in bowl, top with raw beef',
            'Pour hot broth over (cooks the beef), serve with herbs and lime'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop',
        name: 'Carbonara',
        cookingTime: '25 minutes',
        difficulty: 'Medium',
        description: 'Pasta with crispy bacon, egg, parmesan, and black pepper.',
        instructions: [
            'Cook spaghetti in salted boiling water',
            'Fry bacon or pancetta until crispy',
            'Whisk eggs with grated parmesan and black pepper',
            'Reserve pasta water before draining',
            'Toss hot pasta with bacon and its fat',
            'Remove from heat and quickly mix in egg mixture',
            'Add pasta water to create creamy sauce, serve immediately'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6e5d6?w=400&h=300&fit=crop',
        name: 'Stuffed Bell Peppers',
        cookingTime: '1 hour',
        difficulty: 'Medium',
        description: 'Bell peppers filled with ground beef, rice, and tomato sauce.',
        instructions: [
            'Cut tops off bell peppers and remove seeds',
            'Brown ground beef with onions and garlic',
            'Mix beef with cooked rice, tomato sauce, and seasonings',
            'Stuff peppers with beef mixture',
            'Place in baking dish with a little water at bottom',
            'Cover with foil and bake at 375°F for 35 minutes',
            'Top with cheese and bake uncovered for 10 more minutes'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1587486937773-5c7ced3c07e9?w=400&h=300&fit=crop',
        name: 'Shakshuka',
        cookingTime: '30 minutes',
        difficulty: 'Easy',
        description: 'Poached eggs in spiced tomato and pepper sauce with herbs.',
        instructions: [
            'Sauté onions and bell peppers until soft',
            'Add garlic, cumin, and paprika',
            'Pour in crushed tomatoes and simmer for 10 minutes',
            'Make wells in sauce and crack eggs into them',
            'Cover and cook until eggs are set but yolks still runny',
            'Sprinkle with feta cheese and fresh herbs',
            'Serve with crusty bread for dipping'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop',
        name: 'Lamb Chops',
        cookingTime: '20 minutes',
        difficulty: 'Medium',
        description: 'Pan-seared lamb chops with rosemary and garlic.',
        instructions: [
            'Bring lamb chops to room temperature',
            'Season generously with salt, pepper, and minced rosemary',
            'Heat oil in cast iron skillet until very hot',
            'Sear lamb chops 3-4 minutes per side for medium-rare',
            'Add butter, garlic, and rosemary to pan in last minute',
            'Baste chops with herb butter',
            'Let rest 5 minutes before serving'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400&h=300&fit=crop',
        name: 'Paella',
        cookingTime: '1 hour',
        difficulty: 'Hard',
        description: 'Spanish rice dish with seafood, chicken, and saffron.',
        instructions: [
            'Season chicken thighs and brown in paella pan',
            'Sauté onions, peppers, and garlic',
            'Add rice and stir to coat with oil',
            'Pour in saffron-infused broth',
            'Arrange chicken, shrimp, mussels, and chorizo on top',
            'Cook without stirring until rice is tender (25-30 minutes)',
            'Let rest 5 minutes, garnish with lemon and parsley'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1599912027704-58baa61c0b90?w=400&h=300&fit=crop',
        name: 'Enchiladas',
        cookingTime: '45 minutes',
        difficulty: 'Medium',
        description: 'Rolled tortillas filled with chicken, topped with sauce and cheese.',
        instructions: [
            'Shred cooked chicken and mix with cheese and spices',
            'Warm tortillas to make them pliable',
            'Fill each tortilla with chicken mixture and roll',
            'Place seam-side down in baking dish',
            'Pour enchilada sauce over rolls',
            'Top with shredded cheese',
            'Bake at 375°F for 20-25 minutes until bubbly'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop',
        name: 'Bruschetta',
        cookingTime: '15 minutes',
        difficulty: 'Easy',
        description: 'Toasted bread topped with fresh tomatoes, basil, and olive oil.',
        instructions: [
            'Slice baguette diagonally into 1/2 inch slices',
            'Brush with olive oil and toast until golden',
            'Rub warm toast with cut garlic clove',
            'Dice tomatoes and mix with basil, olive oil, and balsamic',
            'Season tomato mixture with salt and pepper',
            'Spoon tomato mixture onto toasted bread',
            'Serve immediately as an appetizer'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1583773317825-66561b4e8979?w=400&h=300&fit=crop',
        name: 'Chili Con Carne',
        cookingTime: '1 hour 30 minutes',
        difficulty: 'Easy',
        description: 'Hearty beef chili with beans, tomatoes, and spices.',
        instructions: [
            'Brown ground beef with onions and garlic',
            'Add chili powder, cumin, and paprika',
            'Stir in crushed tomatoes, tomato paste, and beef broth',
            'Add kidney beans and diced peppers',
            'Simmer on low for 1 hour, stirring occasionally',
            'Season with salt, pepper, and hot sauce to taste',
            'Serve with shredded cheese, sour cream, and cornbread'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1618588870326-cb2ef4e36566?w=400&h=300&fit=crop',
        name: 'Pesto Pasta',
        cookingTime: '20 minutes',
        difficulty: 'Easy',
        description: 'Pasta tossed with fresh basil pesto and parmesan cheese.',
        instructions: [
            'Make pesto: blend basil, pine nuts, garlic, parmesan, and olive oil',
            'Cook pasta according to package directions',
            'Reserve 1 cup pasta water before draining',
            'Toss hot pasta with pesto',
            'Add pasta water to reach desired consistency',
            'Season with salt and pepper',
            'Serve with extra parmesan and pine nuts'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop',
        name: 'Butter Chicken',
        cookingTime: '50 minutes',
        difficulty: 'Medium',
        description: 'Indian chicken curry in rich, creamy tomato butter sauce.',
        instructions: [
            'Marinate chicken in yogurt, lemon, and spices for 1 hour',
            'Grill or broil chicken until charred',
            'In pan, melt butter and sauté onions, garlic, ginger',
            'Add tomato puree, garam masala, and chili powder',
            'Stir in heavy cream and simmer',
            'Add grilled chicken and cook for 10 minutes',
            'Finish with butter and serve with naan'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400&h=300&fit=crop',
        name: 'Quesadilla',
        cookingTime: '15 minutes',
        difficulty: 'Easy',
        description: 'Grilled tortilla filled with melted cheese and your choice of fillings.',
        instructions: [
            'Place tortilla in hot skillet',
            'Sprinkle cheese on half of the tortilla',
            'Add optional fillings: chicken, peppers, onions',
            'Fold tortilla in half',
            'Cook 2-3 minutes per side until golden and cheese melts',
            'Cut into triangles',
            'Serve with salsa, guacamole, and sour cream'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop',
        name: 'Chicken Wings',
        cookingTime: '40 minutes',
        difficulty: 'Easy',
        description: 'Crispy baked or fried wings with buffalo or BBQ sauce.',
        instructions: [
            'Pat chicken wings dry and season with salt and pepper',
            'Toss with baking powder for extra crispiness',
            'Bake at 425°F for 40-45 minutes, flipping halfway',
            'Or deep fry at 375°F for 10-12 minutes',
            'Toss hot wings in sauce (buffalo, BBQ, or honey garlic)',
            'Return to oven for 5 minutes to set sauce',
            'Serve with celery sticks and blue cheese or ranch dressing'
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1614069686110-80e6ea4d91ea?w=400&h=300&fit=crop',
        name: 'Gnocchi',
        cookingTime: '35 minutes',
        difficulty: 'Medium',
        description: 'Soft potato dumplings in butter sage sauce or tomato sauce.',
        instructions: [
            'Boil gnocchi in salted water until they float (2-3 minutes)',
            'Heat butter in a large skillet',
            'Add fresh sage leaves and cook until fragrant',
            'Add drained gnocchi to butter and toss to coat',
            'Cook until gnocchi are lightly golden',
            'Add parmesan cheese',
            'Season with salt and pepper, serve immediately'
        ]
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
        recipeCard.onclick = () => openModal(recipe);

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

function openModal(recipe) {
    const modal = document.getElementById('recipe-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalTime = document.getElementById('modal-time');
    const modalDifficulty = document.getElementById('modal-difficulty');
    const modalDescription = document.getElementById('modal-description');
    const modalInstructions = document.getElementById('modal-instructions');

    modalTitle.textContent = recipe.name;
    modalImage.src = recipe.image;
    modalTime.textContent = `Cooking Time: ${recipe.cookingTime}`;
    modalDifficulty.textContent = `Difficulty: ${recipe.difficulty}`;
    modalDescription.textContent = recipe.description;

    modalInstructions.innerHTML = '';
    recipe.instructions.forEach((instruction, index) => {
        const li = document.createElement('li');
        li.textContent = instruction;
        modalInstructions.appendChild(li);
    });

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('recipe-modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('recipe-modal');
    if (event.target === modal) {
        closeModal();
    }
}

renderRecipeGrid(recipes);
