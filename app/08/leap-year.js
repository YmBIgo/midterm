var leapYear = function leapYear(a){
if(typeof(a) == "number"){
if(a % 4 == 0){
if(a==0){
return false;
}
if(a % 100 != 0 && a % 400 != 0 ){
return true;
}else if(a % 100 == 0 && a % 400 != 0){
return false;
}else if(a % 400 == 0){
return true;
}else{
return true;
}
}else{
return false;
}
}else{
return false;
}
};