var mails=[{'from':'asdadsa','from_email':'asdasdasdasd','subject':'asdcasdcasdcasd','body':'asdfasdfasdf'}];
var tags=['inbox','draft','sent'];
window.onload=init;
function init(){
}
function populate(){
	var mailbox=document.getElementById("mails");
	for(var i=0; i<mails.length;i++){
		document.createElement("span");
	}
}