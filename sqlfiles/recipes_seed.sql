-- if necessary change USE statement to point to your dev DB name 
USE generalentrees_dev_db;


-- Perfect French Toast Recipe - https://addapinch.com/perfect-french-toast-recipe/
INSERT INTO Recipes (Title, Servings, Instructions, PrepTime, CookTime, Image, createdAt, updatedAt, categoryId) VALUES
('Perfect French Toast Recipe', 4, 'Whisk together eggs, milk, salt, sugar, vanilla, and cinnamon in a flat-bottomed pie plate or baking dish. Place bread slices, one or two at a time, into the egg mixture and flip to make sure both sides of bread are well-coated.
Melt butter in a large skillet or on a griddle. Place bread slices in skillet or on griddle and cook on medium heat until golden brown on each side, about 2-3 minutes.
Serve immediately or keep warm in oven until ready to serve, but no longer than about 30 minutes.

Notes:
You are simply dipping your bread slices into the egg mixture. If you leave your bread in the mixture for an extended amount of time, it will absorb more liquid and take longer to cook through.',
'5 minutes', '5 minutes', './assets/images/french-toast-recipe.jpg', NOW(), NOW(), 1);



-- English-Muffin Breakfast Pizza - https://www.foodnetwork.com/recipes/ellie-krieger/english-muffin-breakfast-pizza-recipe-1973030
INSERT INTO Recipes (Title, Servings, Instructions, PrepTime, CookTime, Image, createdAt, updatedAt, categoryId) VALUES
('English-Muffin Breakfast Pizza', 1, 'Preheat the oven to 450 degrees. Line a small baking sheet with foil.
Place the English muffin halves cut-side up on the baking sheet. Top each with tomato and drizzle with the olive oil. Sprinkle the Canadian bacon over the tomatoes, then top with the mozzarella. Bake for 10 to 12 minutes, or until the cheese is melted and beginning to brown. Sprinkle with basil.',
'5 minutes', '12 minutes', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/8/13/2/FNM100109AskEllie003_s4x3.jpg.rend.hgtvcom.966.725.suffix/1382539172302.jpeg', NOW(), NOW(), 1);




-- Harvest Salad - https://www.allrecipes.com/recipe/23783/harvest-salad/?internalSource=recipe%20hub&referringId=17561&referringContentType=Recipe%20Hub&clickId=cardslot%2035
INSERT INTO Recipes (Title, Servings, Instructions, PrepTime, CookTime, Image, createdAt, updatedAt, categoryId) VALUES
('Harvest Salad', 6, 'Preheat oven to 375 degrees F (190 degrees C). Arrange walnuts in a single layer on a baking sheet. Toast in oven for 5 minutes, or until nuts begin to brown.
In a large bowl, toss together the spinach, walnuts, cranberries, blue cheese, tomatoes, avocado, and red onion.
In a small bowl, whisk together jam, vinegar, walnut oil, pepper, and salt. Pour over the salad just before serving, and toss to coat.',
'15 minutes', 'na', 'https://images.media-allrecipes.com/userphotos/560x315/1656669.jpg', NOW(), NOW(), 2);



-- Pesto Grilled Cheese Sandwich - https://www.allrecipes.com/recipe/189891/pesto-grilled-cheese-sandwich/?clickId=right%20rail0&internalSource=rr_feed_recipe_sb&referringId=217267%20referringContentType%3Drecipe
INSERT INTO Recipes (Title, Servings, Instructions, PrepTime, CookTime, Image, createdAt, updatedAt, categoryId) VALUES
('Pesto Grilled Cheese Sandwich', 1, 'Spread one side of a slice of bread with butter, and place it, buttered side down, into a nonstick skillet over medium heat.
Spread the top of the bread slice in the skillet with half the pesto sauce, and place a slice of provolone cheese, the tomato slices, and the slice of American cheese onto the pesto.
Spread remaining pesto sauce on one side of the second slice of bread, and place the bread slice, pesto side down, onto the sandwich. Butter the top side of the sandwich.
Gently fry the sandwich, flipping once, until both sides of the bread are golden brown and the cheese has melted, about 5 minutes per side.
 
Tip:
Aluminum foil helps keep food moist, ensures it cooks evenly, keeps leftovers fresh, and makes clean-up easy.',
'5 minutes', '10 minutes', 'https://images.media-allrecipes.com/userphotos/560x315/4543319.jpg', NOW(), NOW(), 2);



-- Roasted Asparagus - https://www.geniuskitchen.com/recipe/roasted-asparagus-50847
INSERT INTO Recipes (Title, Servings, Instructions, PrepTime, CookTime, Image, createdAt, updatedAt, categoryId) VALUES
('Roasted Asparagus', 4, 'Preheat oven to 425°F.
Cut off the woody bottom part of the asparagus spears and discard.
With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears.
Place asparagus on foil-lined baking sheet and drizzle with olive oil.
Sprinkle with salt.
With your hands, roll the asparagus around until they are evenly coated with oil and salt.
Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.
They should be tender when pierced with the tip of a knife.
The tips of the spears will get very brown but watch them to prevent burning.
They are great plain, but can be served with a light vinaigrette if you need something acidic to balance out your meal.',
'10 minutes', '10 - 15 minutes', 'https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,w_560,h_315/v1/img/recipes/50/84/7/picMcSyVd.jpg', NOW(), NOW(), 3);



-- Chicken Marsala - http://archive.jsonline.com/features/recipes/234268831.html
INSERT INTO Recipes (Title, Servings, Instructions, PrepTime, CookTime, Image, createdAt, updatedAt, categoryId) VALUES
('Chicken Marsala', 6, 'Lay chicken breasts skin side down on a sheet of plastic wrap and cover with a second sheet of plastic wrap. Lightly pound chicken breasts until they are ¼ to ½ inch thick.
Combine about 2 tablespoons olive oil with salt and pepper in a large, shallow bowl and mix with a wire whip. Add pounded chicken breasts to bowl and turn to coat.
In large sauté pan, heat remaining 4 tablespoons olive oil. Lightly dust chicken breasts with flour and place in pan skin side down. (If chicken breasts are large, you may have to cook them in batches and use more oil). Sauté until golden brown, 2 to 3 minutes. Turn chicken and sauté another minute or until browned.
Preheat oven to 400 degrees.
Transfer browned breasts to a 13-by-9-inch pan, but do not discard oil in sauté pan. Cook chicken in preheated oven 12 to 15 minutes or until nearly done.
While chicken is cooking, add mushrooms to the oil in the sauté pan and cook until lightly browned. Add wine and cook over medium heat until wine has reduced by half. Remove sauté pan from heat and swirl butter into liquid until melted.
Remove chicken from oven and place back in sauté pan. Toss chicken with mushrooms and sauté 2 to 3 minutes or until done.
To serve: Transfer chicken to a platter and pour mushrooms and sauce over top. Sprinkle with parsley and serve.',
'15 minutes', '20 minutes', 'http://archive.jsonline.com/Services/image.ashx?domain=www.jsonline.com&file=Chicken_new2.jpg&resize=425*283', NOW(), NOW(), 3);



-- TRIPLE CHOCOLATE MOUSSE - https://kitchenconfidante.com/triple-chocolate-mousse-recipe
INSERT INTO Recipes (Title, Servings, Instructions, PrepTime, CookTime, Image, createdAt, updatedAt, categoryId) VALUES
('Triple Chocolate Mousse', 4, 'Using a mixing bowl and whisk attachment that has been chilled in the freezer, whip the heavy cream until stiff peaks form. Store in a tightly sealed container in the refrigerator until needed.
Place semisweet, milk and white chocolates in three separate small bowls.
In a small bowl, place cold water and sprinkle the gelatin. Let it stand for about 10 minutes, until the gelatin is soft.
In a medium bowl, beat the egg yolks and sugar with a whisk until the mixture is light yellow and creamy. Place the milk in a small heavy saucepan over medium heat and bring to a gentle simmer. Ladle out about 1/2 of the warm milk and add it in a steady stream to the egg yolks, whisking continuously. Pour the warmed egg yolk mixture into the saucepan with the remaining milk and whisk well. Stir over medium heat for about 2-3 minutes, until the custard thickens and coats the back of a spoon. If you run a finger through the coated spoon, it should leave a line down the middle.
Remove the custard from the heat and stir in the softened gelatin until it dissolves. Divide the custard amongst the three bowls of chocolate, pouring about 1/3 cup in each. Stir each chocolate well. If the chocolate does not melt, place on a double boiler/pan of simmering water and stir until melted. Allow the three chocolates to cool to room temperature.
Divide the whipped cream and fold in about 3/4 cup into each bowl of chocolate. There will be some whipped cream left over, set that aside momentarily.
Pour the first layer of chocolate mousse in the serving cups, spreading the top evenly. Freeze for 15 minutes. Continue this process with the remaining chocolate mousses. The mousse can be prepared up to two days in advance; cover each cup with plastic wrap and store in the refrigerator until ready to serve.
Sweeten the remaining whipped cream with a about a tablespoon of confectioners sugar, whisk well. Before serving, place a dollop of cream and sprinkle with chocolate covered cocoa nibs.',
'na', 'na', 'http://kitchenconfidante.com/wp-content/uploads/2012/02/Triple-Chocolate-Mousse-Kitchen-Confidante1.jpg', NOW(), NOW(), 4);



-- Chocolate Peanut Butter No-Bake Dessert - https://flavorite.net/chocolate-peanut-butter-no-bake-dessert/
INSERT INTO Recipes (Title, Servings, Instructions, PrepTime, CookTime, Image, createdAt, updatedAt, categoryId) VALUES
('Chocolate Peanut Butter No-Bake Dessert', 9, 'Crush 16 cookies; toss with the butter. Press into an ungreased 9-inch square dish; set aside. In a large bowl, beat the cream cheese, peanut butter and 1 cup confectioners’ sugar until smooth.
Fold in half of the whipped topping. Spread over crust.
Sprinkle with chopped peanut butter cups. In another large bowl, beat the milk, pudding mix and remaining confectioners’ sugar on low speed for 2 minutes Let stand for 2 minutes or until soft-set.
Fold in remaining whipped topping. Spread over peanut butter cups. Crush remaining cookies; sprinkle over the top.
Cover and chill for at least 3 hours.',
'15 minutes', '3 hours', 'https://i2.wp.com/flavorite.net/wp-content/uploads/2015/07/Chocolate_Peanut_Butter_Des.jpg?w=500&ssl=1', NOW(), NOW(), 4);



-- Guacamole - https://www.allrecipes.com/recipe/14231/guacamole/?internalSource=hub%20recipe&referringId=76&referringContentType=Recipe%20Hub&clickId=cardslot%206
INSERT INTO Recipes (Title, Servings, Instructions, PrepTime, CookTime, Image, createdAt, updatedAt, categoryId) VALUES
('Guacamole', 4, 'In a medium bowl, mash together the avocados, lime juice, and salt. Mix in onion, cilantro, and tomatoes. Stir in cumin. Refrigerate 1 hour for best flavor, or serve immediately.',
'10 minutes', 'na', 'https://images.media-allrecipes.com/userphotos/720x405/4521556.jpg', NOW(), NOW(), 5);



-- Peanut Butter Dip - https://selfproclaimedfoodie.com/peanut-butter-dip/
INSERT INTO Recipes (Title, Servings, Instructions, PrepTime, CookTime, Image, createdAt, updatedAt, categoryId) VALUES
('Peanut Butter Dip', 8, 'Add all ingredients to the bowl of a stand mixer. Beat on medium high speed until well combined and fluffy, about 5 minutes.
Serve with sliced apples, pretzel sticks, etc.

Recipe Notes:
Yields 2 cups',
'5 minutes', 'na', 'https://images.media-allrecipes.com/userphotos/720x405/4521556.jpg', NOW(), NOW(), 5);



-- EASY SANGRIA RECIPE - https://www.isabeleats.com/sangria-recipe/
INSERT INTO Recipes (Title, Servings, Instructions, PrepTime, CookTime, Image, createdAt, updatedAt, categoryId) VALUES
('Easy Sangaria', 6, 'Place all the ingredients, except the sparkling water, in a large pitcher and stir to combine. 
Refrigerate sangria for 3 to 4 hours, up to overnight, before serving.
When ready to serve, give the sangria one last stir and pour over a glass of ice. Top with sparkling water for some bubbles if desired.',
'5 minutes', 'na', 'https://www.isabeleats.com/wp-content/uploads/2018/06/easy-sangria-small-6.jpg', NOW(), NOW(), 6);



-- THAI ICED COFFEE - https://www.geniuskitchen.com/recipe/thai-iced-coffee-106595
INSERT INTO Recipes (Title, Servings, Instructions, PrepTime, CookTime, Image, createdAt, updatedAt, categoryId) VALUES
('Thai Iced Coffee', 4, 'Add the cardamom to the ground coffee, and brew the coffee; when the coffee is brewed, add the sugar and almond flavoring, mix well and then let the coffee cool to lukewarm.
Fill four 12 ounce highball glasses half-way to the rim with crushed ice and then fill two-thirds full with coffee; into each glass, stir about 1 tablespoon of heavy cream.
To achieve a layered effect, hold a spoon on top of the coffee and pour the cream slowly into the spoon so that the cream floats on top of the glass over the coffee.',
'5 minutes', 'na', 'https://img.sndimg.com/food/image/upload/w_560,h_315,c_fill,fl_progressive,q_80/v1/img/recipes/10/65/95/JnO8yG7S7mJ1eQIJMr6h_thai-iced-coffee%20(1%20of%204).jpg', NOW(), NOW(), 6);
