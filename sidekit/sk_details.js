// JavaScript Document
function unhide(id) {
	var show = document.getElementById(id);
	var clearContent = new Array('details_content', 'specs_content', 'reviews_content');
	
		for(var i = 0; i < clearContent.length;  i++) {
			//var tempId = clearContent[i];
			//alert(tempId);
			var currentId = document.getElementById(clearContent[i]);
	
			if (currentId.className = 'unhidden') {
				
				currentId.className = 'hidden';
				
			}
		}
	
	if (show) {
		show.className = (show.className == 'hidden') ? 'unhidden' : 'hidden';
	}
	next();
} // END OF UNHIDE FUNCTION

function activeTab(id) {
	var active = document.getElementById(id);
	
	
	var clearTabs = new Array ('details' , 'specs', 'reviews');
		for( var i = 0; i < clearTabs.length; i++) {
			var currentTab = document.getElementById(clearTabs[i]);
			
				if (currentTab.className = 'showTab') {
					currentTab.className = ' ';
				}
		}
		
		if(active) {
			active.className = (active.className == 'showTab') ? '' : 'showTab';
		}
		
	
} // END OF ACTIVETAB FUNCTION


// List image names without extension
var myImg= new Array(3)
  myImg[0]= "sk1";
  myImg[1]= "sk2";
  myImg[2]= "sk3";
  myImg[3]= "sk4";


// Tell browser where to find the image
myImgSrc = "img/";

// Tell browser the type of file
myImgEnd = ".jpg"

var i = 0;

// Create function to load image
function loadImg(){
  document.productImg.src = myImgSrc + myImg[i] + myImgEnd;
}

// Create link function to switch image backward
function prev(){
  if(i<1){
    var l = i
  } else {
    var l = i-=1;
  }
//  if (l < 0) {
	//  l = 3;
  //}

  document.productImg.src = myImgSrc + myImg[l] + myImgEnd;
}

// Create link function to switch image forward
function next(){
  if(i>2){
    var l = i
  } else {
    var l = i+=1;
  }
//  if (l >= 4) {
	//  l = 0;
  //}
  document.productImg.src = myImgSrc + myImg[l] + myImgEnd;
}
