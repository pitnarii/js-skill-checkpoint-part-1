// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
/*add object id:5, todo:"Walk the dog"
edit object id: 4 todo:"Go to the gym"
delete last ob in array
console.log
bring last obj and change to "To-do id: <ค่าของ id>, <ค่าของ todo>" then console.log
*/ 
function editTodo(myTodo) {
  myTodo.push({id: 5, todo: "Walk the dog"});
  myTodo[3].todo = "Go to the gym";
  delete myTodo[4]
  return `To-do id: ${myTodo[3].id}, ${myTodo[3].todo}`
}
console.log(editTodo(myTodo))