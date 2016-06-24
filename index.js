function names(str) {
    var cut = str.split(", ").map(function(v){
      return v;
    });
    var obj = {};
    for(var i=0; i < 3; i++){

    var firstLast = cut[i].split(' ');

    var first = firstLast[0];
    var last = firstLast[1];  

      obj[first] = last;
     // console.log(obj);
    } 
  return obj;
}

 var results = names("George Washington, John Adams, Kanye West");

var results = names("George Washington, John Adams, Kanye West");
console.assert(results.George === "Washington");
console.assert(results['John'] === "Adams");
console.assert(results['Kanye'] === "West");