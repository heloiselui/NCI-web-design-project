/*** File listents to events on cocktails images, 
 * Display the ingredients of the cocktail selected
 * 
 * @author Bence Pillips
 */

/*jshint esversion: 6 */


function showIngredients(cocktail) {

    const notice = document.getElementById(cocktail + '-notice');
    const ingredients = document.getElementById(cocktail + '-ingredients');
    const image = document.querySelector(`[onclick="showIngredients('${cocktail}')"]`);

    if (notice.style.display !== 'none') {
        notice.style.display = 'none';
        ingredients.style.display = 'block';
        image.classList.add('black-and-white');
        image.classList.add('clickedCocktail');
        image.classList.add('transformed-size');

        setTimeout(() => {
            image.classList.remove('transformed-size');
        }, 200);
    } else {
        notice.style.display = 'block';
        ingredients.style.display = 'none';
        image.classList.add('clickedCocktail');
        image.classList.add('transformed-size');

        setTimeout(() => {
            image.classList.remove('transformed-size');
        }, 200);
    }
}