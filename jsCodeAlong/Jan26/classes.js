class Cookie {
    constructor(name, isGlutenFree){
        this.name = name,
        this.isGlutenFree = isGlutenFree,
        this.eatCookie = function(){
            console.log(`I'm eating ${this.name}`);
        }
    }


}
const myCookie = new Cookie();
console.log(myCookie);

const cookie2 = new Cookie("iced oatmeal" , true);
console.log(cookie2);
// different ways to log the method
console.log(cookie2.eatCookie());
cookie2.eatCookie();
console.log(cookie2['isGlutenFree'])