import { supabase } from '../../utils/supabase'
import path from 'path'
import { randomUUID } from 'crypto'

export default defineEventHandler(async (event) => {
  try {
    const formData = await readMultipartFormData(event)
    
    if (!formData || formData.length === 0) {
      throw createError({ statusCode: 400, statusMessage: 'No file uploaded' })
    }

    const file = formData.find((item) => item.name === 'file')
    
    if (!file || !file.data) {
      throw createError({ statusCode: 400, statusMessage: 'Invalid file format' })
    }
    
    // Get original filename extension
    const originalFilename = file.filename || 'uploaded_image'
    const extension = path.extname(originalFilename) || '.jpg'
    const uniqueFilename = `${randomUUID()}${extension}`
    
    // Upload to Supabase Storage bucket named 'products'
    const { data, error } = await supabase.storage
      .from('products')
      .upload(uniqueFilename, file.data, {
        contentType: file.type || 'image/jpeg',
        cacheControl: '3600',
        upsert: false
      })
      
    if (error) {
      console.error('Supabase storage upload error:', error)
      throw createError({ statusCode: 500, statusMessage: 'Error uploading image to storage' })
    }
    
    // Get the public URL
    const { data: urlData } = supabase.storage
      .from('products')
      .getPublicUrl(data.path)
      
    return {
      success: true,
      url: urlData.publicUrl
    }
    
  } catch (error: any) {
    console.error('File upload error:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Error uploading file',
    })
  }
})
