function EX1() {
    let thestring: string;
    let result = "";
    thestring = "TypeScrtipt is a front-end language that is an alternative to JavaSCript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.";

    let splitedString = thestring.split('.');
    splitedString.forEach(element => {
        if(element[0] == " "){
            element = element.substr(1,element.length);
        } 
        if (element != '') 
            result += element[0].toUpperCase() + element.substring(1, element.length) + ".";
        
    });
    console.log();
    console.log(result);
    console.log();
}

function EX2(){
    function wordCountInString(word:string,inputString:string):number{
        let splitedString = inputString.split(" ");
        let result = splitedString.filter((element)=>{
            return word == element;
        });
        return result.length;
    }
    function characterCount(character:string,inputString:string):number{
        let chars = inputString.split("");
        let result = chars.filter((element)=>{
            return character == element;
        });
        
        return result.length;
    }
    console.log(wordCountInString("hello","hello world hello again and also hello too"));
    console.log(characterCount("l","hello world hello again and also hello too"));
}
function EX3(){
    let thestring: string;
    let result = "";
    thestring = "TypeScrtipt is a front-end language that is an alternative to JavaSCript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.";

    let splitedString = thestring.split(' ');
    splitedString.forEach(element => {
        if (element != '') 
            result += element[0].toUpperCase() + element.substring(1, element.length) + " ";
        
    });
    console.log();
    console.log(result);
    console.log();
}
EX3();