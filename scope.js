const a = 1;
const b = 20;
function scopeConcept(){
 const b = 2;
 console.log("Inside=>", a, b);
}
scopeConcept();
console.log("outside=>", a, b);

let i=0;
let j=0;
for (i=0; i<=5; i++)
{
let pattern="";
for (j=0;j<=i;j++)
{
pattern+="*";
}
console.log(pattern);
}
const respText = pm.response.text();
pm.test("text log expression", function()
{
    let regx = /Apple iPad Mini 5th Gen/i;
    pm.expect(regx.test(respText)).to.be.true;
});
const jsonData = pm.response.json();

pm.test("Check na red", function()
{   let i = -1;
    pm.expect(Array.isArray(jsonData)).to.be.true;
    jsonData.forEach((item, index)=>{
        pm.expect(item).to.have.property("data");
        if(item.data &&  item.data.color=="Red")
        {
            i = index;
            //break;
        }

        //console.log(item);
    });
    pm.expect(jsonData[i].data.color).eql("Red");
    //pm.expect(jsonData.color).to.eql("Red");
//pm.expect(item.name).to.eql("Apple iPad Mini 5th Gen");
});


const respText = pm.response.text();
pm.test("Red", function()
{
    let regx = /Apple iPad Mini 5th Gen/i;
    pm.expect(regx.test(respText)).to.be.true;
});





const jsonData = pm.response.json();

pm.test("Check na red", function()
{   let i = -1;
    pm.expect(Array.isArray(jsonData)).to.be.true;
    jsonData.forEach((item, index)=>{
        pm.expect(item).to.have.property("name");
        if(item.name=="Apple iPad Mini 5th Gen")
        {
            i = index;
            break;
        }

        //console.log(item);
    });
    pm.expect(jsonData[i].name).eql("Apple iPad Mini 5th Gen");
    //pm.expect(jsonData.color).to.eql("Red");
//pm.expect(item.name).to.eql("Apple iPad Mini 5th Gen");
});



install nodejs
open new git bsh CLI
npm i -g newman
newman run Day1.postman_collection.json
