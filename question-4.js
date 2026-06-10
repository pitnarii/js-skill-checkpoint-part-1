// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
/*
-find lowest quantity in inventory
-console.log(สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Banana ซึ่งมี 50 ชิ้น)
or if inventory quantities has changed then the result will change according to quantities numbers
*/
console.log(inventory[0].quantity);
let count =0
for (let items of inventory) {
  console.log(items.quantity);
  if (count.quantity < items.quantity) {
    count = count.quantity
  } 
}
console.log(count);
// console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${inventory.name} ซึ่งมี ${inventory.quantity} ชิ้น`)


