var req = new XMLHttpRequest();
var method = "POST";
var url = "https://elevate-be-staging.azurewebsites.net/best-of-luck.php";

req.open(method, url);

var sub_code = [];
var sub_name = [];

req.onload = function () {
  var json_object = JSON.parse(JSON.parse(req.responseText));
  console.log(json_object);
  var i=0;
  var j=1;
  while(i<json_object.length-1){
    if(json_object[i].subCode_dept_sem==json_object[j].subCode_dept_sem){
      if((json_object[i].source="super") || (json_object[j].source=="super")){
        sub_name.push(json_object[i].subject_name);
        sub_code.push(json_object[i].subject_code);
      }
    }else{
      sub_name.push(json_object[i].subject_name);
      sub_code.push(json_object[i].subject_code);
    }
    i=i+1;
    j=j+1;
  };
  console.log(sub_name);
  console.log(sub_code);

  for (i = 0; i < sub_code.length; i++) {
    document.getElementById("subcode_drop").innerHTML += sub_code[i];
  }
  for (i = 0; i < sub_name.length; i++) {
    document.getElementById("subname_drop").innerHTML += sub_name[i];
  }
}
  


req.send();