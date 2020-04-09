//segitiga siku
for(var triangle = 1; triangle <= 5; triangle++) {
      var b = '';
      for(var d = 1; d <= triangle; d++) {
        var b = b + '*';
      }
      console.log(b);
    }
	
console.log("\n");
	
//segitiga siku kebalik
for(var triangle = 5; triangle > 0; triangle--) {
      var b = '';
      for(var c = 1; c <= triangle; c++) {
        var b = b + '*';
      }
      console.log(b);
    }
	
console.log('\n');

//segitiga piramida
 for (var triangle=1;triangle<=5;triangle++){
		var b = '';
        for (var c=triangle;c<=5;c++){
           var b= b+ '_';
        }
        for (var a=1;a<=triangle;a++){
            var b= b+ '*';	
        }
        for (var d=1;d<=triangle-1;d++){
            var b=b +'*';
        }
        console.log(b);
    }
	
console.log('\n');

//segitiga siku beda sisi
for (var triangle=1;triangle<=5;triangle++){
		var x = '';
        for (var y=triangle;y<=5;y++){
             var x= x+ '_';
        }
        for (var z=1;z<=triangle;z++){
             var x= x+ '*';
        }
        console.log(x);
    }
	
console.log('\n');

//segitiga siku kebalik sisi lain
    for (var triangle=1;triangle<=5;triangle++){
		var m = '';
        for (var n=1;n<=triangle;n++){
            var m= m+ '_';
        }
        for (var o=triangle;o<=5;o++){
            var m= m+ '*';
        }
        console.log(m);
    }
	
console.log('\n');

//segitiga piramida tumplek
for (var triangle=1;triangle<=5;triangle++){
	var h = '';
        for (var i=1;i<=triangle;i++){
             var h= h+ '_';
        }
        for (var j=triangle;j<=5;j++){
            var h= h+ '*';
        }
        for (var k=triangle+1;k<=5;k++){
            var h= h+ '*';
        }
         console.log(h);
    }