import { supabase } from '../../utils/supabase'

export default defineEventHandler(async () => {
  const { data: products, error } = await supabase
    .from('Product')
    .select('*')
    .order('createdAt', { ascending: false })
    
  if (error) {
    console.error('Supabase fetch error:', error)
    throw createError({ statusCode: 500, statusMessage: error.message })
  }
  
  return products || []
})
