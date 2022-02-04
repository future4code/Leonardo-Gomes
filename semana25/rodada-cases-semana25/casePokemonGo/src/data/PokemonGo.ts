const xlsxj = require("xlsx-to-json");
xlsxj({
    input: "./src/pokemonGo.xlsx", 
    output: "./src/pokemonGo.json"
}, function(err: any, result: any) {
    if(err) {
        console.error(err);
    }else {
        console.log(result);
    }
});