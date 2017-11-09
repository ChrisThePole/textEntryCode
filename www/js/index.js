/*$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
}); */           


var key = "text";
var value = ""

function submitText() {
	var text = $('#textinput').val();
	alert(text);
}


function storeValue(key, value) {
   window.localStorage.setItem(key, value);
   document.getElementById("test").innerHTML = localStorage.getItem("text"); 
}