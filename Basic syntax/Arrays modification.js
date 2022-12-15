var array = [
    "string",
    100,
    ["embed", 200 ],
    {car: "ford"},
    function(){ return "drive"; }
];

console.log(array[0] += "pogi");
console.log(array[5] = "new string");
console.log(array);