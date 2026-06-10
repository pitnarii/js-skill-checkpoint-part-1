// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
/*
-edit quantity of Apples from 100 => 200;
-add new item "orange" to inventory, price: 20, quantity: 300
-find a total value of inventory: Total(amount*price) 
-console.log("มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก 13500 บาท")  
*/

inventory[0].quantity = 200;
inventory.push({ name: "Orange", price: 20, quantity: 300 });
console.log(inventory);
function sumOfInventory(inventory) {
  let totalPrice = 0
  for (let items of inventory) {
    totalPrice += items.quantity * items.price
  }
  return `มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalPrice} บาท`;
}
console.log(sumOfInventory(inventory));
