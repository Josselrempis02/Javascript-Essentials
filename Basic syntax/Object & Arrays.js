var car = {
    color : "red",
    speed : 200,
    drive : function(){return "drive"; }
};

var shoppinglist = [
    "Apple",
    "Orange",
    "Pearl"
]

// Embedding objects & arrays
var car = {
    make: "volvo",
    speed: 200,
    engine: {
        size: 2.0,
        make: "toyota",
        fuel: "v-power",
        piston: ["piston1, piston2"]
    },
    drive : function(){ return "drive"; }
};
 

var array = [
    "string",
    100,
    ["embed", 200 ],
    {car: "ford"},
    function(){ return "drive"; }
]

// Member Access

var car = {
    make: "volvo",
    speed: 200,
    engine: {
        size: 2.0,
        make: "toyota",
        fuel: "v-power",
        piston: [
            {maker: "ford"},
            {maker: "bmw"}
        ]
    },
    drive : function(){ return "drive"; }
};
 

var array = [
    "string",
    100,
    ["embed", 200 ],
    {car: "ford"},
    function(){ return "drive"; }
];
console.log(car.make);


// Computed member access
var car = {
    make: "volvo",
    speed: 200,
    engine: {
        size: 2.0,
        make: "toyota",
        fuel: "v-power",
        piston: [
            {maker: "ford"},
            {maker: "bmw"}
        ]
    },
    drive : function(){ return "drive"; }
};
 

var array = [
    "string",
    100,
    ["embed", 200 ],
    {car: "ford"},
    function(){ return "drive"; }
];
console.log(car.engine.piston[0].maker);
console.log(array[4]());

//Member Creation, Assignment & Deletion

var car = {
    make: "volvo",
    speed: 200,
    engine: {
        size: 2.0,
        make: "toyota",
        fuel: "v-power",
        piston: [
            {maker: "ford"},
            {maker: "bmw"}
        ]
    },
    drive : function(){ return "drive"; }
};
 

var array = [
    "string",
    100,
    ["embed", 200 ],
    {car: "ford"},
    function(){ return "drive"; }
];

// console.log(car.make = "ford");
// console.log(car);
// console.log(car.make += 200);
// console.log(car.drive = "ford");
// console.log(car.model = "v60");
console.log(delete car.make);
console.log(car);