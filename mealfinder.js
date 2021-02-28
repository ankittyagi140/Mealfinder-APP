const search = document.getElementById('search');
const submit = document.getElementById('submit');
const my_meal = document.getElementById('my-meal');
const select = document.getElementById('select');


function searchReasult(e) {
    e.preventDefault();
    const meal = search.value;
    if (meal.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                document.getElementById('meal-heading').innerHTML = `Search result for "${meal}"`
                if (data.meals === null) {
                    document.getElementById('meal-heading').innerHTML = `Search result not found for "${meal}"`
                } document.getElementById('my-meal').innerHTML = data.meals.map(meal => `
                <div id="" class="meals">
                <img src="${meal.strMealThumb} " alt="${meal.srtMeal}"/>
                <div class="meal-info" data-mealID="${meal.idMeal}">
                <h3 class="h3">${meal.strMeal}</h3>
                </div>
                </div>
        `)
            });
    }
    else {
        alert("Enter the meal Name");
    }
    search.value = null;
}
submit.addEventListener('submit', searchReasult);
my_meal.addEventListener('click', (e) => {
    const mealInfo = e.path.find(item => {

    })
})
select.addEventListener('change', () => {
    const area = select.value;
    console.log(area);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('meal-heading').innerHTML = `Search result for "${area}"`
                if (data.meals === null) {
                    document.getElementById('meal-heading').innerHTML = `Search result not found for "${area}"`
                } document.getElementById('my-meal').innerHTML = data.meals.map(meal => `
                <div id="" class="meals">
                <img src="${meal.strMealThumb} " alt="${meal.srtMeal}"/>
                <div class="meal-info" data-mealID="${meal.idMeal}">
                <h3 class="h3">${meal.strMeal}</h3>
                </div>
                </div>
        `)
        })
})