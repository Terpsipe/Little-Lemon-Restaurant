const buttons = document.querySelectorAll('button');

const mealContainer = document.querySelector('.centered-container');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        loadMenu(button.innerHTML);
        });
});

function loadMenu(daytime){
    if (daytime === "Dinner"){
        mealContainer.innerHTML = 
        `<h1>Dinner Menu</h1>
        <h2>Starters</h2>
        <div class="menu-div starters-div"></div>
        <h2>Soups</h2>
        <div class="menu-div soups-div"></div>
        <h2>Salads</h2>
        <div class="menu-div salads-div"></div>
        <h2>Main Course</h2>
        <div class="menu-div main-div"></div>
        <h2>Sides</h2>
        <div class="menu-div sides-div"></div>
        <h2>Dessert</h2>
        <div class="menu-div dessert-div"></div>`;
    }
    else {
        mealContainer.innerHTML = 
        `<h1>Lunch Menu</h1>
        <h2>Starters</h2>
        <div class="menu-div-lunch starters-div-lunch"></div>
        <h2>Main Course</h2>
        <div class="menu-div-lunch main-div-lunch"></div>
        <h2>Desert</h2>
        <div class="menu-div-lunch desert-div-lunch"></div>
        <h2>Lunch Menu Prices</h2>
        <div class="menu-prices-lunch">
            <p>Main Course</p><p>10,00€</p>
            <p>Main Course + Starter or Desert</p><p>11,50€</p>
            <p>Main Course, Starter and Desert</p><p>12,50€</p>
            <p>All Lunch Menus come with a Side of Pita Bread, Rice or French Fries.</p>
        </div>`;
    }
}