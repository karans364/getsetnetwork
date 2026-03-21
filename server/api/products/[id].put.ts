import { supabase } from '../../utils/supabase'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  
  if (!id) {
     throw createError({ statusCode: 400, statusMessage: 'Product ID is required' })
  }

  const { data: updatedProduct, error } = await supabase
    .from('Product')
    .update({
      name: body.name,
      price: body.price,
      image: body.image,
      description: body.description,
      updatedAt: new Date().toISOString()
    })
    .eq('id', Number(id))
    .select()
    .single()
    
  if (error) {
    console.error('Supabase update error:', error)
    throw createError({ statusCode: 500, statusMessage: error.message })
  }
  
  return updatedProduct
})
