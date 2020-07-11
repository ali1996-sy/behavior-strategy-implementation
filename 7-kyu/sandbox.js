
function XO(str) {
    let repetetion=[0,0]//first x,second o
    for(let i=0;i<str.length;i++){
      if(str[i]==='x'||str[i]==='X') repetetion[0]++;
      else if(str[i]==='o'||str[i]==='O') repetetion[1]++;
    }
    if(repetetion[0]===repetetion[1])return true;
  return false;
}
function friend(friends){
    let array=[];
    for(let value of friends){
      if(value.length===4)array.push(value);
    }
    return array
  }
Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("ooom"),false);
Test.assertSimilar(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
Test.assertSimilar(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
Test.assertSimilar(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]);
Test.assertSimilar(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);