const a ={num:1, valueOf:() => a.num +=1}
/*const a = {num:1, toString: () => a.num +=1}*/

if (a == 2 && a == 3) {
    console.log('How on earth did you get here?');
}
