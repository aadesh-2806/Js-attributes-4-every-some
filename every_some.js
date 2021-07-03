const numbes = [1,2,3,4,5,6,7,8,9,10,11,12,13]
numbes.every(score => score>=10)
//false
numbes.some(score => score>=10)
//true
numbes.some(score => score<-1)
//false

//////////////////////////////////////////////////////////////reduce/////////////////////////////////////////////

const prices = [9.99,8.99,1.5,19.99,40.99]
const totalPrice=prices.reduce((total,price)=> {
	return total+price
})
//total is like accumulator changing by return condition and price is changing through prices array
/*(method) Array<number>.reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number (+2 overloads)
Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

@param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

@param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. */

/////////////////////////////////////////////////////////////ArrowWithThis//////////////////////////////////////////////////

movies={
	    title:'abraham',
	    score: 99,
	    tis: function(){
		    return `${this.title} ${this.score}`
	    }
}
/*move.tis()
VM369:5 {title: "abraham", score: 99, tis: ƒ}
"abraham 99"*/
movie={
	    title:'abraham',
	    score: 99,
	    tis: () =>{
			console.log(this);
		    return `${this.title} ${this.score}`
	    }
}
/*movie.tis()
VM273:5 Window {window: Window, self: Window, document: document, name: "", location: Location, …}
"undefined undefined"*/
movie={
	title:'abraham',
	score: 99,
	tis:function () {
			setTimeout( () =>{
			console.log(this);
			return `${this.title} ${this.score}`;
		},3000)
	}
}
/*
undefined
VM563:6 {title: "abraham", score: 99, tis: ƒ}
/////////////////////////////////////////////////////because it behaves diff in error func/////////////////////////////////
*/

///////////////////////////////////////////default program/////////////////////////////////////////////////////////////////
function rollDie(num)
{
	if(num===undefined)
	{
		num=6;
	}
	return num;
}
//can also be done as 
function rollDie(num,a=1)				//so if a is undefined than we can asses it as 1
{
	return `${num},${a}`;
}

/*rollDie(1,2)
"1,2"
rollDie(1)
"1,1"
*/
//but
function rollDie(num=2,a)				//so if a is undefined than we can asses it as 1
{
	return `${num},${a}`;
}
//rollDie(1)
//"1,undefined"
//js cant identify it as 2 element
//so efault should come on last only