// import react from '@vitejs/plugin-react'
// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss(),
// ],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    watch: {
      usePolling: true,       // ফাইল ট্র্যাক করার জন্য ফাইল সিস্টেমকে বারবার পোল করবে
      interval: 500,          // প্রতি ৫০০ মিলিসেকেন্ড পর পর পরিবর্তন চেক করবে
    },
  },
  optimizeDeps: {
    exclude: ['@tailwindcss/vite'], // এই প্লাগইনটিকে ক্যাশ থেকে আলাদা রাখবে যেন HMR ব্রেক না হয়
  },
})
