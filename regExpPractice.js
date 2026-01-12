const body = pm.response.text();

pm.test("ProductExp", function(){

console.log(body);
const pattern = /"products"\s*:\s*/;
pm.expect(body).to.match(pattern);

const pattern2 = /"id"\s*:\s*\d+[\s\S]*"products"\s*:\s*\[[\s\S]*\][\s\S]*"total"\s*:\s*\d+(\.\d+)?[\s\S]*"userId"\s*:\s*\d+/;

pm.expect(body).to.match(pattern2);

const pattern3 = /[prod]\w+\s*:\s*/;
pm.expect(body).to.match(pattern3);

});

pm.test("allKeyExists",function(){
const text ='{"id":1,"products":[{"id":90,"title":"Charger SXT RWD","price":32999.99,"quantity":3,"total":98999.97"';
    //const pattern4 = /"products"\s*\s*:\[+\s*{+(\"id"\)+/;
    const pattern5 = /"products":+[[{]+"id":+\d/;
    pm.expect(text).to.match(pattern5);
    const pattern6 = /^\{"id":\d+,"products":\[\{"id":\d+,"title":"[\w\s\S]+\","price":\d+.\d+,"quantity":\d+/;
    pm.expect(body).to.match(pattern6);
});



pm.test("validateNumericFieldAndprecision",function()
{

 const test ='{"id":1,"products":[{"id":168,"title":"Charger SXT RWD","price":32999.99,"quantity":3,"total":98999.99,"discountedTotal":3259.18,"thumbnail":"https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png"}' ;
const pattern7 = /"total"\s*:\s*\d+(\.\d+)?,/;
pm.expect(test).to.match(pattern7);

const pattern8 = /"discountedTotal"\s*:\s*\d+(\.\d+)?,"thumbnail"/;
pm.expect(test).to.match(pattern8);

});


pm.test("validateEmailExpression",function(){

     const test ='{"id":1,"products":[{"id":168,"title":"Charger SXT RWD","price":32999.99,"quantity":3,"total":98999.99,"discountedTotal":3259.18,"thumbnail":"https://cdn.dummy-json.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png"}' ;
    const pattern9 = /"thumbnail"\s*:\s*"https:\/\/[\w-]+\.[\w-]+\.(com|in)/g;
pm.expect(test).to.match(pattern9);




pm.test("validate_url_pattern", function() {

    const cart_data = response_data.carts[0].products[0];
        console.log(cart_data.thumbnail);
        pm.expect(cart_data.thumbnail).to.match(/"https:/);

});
 const matches = body.match(pattern9);

    pm.expect(matches).to.not.be.null;
    pm.expect(matches.length).to.be.above(0);

});


pm.test("productCountMatch", function(){

const pattern_product_contain =/"products":\[(.*?)\]/;

const res = body.match(pattern_product_contain);
console.log(res);
const productsMatch = body.match(/"products"\s*:\s*\[(.*?)\]/s);
const res1 = body.match(productsMatch);

console.log("*****************");
console.log(res1);

});