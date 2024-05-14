import { productsData } from "../data/products.js"

// const productsData = require('../../products.json')
$(document).ready(function() {
    let productSKU = window.location.search.substring(5)
    let title = productSKU.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');  
    // ToDo: make title capitalized ex 'gold ring men' 'Gold Ring Men' 

    document.title = ` ${title} | Saajan Jewellers`
    console.log(productSKU)
    // Retrieve the template data from the HTML (jQuery is used here).
    var template = $('#product-page').html();
    // Compile the template data into a function
    var templateScript = Handlebars.compile(template);
    let context = productsData[productSKU]
    // Pass Data to template script.    
    var html = templateScript(context);
    // Insert the HTML code into the page
    $('#product-html').append(html);
    
});
// requirejs(["products.json"], function() {
// })



