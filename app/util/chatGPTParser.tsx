import axios from 'axios';
import api from '../api/api';
import { Recipe } from './constants';

export const RecipeListConstructor = async (
  ingredientList: String,
  mealType: string,
  numberOfRecipes: string,
  dietType: string
): Promise<Recipe[] | null> => {

  try {
    const recipeAI = axios.create({
      baseURL: 'https://api.openai.com/v1',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
    });

    const result = await recipeAI.post('/chat/completions', {
      model: 'gpt-3.5-turbo', // or the version you want to use
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        {
          role: 'user',
          content: `Create a list of ${numberOfRecipes} ${dietType} ${mealType} recipes with ${ingredientList} in JSON, named recipes. With the title, list of ingredients, and list of instructions.`,
        },
      ],
    });

    let List = result.data.choices[0].message.content;

    if (List[0] !== '{') {
      List = List.split('{');
      List.shift();
      List = List.join('{');
      List = List.split('}');
      List.pop();
      List = List.join('}');
      List = JSON.parse('{' + List + '}');
    } else {
      List = JSON.parse(List);
    }

    const keyFor = Object.keys(List)[0];

    return List[keyFor];
  } catch (error) {
    console.error('Error fetching data:', error);

    return null;
  }
};
