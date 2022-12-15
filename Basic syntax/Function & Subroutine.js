function makeCoffee (sugar, milk)
{
    var instruction = "Boil Water,";

    instruction += "pour into cup,";

    instruction += "add coffee granules,";

    instruction += " add " + sugar + " spoon of sugar,";

    instruction += " add " + milk + " % milk.";

    return instruction;

}

console.log ( makeCoffee (2, 20));