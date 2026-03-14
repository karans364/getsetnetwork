import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient({})

async function main() {
  const products = [
    { image: '/icon/p1.jpg', name: 'Board', price: '₹ 5000', description: 'High quality board' },
    { image: '/icon/p2.jpg', name: 'Cable', price: '₹ 50', description: 'Durable connection cable' },
    { image: '/icon/p3.jpg', name: 'Pen drive', price: '₹ 400', description: 'Fast USB storage' },
    { image: '/icon/p4.jpg', name: 'RAM', price: '₹ 1800', description: 'High speed memory' },
    { image: '/icon/p5.jpg', name: 'CPU', price: '₹ 8500', description: 'Powerful processor' },
    { image: '/icon/p6.jpg', name: 'Hard drive', price: '₹ 3200', description: 'Large capacity storage' },
    { image: '/icon/p7.jpg', name: 'Cabinet', price: '₹ 3000', description: 'Sturdy PC case' },
    { image: '/icon/p8.jpg', name: 'Combo', price: '₹ 10000', description: 'PC builder combo package' },
    { image: '/icon/p9.jpg', name: 'Graphic Card', price: '₹ 2500', description: 'Dedicated graphics' },
    { image: '/icon/p10.jpg', name: 'Cartridge', price: '₹ 3800', description: 'Printer ink cartridge' },
    { image: '/icon/p11.jpg', name: 'UPS', price: '₹ 5000', description: 'Battery backup supply' },
    { image: '/icon/p12.jpg', name: 'Mouse', price: '₹ 350', description: 'Ergonomic optical mouse' },
  ]

  console.log(`Start seeding ...`)
  for (const p of products) {
    const product = await prisma.product.create({
      data: p,
    })
    console.log(`Created product with id: ${product.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
