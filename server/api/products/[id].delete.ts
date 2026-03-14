export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Product ID is required',
      })
    }
    
    const product = await prisma.product.delete({
      where: {
        id: Number(id),
      },
    })
    
    return { success: true, message: 'Product deleted', product }
  } catch (error) {
    console.error(error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Error deleting product',
    })
  }
})
