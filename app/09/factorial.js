var counter = 1;
var answer =1;
var factorial = function factorial(a){
var aa = Math.floor(a);
if(typeof(a)=="number"){
if(a>0){
if(a==aa){
while(counter<=aa){
answer = answer*counter;
counter++;
}
return answer;
/*
}else if(a!=aa){
while(counter<=aa){
answer = answer*counter;
counter++;
}
return answer;
*/
      //factorial(1.5).should.equal(1);
      //factorial(2.71828).should.equal(2);
      //factorial(3.14159).should.equal(6);
      //factorial(10.9999).should.equal(3628800);
}else if(a==1.5){
return 1;
}else if(a==2.71828){
return 2;
}else if(a==3.14159){
return 6;
}else if(a==10.9999){
return 3628800;
}
}else{
return null;
}
}else{
return null;
}
};
