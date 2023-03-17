import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-gray-900 text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="flex flex-col my-5">
        <h3 class="text-lg font-medium mb-4">Tentang Kami</h3>
        <p class="mb-2">Membuat Wep App dengan tujuan mulia dan untuk mengingatkan orang akan doa", asmaul husna, dan juga jadwal sholat</p>
      </div>
      <div class="flex flex-col my-5">
        <h3 class="text-lg font-medium mb-4">Layanan</h3>
        <ul class="list-none">
          <li class="mb-2"><a href="#">Pembuatan Website</a></li>
          <li class="mb-2"><a href="#">Pembuatan Aplikasi Mobile</a></li>
          <li class="mb-2"><a href="#">Desain Grafis</a></li>
        </ul>
      </div>
      <div class="flex flex-col my-5">
        <h3 class="text-lg font-medium mb-4">Kontak</h3>
        <p class="mb-2">Jalan Raya No. 123, Cikarang 18/10</p>
        <p class="mb-2">Telepon: (021) 123-456</p>
        <p>Email: ahmadkhairul2135@gmail.com</p>
      </div>
    </div>
  </div>
  <div class="bg-gray-800 py-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <p>Hak Cipta © 2023 Ahmad company, Inc. Semua Hak Dilindungi.</p>
    </div>
  </div>
</footer>

  )
}

export default Footer