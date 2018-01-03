//creating a function to create  list of students of a classroom with their images
function iphoneShow() {
  $("display").click(function(){
    $("this").hide();
});
function iphonesList(image, model, year, cost,){
this.image = image
this.model = model
this.year = year
this.cost = cost
};
//Empty array to push list of all the students
var iphoneArr = [];
//list of objects with their properties
var Iphone1 = new iphonesList("img/image1.jpg", "Iphone 3", "2007", "$499-$599");
var Iphone2 = new iphonesList("img/image2.jpg", "Iphone 3G", "2009", "$299-$399");
var Iphone3 = new iphonesList("img/image3.jpg", "Iphone 3GS", "2010", "$499-$599");
var Iphone4 = new iphonesList("img/image4.jpg", "Iphone 4", "2011", "$499-$599");
var Iphone5 = new iphonesList("img/image5.jpg", "Iphone 4s", "2012", "$499-$599");
var Iphone6 = new iphonesList("img/image6.jpg", "Iphone 5", "2013", "$499-$599");
var Iphone7 = new iphonesList("img/image7.jpg", "IPhone 5c", "2014", "$499-$599");
var Iphone8 = new iphonesList("img/image8.jpg", "Iphone 5s", "2014", "$499-$599");
var Iphone9 = new iphonesList("img/image9.jpg", "Iphone SE","2016", "$499-$599" );
var Iphone10 = new iphonesList("img/image10.jpg", "IPhone 6", "2015", "$699");
var Iphone11 = new iphonesList("img/image11.jpg", "Iphone 6 plus", "2015", "$749");
var Iphone12 = new iphonesList("img/image12.jpg", "Iphone 6s", "2016", "$799");
var Iphone13 = new iphonesList("img/image13.jpg", "Iphone 6splus", "2016", "$849");
var Iphone14 = new iphonesList("img/image14.jpg", "Iphone 7", "2016", "$799");
var Iphone15 = new iphonesList("img/image15.jpg", "Iphone 7plus", "2016", "$899");
var Iphone16 = new iphonesList("img/image16.jpg", "Iphone 8", "2017", "$699");
var Iphone17 = new iphonesList("img/image17.jpg", "Iphone X", "2017", "$999");

iphoneArr.push(Iphone1,Iphone2,Iphone3,Iphone4,Iphone5,Iphone6,Iphone7,Iphone8,Iphone9,Iphone10,Iphone11,Iphone12,Iphone13,Iphone14,Iphone15,Iphone16,Iphone17);
//creating a for loop to loop through the list of Iphones)
for(i= 0; i < iphoneArr.length; i++){
	//parent element to target and display the new student list in HTMl
	var parent = document.getElementById("phones")
	//creating elements to display the property of students /to send to parent
	var newDiv = document.createElement('div')

	var image = document.createElement("img")
//image.setAttribute("src", "img/image1.jpg");
//image.setAttribute("height", "100");
//image.setAttribute("width", "100");
//image.setAttribute("alt", "Iphone");
	var  model = document.createElement("p")
	var year = document.createElement("p")
	var cost = document.createElement("P")
	var btn = document.createElement('button')

	image.className = "img-responsive"
	btn.type = "button";
	btn.textContent = "Buy Now";
	btn.className = "btn btn-lg btn-primary"
	btn.id ="buybtn";

	

	 image.src = iphoneArr[i].image
	//creating textnodes for the elements
	
	var modelText = document.createTextNode("Model: "+iphoneArr[i].model);
	var yearText = document.createTextNode("Year of Production: "+iphoneArr[i].year);
	var costText = document.createTextNode("Cost: "+ iphoneArr[i].cost);
	//sending these created items to the newly created div
    
    model.appendChild(modelText);
    year.appendChild(yearText);
    cost.appendChild(costText);
    //sending the new elementds to the div
    newDiv.appendChild(image);
    newDiv.appendChild(model);
    newDiv.appendChild(year);
    newDiv.appendChild(cost);
    newDiv.appendChild(btn);
    //sending the div to the parent element in the html page
    parent.appendChild(newDiv)

    btn.addEventListener('click', disappear, false);
}

 function disappear() {
 	alert("Sorry not for Sale!");
	 	console.log('this function ran!!');
	 };

	};
 
//console.log the  array
//console.log(iphoneArr);
