//Q1

// let x=250;
// document.write(x*2.5);







//Q2 Correct the syntax error
//  [ 1,7  ,9,  45 ];

//  ["Str", "alex","moh",'the','fox' ,'over', 'lazy', 'dog'  ];








//Q3
//What the index of "Banana","Tomato"
//  var fruits=["Tomato","Banana","Watermelon"]

// for(let i=0;i<fruits.length;i++)
// {
//     if(fruits[i]=="Banana")
//       document.write(i);

//     if(fruits[i]=="Tomato")
//       document.write(i);
// }









/*
Q3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/

// var FavoriteFood = ["mansaf","tomatto"];
// var FavoriteSport =["Football","Tennis"];
// var FavoriteMovie = ["theHangerGame","scapePlane"];










/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/


// var arr1 = [1,4,5];
// var first = arr1[0];

// var arr2 = ["t","u","g","x"];
// var first1 = arr2[0];






/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

//  var arr1 = [1,4,5];
// for(let i=0;i<arr1.length;i++)
//     if(i==arr1.length-1)
//     document.write(arr1[i]);


// var arr2 = ["t","u","g","x"];
// for(let i=0;i<arr2.length;i++)
//      if(i==arr2.length-1)
//         document.write(arr2[i]);




/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/



// var arr = [0,5,7,9]
// arr.shift();
// arr.shift();
// arr.shift();
// arr.unshift(8);
// arr.unshift(6);
// arr.unshift(4);
// arr.unshift(3);
// arr.unshift(1);
// arr.push(10);



// document.write(arr);




//Q7
// var arr = [];
// arr.unshift(5);
// arr.push(9);
// arr.push(-7);
// arr.push(3.5);

// document.write(arr);




/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

// var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// arr1.sort(function(a, b) {return a - b;});
// document.write(arr1);


// var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// for (let i = 0; i < arr1.length; i++) 
// {
//   for (let j = 0; j < arr1.length - 1; j++) 
// {
//     if (arr1[j] > arr1[j + 1]) 
// {
//       let temp = arr1[j];
//       arr1[j] = arr1[j + 1];
//       arr1[j + 1] = temp;
// }
// }
// }
// document.write(arr1);





//Q9
// let x = window.prompt("Enter");

// document.write(fun(x));


// function fun(x)
// {
//     if(x>=50 || x<=59)
//         return "E";

//     else if(x>=60 || x<=69)
//         return "D";

//     else if(x>=70 || x<=79)
//         return "C";

//     else if(x>=80 || x<=89)
//         return "B";

//     else if(x>=90 || x<=100)
//         return "A";

//     else
//     return "Fail";
// }



//Q10
// for (let i = 1; i <= 8; i++) 
// { 
//     let row = ""; 
//     for (let j = 1; j <= i; j++) 
//     { 
//         document.write(j); 
//     }
//     document.write("<br>")
    
// }





// let n = window.prompt("enter");

// document.write(factorial(n));





// function factorial(num) {
    
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }

// function factorial(n) {

//     let result = 1;
//     for(let i=1;i<=n;i++)
//     {
//         result = n*(n-i);
//     }

//      return result
//   }
  
  







