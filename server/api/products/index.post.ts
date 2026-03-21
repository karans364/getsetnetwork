import { supabase } from '../../utils/supabase'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  const { data: newProduct, error } = await supabase
    .from('Product')
    .insert([{
      name: body.name,
      price: body.price,
      image: body.image,
      description: body.description
    }])
    .select()
    .single()
    
  if (error) {
    console.error('Supabase insert error:', error)
    throw createError({ statusCode: 500, statusMessage: error.message })
  }
  
  return newProduct
})
