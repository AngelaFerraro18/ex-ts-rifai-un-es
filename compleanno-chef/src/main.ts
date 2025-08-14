// types 
type RecipeType = {
  readonly id: number,
  name: string,
  ingredients: string,
  userId: number
}

type UserType = {
  readonly id: number,
  firstName: string,
  lastName: string,
  age: number,
  birthDate: string
}



//funzione per recuperare dati chef
async function getChefBirthday(id: number): Promise<{ firstName: string, lastName: string, birthDate: string }> {

  try {
    const responseRecipe = await fetch(`https://dummyjson.com/recipes/${id}`);
    const dataRecipe: RecipeType = await responseRecipe.json();

    const responseChef = await fetch(`https://dummyjson.com/users/${dataRecipe.userId}`);
    const dataChef: UserType = await responseChef.json();


    return {
      firstName: dataChef.firstName,
      lastName: dataChef.lastName,
      birthDate: dataChef.birthDate
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
    }
    throw new Error('Qualcosa è andato storto');
  }

}

getChefBirthday(1).then(({ firstName, lastName, birthDate }) => {

  console.log(`Il compleanno dello chef ${firstName} ${lastName} è il: ${birthDate} `);
});