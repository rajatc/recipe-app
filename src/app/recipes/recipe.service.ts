import { Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is a simple test', 'https://c.pxhere.com/photos/c1/96/sweet_struffoli_typical_sweet_dessert_food_recipe_kitchen_dish-754476.jpg!d',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Second Test Recipe', 
            'This is a test', 'https://c.pxhere.com/photos/5f/6f/sweet_foods_food_sweet_biscuits_red_green_sugar_alimentari-964833.jpg!d',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 20)
            ]),
    ];

    constructor(private slService: ShoppingListService){

    }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients)
    }

    
}