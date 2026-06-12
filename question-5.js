// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
/*function calculateTotalPrice(products, promotionCode)
return มูลค่ารวมของจำนวนสินค้าทั้งหมดในตะกร้าสินค้า
TotalPrice = SUM(price*quantity)
promotioCode : SALE20 -> 20% off from totalPrice 
console.log(ถ้า promotionCode มีค่าเป็น "" ฟังก์ชันจะ Return ค่า 85)
consolg.log(ถ้า promotionCode มีค่าเป็น "SALE20" ฟังก์ชันจะ Return ค่า 68)
*/


function calculateTotalPrice(products, promotionCode) {
  let totalPrice = 0
  let calculatePrice;
  for (let item of products) {
    totalPrice += item.price * item.quantity;
  }
  if (promotionCode === "SALE20") {
    calculatePrice = totalPrice * 0.8;
  } else if (promotionCode === "SALE50") {
    calculatePrice = totalPrice * 0.5;
  } else {
    calculatePrice = totalPrice;
  }

  return calculatePrice
}

console.log(calculateTotalPrice(products, "SALE20"))
console.log(calculateTotalPrice(products, "SALE50"))
console.log(calculateTotalPrice(products, ""))