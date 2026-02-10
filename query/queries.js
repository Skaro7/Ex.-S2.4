
// 1- Escriu una consulta per mostrar tots els documents en la col·lecció Restaurants.
db.Restaurants.find();

// 2- Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine per tots els documents en la col·lecció Restaurants.
db.Restaurants.find({}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1});

// 3. Mostrar el restaurant_id, name, borough i cuisine.
db.Restaurants.find({}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0});

// 4. Mostrar restaurant_id, name, borough i zip code.
db.Restaurants.find({}, {restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1, _id: 0});

// 5. Mostrar tots els restaurants que estan en el Bronx.
db.Restaurants.find({borough: "Bronx"});

// 6. Mostrar els primers 5 restaurants que estan en el Bronx.
db.Restaurants.find({borough: "Bronx"}).limit(5);

// 7. Mostrar el pròxims 5 restaurants després de saltar els primers 5 del Bronx.
db.Restaurants.find({borough: "Bronx"}).skip(5).limit(5);

// 8. Trobar els restaurants amb un score de més de 90.
db.Restaurants.find({"grades.score": {$gt: 90}});

// 9. Trobar els restaurants amb un score de més de 80 però menys que 100.
db.Restaurants.find({"grades.score": {$gt: 80, $lt: 100}});

// 10. Trobar els restaurants amb longitud menor que -95.754168.
db.Restaurants.find({"location.coordinates.0": {$lt: -95.754168}});

// 11. Trobar restaurants que no preparen 'American', amb qualificació > 70 i longitud < -65.754168.
db.Restaurants.find({
    $and: [
        {cuisine: {$ne: "American"}},
        {"grades.score": {$gt: 70}},
        {"location.coordinates.0": {$lt: -65.754168}}
    ]
});

// 12. El mateix que l'anterior però sense usar operador $and.
db.Restaurants.find({
    cuisine: {$ne: "American"},
    "grades.score": {$gt: 70},
    "location.coordinates.0": {$lt: -65.754168}
});

// 13. Trobar restaurants que no són 'American', grau 'A', i no són de Brooklyn. Ordenats per cuisine descendent.
db.Restaurants.find({
    cuisine: {$ne: "American"},
    "grades.grade": "A",
    borough: {$ne: "Brooklyn"}
}).sort({cuisine: -1});

// 14. Trobar restaurant_id, name, borough i cuisine on el nom comença amb 'Wil'.
db.Restaurants.find(
    {name: {$regex: /^Wil/}},
    {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0}
);

// 15. Trobar restaurant_id, name, borough i cuisine on el nom acaba en 'ces'.
db.Restaurants.find(
    {name: {$regex: /ces$/}},
    {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0}
);

// 16. Trobar restaurant_id, name, borough i cuisine on el nom conté 'Reg'.
db.Restaurants.find(
    {name: {$regex: /Reg/}},
    {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0}
);

// 17. Trobar restaurants del Bronx que preparen cuina americana o xinesa.
db.Restaurants.find({
    borough: "Bronx",
    cuisine: { $in: ["American", "Chinese"] }
});
