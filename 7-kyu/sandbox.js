
function XO(str) {
    let repetetion=[0,0]//first x,second o
    for(let i=0;i<str.length;i++){
      if(str[i]==='x'||str[i]==='X') repetetion[0]++;
      else if(str[i]==='o'||str[i]==='O') repetetion[1]++;
    }
    if(repetetion[0]===repetetion[1])return true;
  return false;
}
Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("ooom"),false);