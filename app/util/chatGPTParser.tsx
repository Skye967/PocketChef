


export const RecipeListDeconstructor = (message: string) => {
    console.log(JSON.parse(message));
    const Recipes = JSON.parse(message);
    return Recipes
    
}