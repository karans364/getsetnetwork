export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    const product = await prisma.product.create({
      data: {
        name: body.name,
        price: body.price,
        image: body.image,
        description: body.description || '',
      },
    })
    
    return product
  } catch (error) {
    console.error(error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Error creating product',
    })
  }
})
