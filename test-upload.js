import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

async function testUpload() {
  const dummyBuffer = Buffer.from('hello world', 'utf-8')
  
  console.log('Testing upload of a dummy buffer...')
  const { data, error } = await supabase.storage
    .from('products')
    .upload('test.txt', dummyBuffer, {
      contentType: 'text/plain',
      upsert: true
    })
    
  if (error) {
    console.error('Upload Error:', error)
  } else {
    console.log('Upload Success:', data)
  }
}

testUpload()
