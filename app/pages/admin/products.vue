<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <div>
        <h2 class="text-2xl font-bold text-gray-800">Product Management</h2>
        <p class="text-gray-500 text-sm mt-1">Add, edit, or remove products from your store.</p>
      </div>
      <button @click="openModal()" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition flex items-center gap-2 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        New Product
      </button>
    </div>

    <!-- Products Table -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div v-if="pending" class="p-10 text-center text-gray-500 flex flex-col items-center">
        <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mb-4"></div>
        <p>Loading products...</p>
      </div>
      
      <div v-else-if="error" class="p-10 text-center text-red-500">
        <p>Error loading products. Please try again.</p>
      </div>

      <div v-else-if="products?.length === 0" class="p-10 text-center text-gray-500">
        <p>No products found. Add your first product!</p>
      </div>

      <table v-else class="w-full text-left border-collapse">
        <thead class="bg-gray-50 text-gray-600 text-sm uppercase tracking-wider border-b border-gray-200">
          <tr>
            <th class="p-4 font-semibold">Image</th>
            <th class="p-4 font-semibold">Product Name</th>
            <th class="p-4 font-semibold">Price</th>
            <th class="p-4 font-semibold text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr v-for="product in products" :key="product.id" class="hover:bg-gray-50 transition">
            <td class="p-4">
              <img :src="product.image" :alt="product.name" class="w-12 h-12 object-cover rounded shadow-sm border border-gray-200 bg-white" />
            </td>
            <td class="p-4 font-medium text-gray-800">{{ product.name }}</td>
            <td class="p-4 text-gray-600">{{ product.price }}</td>
            <td class="p-4 text-right space-x-2">
              <button @click="openModal(product)" class="text-blue-600 hover:bg-blue-50 px-3 py-1 rounded transition text-sm font-medium">Edit</button>
              <button @click="confirmDelete(product)" class="text-red-600 hover:bg-red-50 px-3 py-1 rounded transition text-sm font-medium">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Add/Edit Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <h3 class="text-lg font-bold text-gray-800">{{ editingProduct ? 'Edit Product' : 'Add New Product' }}</h3>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="padding-6 overflow-y-auto p-6 flex-1 space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
            <input v-model="formData.name" type="text" class="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="e.g. Graphic Card" />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Price (with currency)</label>
            <input v-model="formData.price" type="text" class="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="e.g. ₹ 2500" />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
            
            <div v-if="formData.image" class="mb-3 relative inline-block">
              <img :src="formData.image" class="h-32 w-32 object-cover rounded-lg border border-gray-200" />
              <button @click="formData.image = ''" class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <label v-else class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition relative">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg v-if="isUploading" class="animate-spin h-8 w-8 text-blue-500 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <svg v-else class="w-8 h-8 mb-2 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">{{ isUploading ? 'Uploading...' : 'Click to upload image' }}</span></p>
                <p class="text-xs text-gray-500">PNG, JPG or JPEG</p>
              </div>
              <input type="file" class="hidden" accept="image/*" @change="handleFileUpload" :disabled="isUploading" />
            </label>
            <input type="hidden" v-model="formData.image" />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Description (Optional)</label>
            <textarea v-model="formData.description" rows="3" class="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="Brief description of the product..."></textarea>
          </div>
        </div>

        <div class="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
          <button @click="closeModal" class="px-5 py-2.5 text-gray-600 font-medium hover:bg-gray-200 rounded-lg transition">Cancel</button>
          <button @click="saveProduct" :disabled="isSaving" class="px-5 py-2.5 bg-blue-600 text-white font-medium hover:bg-blue-700 rounded-lg transition disabled:opacity-50 flex items-center gap-2">
            <span v-if="isSaving" class="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
            {{ isSaving ? 'Saving...' : 'Save Product' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="productToDelete" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-xl shadow-2xl w-full max-w-sm overflow-hidden text-center p-6">
        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
          <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 class="text-lg font-bold text-gray-900 mb-2">Delete Product</h3>
        <p class="text-sm text-gray-500 mb-6">Are you sure you want to delete <strong>{{ productToDelete.name }}</strong>? This action cannot be undone.</p>
        
        <div class="flex gap-3 justify-center">
          <button @click="productToDelete = null" class="px-4 py-2 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition w-full">Cancel</button>
          <button @click="deleteProduct" :disabled="isDeleting" class="px-4 py-2 bg-red-600 text-white font-medium hover:bg-red-700 rounded-lg transition disabled:opacity-50 w-full flex items-center justify-center gap-2">
             <span v-if="isDeleting" class="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
            {{ isDeleting ? 'Deleting...' : 'Delete' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'admin',
  title: 'Products',
  middleware: 'admin-auth'
})

// Data fetching
const { data: products, pending, error, refresh } = useFetch('/api/products')

// Modal State
const isModalOpen = ref(false)
const isSaving = ref(false)
const isUploading = ref(false)
const editingProduct = ref(null)

const formData = ref({
  name: '',
  price: '',
  image: '',
  description: ''
})

// Delete State
const productToDelete = ref(null)
const isDeleting = ref(false)

// Actions
const openModal = (product = null) => {
  editingProduct.value = product
  if (product) {
    formData.value = { ...product }
  } else {
    formData.value = { name: '', price: '', image: '', description: '' }
  }
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  editingProduct.value = null
  isUploading.value = false
}

const handleFileUpload = async (event) => {
  const file = event.target.files[0]
  if (!file) return
  
  const uploadData = new FormData()
  uploadData.append('file', file)
  
  isUploading.value = true
  
  try {
    const res = await $fetch('/api/upload', {
      method: 'POST',
      body: uploadData
    })
    
    if (res && res.url) {
      formData.value.image = res.url
    }
  } catch (err) {
    console.error('Upload failed:', err)
    alert('Failed to upload image. Please try again.')
  } finally {
    isUploading.value = false
    // Reset the input so the same file could be selected again if needed
    event.target.value = ''
  }
}

const saveProduct = async () => {
  if (!formData.value.name || !formData.value.price || !formData.value.image) {
    alert('Name, price, and image are required.')
    return
  }
  
  isSaving.value = true
  
  try {
    if (editingProduct.value) {
      // Update existing
      await $fetch(`/api/products/${editingProduct.value.id}`, {
        method: 'PUT',
        body: formData.value
      })
    } else {
      // Create new
      await $fetch('/api/products', {
        method: 'POST',
        body: formData.value
      })
    }
    
    await refresh()
    closeModal()
  } catch (err) {
    console.error('Error saving product:', err)
    alert('Failed to save product.')
  } finally {
    isSaving.value = false
  }
}

const confirmDelete = (product) => {
  productToDelete.value = product
}

const deleteProduct = async () => {
  if (!productToDelete.value) return
  
  isDeleting.value = true
  
  try {
    await $fetch(`/api/products/${productToDelete.value.id}`, {
      method: 'DELETE'
    })
    await refresh()
    productToDelete.value = null
  } catch (err) {
    console.error('Error deleting product:', err)
    alert('Failed to delete product.')
  } finally {
    isDeleting.value = false
  }
}
</script>
