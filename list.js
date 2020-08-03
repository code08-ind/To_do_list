var todos=[];
var input=prompt("what will you like to do?");
while(input !== "quit"){
	//handle input
if (input=== "list"){
	//display the all todos
	listTodos();
}//console.log("connected")
else if(input=="new"){
	//enter the new todo
	addTodos();
}else if(input==="delete"){
	deleteTodos();
}
//ask again for new input
input=prompt("what will you like to do?");
}console.log("ok, quit the app");

function listTodos(){
	console.log("**********");
	todos.forEach(function(todo,i){//i is the index of the number which will be printed in the console
		console.log(i+": "+todo);
	});
	console.log("**********");
}
function addTodos(){
	var newtodo=prompt("Enter new todo");
	//push the todos to the array
	todos.push(newtodo);
	console.log("Added the todo");
}
function deleteTodos(){
	//ask the user to delete which element with given element
	//ask the user the index of the element to which number should be deleted
	var index=prompt("Which element's index you need to delete?");
	//splice() method will be used to delete any element from an array
    todos.splice(index,1);// will delete the item related to the index and only one item will be deleted but if we put 10 in place of 1 we could 10 items after the index that has been mentioned away
	console.log("Item or the element is deleted!");
}