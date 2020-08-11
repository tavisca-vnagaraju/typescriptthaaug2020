function EX1() {
    var thestring;
    var result = "";
    thestring = "TypeScrtipt is a front-end language that is an alternative to JavaSCript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.";
    var splitedString = thestring.split('.');
    splitedString.forEach(function (element) {
        if (element[0] == " ") {
            element = element.substr(1, element.length);
        }
        if (element != '')
            result += element[0].toUpperCase() + element.substring(1, element.length) + ".";
    });
    console.log();
    console.log(result);
    console.log();
}
function EX2() {
    function wordCountInString(word, inputString) {
        var splitedString = inputString.split(" ");
        var result = splitedString.filter(function (element) {
            return word == element;
        });
        return result.length;
    }
    function characterCount(character, inputString) {
        var chars = inputString.split("");
        var result = chars.filter(function (element) {
            return character == element;
        });
        return result.length;
    }
    console.log(wordCountInString("hello", "hello world hello again and also hello too"));
    console.log(characterCount("l", "hello world hello again and also hello too"));
}
function EX3() {
    var thestring;
    var result = "";
    thestring = "TypeScrtipt is a front-end language that is an alternative to JavaSCript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.";
    var splitedString = thestring.split(' ');
    splitedString.forEach(function (element) {
        if (element != '')
            result += element[0].toUpperCase() + element.substring(1, element.length) + " ";
    });
    console.log();
    console.log(result);
    console.log();
}
EX2();
