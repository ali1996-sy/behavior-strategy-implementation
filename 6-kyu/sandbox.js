function tribonacci(signature,n){
  let triFib = [];
      triFib[0] = signature[0], triFib[1] = signature[1], triFib[2] = signature[2];
  for (let i = 3; i < n; i++) {
    triFib[i] = triFib[i-1] + triFib[i-2] + triFib[i-3];
  } 
  return (n < 3) ? signature.slice(0, n) : triFib;
}
function duplicateEncode(word){
    let wor=[];
    let text='';
    let found=false;
      for(let i=0;i<word.length;i++){
        for(let j=0;j<word.length;j++){
          if(word[i]===word[j]&&i!==j)
        found=true;
      }
      if(found){
         wor.push(')');}
        else{
         
         wor.push('(');
      }
        found=false;
      }
    for(let value of wor){
      text+=value;
    }
    return text;
  }
  function findMissingLetter(array)
{
  for(let i=0;i<array.length-1;i++){
    if(array[i].charCodeAt(0)+1!==array[i+1].charCodeAt(0))return  String.fromCharCode(array[i].charCodeAt(0)+1)
  }
  return ' ';
}
  ////test////
  describe("KataTests", function(){
    it("exampleTests", function(){
      Test.assertEquals(findMissingLetter(['a','b','c','d','f']), 'e');
      Test.assertEquals(findMissingLetter(['O','Q','R','S']), 'P');
    });
  });
  Test.assertEquals(duplicateEncode("din"),"(((");
Test.assertEquals(duplicateEncode("recede"),"()()()");
Test.assertEquals(duplicateEncode("(( @"),"))((");

Test.describe("Basic tests",function(){
    Test.assertSimilar(tribonacci([1,1,1],10),[1,1,1,3,5,9,17,31,57,105])
    Test.assertSimilar(tribonacci([0,0,1],10),[0,0,1,1,2,4,7,13,24,44])
    Test.assertSimilar(tribonacci([0,1,1],10),[0,1,1,2,4,7,13,24,44,81])
    Test.assertSimilar(tribonacci([1,0,0],10),[1,0,0,1,1,2,4,7,13,24])
    Test.assertSimilar(tribonacci([0,0,0],10),[0,0,0,0,0,0,0,0,0,0])
    Test.assertSimilar(tribonacci([1,2,3],10),[1,2,3,6,11,20,37,68,125,230])
    Test.assertSimilar(tribonacci([3,2,1],10),[3,2,1,6,9,16,31,56,103,190])
    Test.assertSimilar(tribonacci([1,1,1],1),[1])
    Test.assertSimilar(tribonacci([300,200,100],0),[])
    Test.assertSimilar(tribonacci([0.5,0.5,0.5],30),[0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5])
    })