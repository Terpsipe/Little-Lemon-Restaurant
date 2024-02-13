const buttons = document.querySelectorAll('button');

const mealContainer = document.querySelector('.centered-container');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        loadMenu(button.innerHTML);
        });
});

// Currently, the menu items are directly embedded within the HTML code.
// In a subsequent phase, the plan is to relocate them to a separate file and dynamically integrate them into the HTML structure using more JavaScript.
function loadMenu(daytime){
    if (daytime === "Dinner"){
        mealContainer.innerHTML = 
        `<h1>Dinner Menu</h1>
        <h2>Starters</h2>
        <div class="menu-div starters-div">
            <p>Hummus with Pita</p><p>$6.99</p>
            <p>Baba Ganoush</p><p>$7.49</p>
            <p>Stuffed Grape Leaves (Dolma)</p><p>$8.99</p>
        </div>
        <h2>Soups</h2>
        <div class="menu-div soups-div">
            <p>Lentil Soup</p><p>$4.99</p>
            <p>Tomato and Basil Soup</p><p>$6.49</p>
        </div>
        <h2>Salads</h2>
        <div class="menu-div salads-div">
           <p>Tabbouleh Salad</p><p>$7.99</p>
            <p>Caesar Salad with Grilled Chicken</p><p>$12.49</p>
        </div>
        <h2>Main Course</h2>
        <div class="menu-div main-div">
            <p>Grilled Lamb Kebab Plate</p><p>$16.99</p>
            <p>Chicken Shawarma Platter</p><p>$14.99</p>
            <p>Vegetable Tagine</p><p>$11.99</p>
        </div>
        <h2>Sides</h2>
        <div class="menu-div sides-div">
            <p>French Fries</p><p>$2.99</p>
            <p>Hummus Side</p><p>$3.99</p>
            <p>Pita Bread (3 pieces)</p><p>$1.99</p>
        </div>
        <h2>Dessert</h2>
        <div class="menu-div dessert-div">
            <p>Greek Yogurt with Honey and Nuts</p><p>$4.99</p>
            <p>Rice Pudding</p><p>$4.49</p>
        </div>`;
    }
    else {
        mealContainer.innerHTML = 
        `<h1>Lunch Menu</h1>
        <h2>Lunch Menu Prices</h2>
        <div class="menu-prices-lunch">
            <p>Main Course</p><p>10,00€</p>
            <p>Main Course + Starter or Desert</p><p>11,50€</p>
            <p>Main Course, Starter and Desert</p><p>12,50€</p>
            <p>All Lunch Menus come with a Side of Pita Bread, Rice or French Fries.</p>
        </div>
        <h2>Starters</h2>
        <div class="menu-div-lunch starters-div-lunch">
            <div><p>Baba Ganoush</p></div>
            <div><p>Stuffed Grape Leaves (Dolma)</p></div>
            <div><p>Lentil Soup</p></div>
        </div>
        <h2>Main Course</h2>
        <div class="menu-div-lunch main-div-lunch">
            <div><p>Grilled Lamb Kebab Plate</p></div>
            <div><p>Chicken Shawarma Platter</p></div>
            <div><p>Vegetable Tagine</p></div>
        </div>
        <h2>Dessert</h2>
        <div class="menu-div-lunch desert-div-lunch">
            <div><p>Greek Yogurt with Honey and Nuts</p></div>
            <div><p>Rice Pudding</p></div>
        </div>
        `;
    }
}
