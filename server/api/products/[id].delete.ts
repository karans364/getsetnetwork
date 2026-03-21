import { supabase } from '../../../utils/supabase'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) {
     throw createError({ statusCode: 400, statusMessage: 'Product ID is required' })
  }
  
  const { error } = await supabase
    .from('Product')
    .delete()
    .eq('id', Number(id))
    
  if (error) {
    console.error('Supabase delete error:', error)
    throw createError({ statusCode: 500, statusMessage: error.message })
  }
  
  return { success: true }
})
