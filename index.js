

function receivesAFunction(callback){
   callback();
}
function returnsANamedFunction() {
   return function hello() {
      return "Hello.";
   }
   }
function returnsAnAnonymousFunction() { 
  return function(){
     console.log('I am anonymous.');
  }
  }