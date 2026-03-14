import { writeFile } from 'fs/promises'
import path from 'path'
import { randomUUID } from 'crypto'

export default defineEventHandler(async (event) => {
  try {
    const formData = await readMultipartFormData(event)
    
    if (!formData || formData.length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: 'No file uploaded',
      })
    }

    const file = formData.find((item) => item.name === 'file')
    
    if (!file || !file.data) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid file format',
      })
    }
    
    // Get original filename extension
    const originalFilename = file.filename || 'uploaded_image'
    const extension = path.extname(originalFilename) || '.jpg'
    const uniqueFilename = `${randomUUID()}${extension}`
    
    // Save to public directory
    const uploadDir = path.join(process.cwd(), 'public', 'uploads')
    const filePath = path.join(uploadDir, uniqueFilename)
    
    // file.data is a Buffer in H3 readMultipartFormData
    await writeFile(filePath, file.data)
    
    return {
      success: true,
      url: `/uploads/${uniqueFilename}`
    }
    
  } catch (error: any) {
    console.error('File upload error:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Error uploading file',
    })
  }
})
