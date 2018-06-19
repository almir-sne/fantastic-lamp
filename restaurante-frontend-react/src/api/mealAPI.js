import API from './api'

const listMeals = (search) => {
    return API.get('meals', {params: {search: search}});
};

const getMeal = (id) => {
    return API.get('meals/' + id);
};

const persistMeal = (meal) => {
    return meal.id ? API.put('meals/' + meal.id, meal) : API.post('meals', meal);
};

const deleteMeal = (id) => {
    return API.delete('meals/' + id);
};

export default {listMeals, getMeal, persistMeal, deleteMeal}