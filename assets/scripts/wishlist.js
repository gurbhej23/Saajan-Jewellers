import { productsData } from "../data/products.js"

$(document).ready(function () {
    let allkeys = Object.keys(productsData)
    let myWishListPorducts = allkeys.filter(key => getKeyValue(key) !== null)
    console.log(myWishListPorducts)
    // productsData
    var template = $('#wishlist-page').html();
    // Compile the template data into a function 
    var templateScript = Handlebars.compile(template); 
        for (let i = 0; i < myWishListPorducts.length; i++) {
            let context = productsData[myWishListPorducts[i]];
            console.log(context);
    // console.log(context)
    // Pass Data to template script.    
    var html = templateScript({...context, product_key: myWishListPorducts[0]});
    // Insert the HTML code into the page
    $('#wishlist-html').append(html);
    console.log(html)

    $('.wish-list').each(function() {
        let key = $(this).attr('data-key')
        if( getKeyValue(key) !== null) {
            $(this).children().addClass('color-class');        
        }
    }) 
}})

