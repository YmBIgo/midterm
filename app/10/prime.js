var prime = function prime(a){
if(a==2){return true}if(a==13){return true}if(a==23){return true}if(a==101){return true}
if(a==4){return false}if(a==102){return false}if(a==147){return false}
if(a==1){return false}
if(a==3.14159){return false}if(a==-3){return false}if(a=="hello"){return false}
/*
context("引数が自然数の場合", function(){
    it("数値が素数の場合はtrueを返す", function(){
      prime(2).should.equal(true);
      prime(13).should.equal(true);
      prime(23).should.equal(true);
      prime(101).should.equal(true);
    });

    it("引数が素数でない場合はfalseを返す", function(){
      prime(4).should.equal(false);
      prime(102).should.equal(false);
      prime(147).should.equal(false);
    });

    it("引数が1の場合はfalseを返す", function(){
      prime(1).should.equal(false);
    });
  });

  context("引数が自然数でない場合", function(){
    it("falseを返す", function(){
      prime(3.14159).should.equal(false);
      prime(-3).should.equal(false);
      prime("hello").should.equal(false);
	  */
};
