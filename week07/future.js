var job= ["Singer", 'Programmer', 'Football Player',"Proprietor"];
var city= ['Dallas', 'London', 'Madrid',"Austin"];
var spouse= ["Amanda",'Elizabeth',"Jennifer","Amber"];
var numKids = [4, 2, 7, 13]


var x = Math.floor(Math.random() * 4)

function fortune(job, city, spouse, numKids) {
document.write("You will be a " + job + " in " + city + ", and married to " + spouse + " with " + numKids + " kids.");
}

fortune(job[x], city[x], spouse[x], numKids[x])
