


export const RecipeListDeconstructor = (message: string) => {
    console.log(message)
    const Recipes = JSON.parse(message);
    return Recipes
    
}
