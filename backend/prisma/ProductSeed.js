
import {prisma} from '../src/config/db.js';
const products = [
  {
    name: "Laptop Dell Inspiron 15",
    description: "15-inch laptop with Intel i5 processor",
    brand: "Dell",
    category: "LAPTOP",
    status: "ACTIVE",
    price: 7500,
    stock: 12
  },
  {
    name: "iPhone 13",
    description: "Apple smartphone with A15 chip",
    brand: "Apple",
    category: "ACCESSORY",
    status: "INACTIVE",
    price: 11000,
    stock: 8
  },
  {
    name: "Samsung Galaxy S21",
    description: "Android flagship smartphone",
    brand: "Samsung",
    category: "ACCESSORY",
    status: "INACTIVE",
    price: 9500,
    stock: 10
  },
  {
    name: "Logitech Wireless Mouse",
    description: "Ergonomic wireless mouse",
    brand: "Logitech",
    category: "ACCESSORY",
    status: "ACTIVE",
    price: 250,
    stock: 50
  },
  {
    name: "HP LaserJet Printer",
    description: "High-speed monochrome printer",
    brand: "HP",
    category: "PRINTER",
    status: "ACTIVE",
    price: 1800,
    stock: 6
  },
  {
    name: "Office Desktop HP ProDesk",
    description: "Business desktop computer",
    brand: "HP",
    category: "DESKTOP",
    status: "ACTIVE",
    price: 5000,
    stock: 10
  },
  {
    name: "Gaming Desktop Asus ROG",
    description: "High-performance gaming PC",
    brand: "Asus",
    category: "DESKTOP",
    status: "ACTIVE",
    price: 14000,
    stock: 4
  },
  {
    name: "Acer Aspire 5",
    description: "Affordable laptop for daily tasks",
    brand: "Acer",
    category: "LAPTOP",
    status: "ACTIVE",
    price: 6000,
    stock: 9
  },
  {
    name: "Asus Gaming Laptop ROG",
    description: "High-performance gaming laptop",
    brand: "Asus",
    category: "LAPTOP",
    status: "ACTIVE",
    price: 15000,
    stock: 5
  },
  {
    name: "Canon PIXMA G3420",
    description: "All-in-one inkjet printer",
    brand: "Canon",
    category: "PRINTER",
    status: "ACTIVE",
    price: 2200,
    stock: 7
  },
  {
    name: "Sony WH-1000XM4",
    description: "Noise-cancelling headphones",
    brand: "Sony",
    category: "ACCESSORY",
    status: "OUT_OF_STOCK",
    price: 3200,
    stock: 20
  },
  {
    name: "External Hard Drive 1TB",
    description: "Portable USB 3.0 storage",
    brand: "Seagate",
    category: "ACCESSORY",
    status: "ACTIVE",
    price: 700,
    stock: 30
  },
  {
    name: "USB Flash Drive 64GB",
    description: "High-speed USB storage",
    brand: "SanDisk",
    category: "ACCESSORY",
    status: "OUT_OF_STOCK",
    price: 120,
    stock: 100
  },
  {
    name: "Dell Monitor 24 inch",
    description: "Full HD LED monitor",
    brand: "Dell",
    category: "ACCESSORY",
    status: "ACTIVE",
    price: 2200,
    stock: 11
  },
  {
    name: "Mechanical Keyboard RGB",
    description: "Gaming keyboard with RGB lighting",
    brand: "Redragon",
    category: "ACCESSORY",
    status: "ACTIVE",
    price: 450,
    stock: 25
  },
  {
    name: "Smart TV 55 inch 4K",
    description: "Ultra HD Smart TV",
    brand: "LG",
    category: "ACCESSORY",
    status: "ACTIVE",
    price: 9000,
    stock: 6
  },
  {
    name: "Router TP-Link AC1200",
    description: "Dual-band WiFi router",
    brand: "TP-Link",
    category: "ACCESSORY",
    status: "ACTIVE",
    price: 350,
    stock: 40
  },
  {
    name: "Webcam Full HD",
    description: "1080p webcam for video calls",
    brand: "Logitech",
    category: "ACCESSORY",
    status: "OUT_OF_STOCK",
    price: 300,
    stock: 18
  },
  {
    name: "Bluetooth Speaker JBL",
    description: "Portable wireless speaker",
    brand: "JBL",
    category: "ACCESSORY",
    status: "ACTIVE",
    price: 800,
    stock: 22
  },
  {
    name: "Graphics Card RTX 3060",
    description: "High-performance GPU for gaming",
    brand: "Nvidia",
    category: "ACCESSORY",
    status: "ACTIVE",
    price: 6500,
    stock: 3
  }
];


const main = async () =>{
    console.log('seeding data ...')
    
    for(const product of products){
        await prisma.product.create({
            data:product
        })

        console.log(`product created: ${product.name} `)
    }

    console.log(`${products.length} rows affected`)

}

main().catch(err=>{
    console.error(err)
    process.exit(1)
}).finally(async ()=>{
    await prisma.$disconnect();
})