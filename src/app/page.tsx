'use client'

import Button from '@mui/material/Button'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center flex-col bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Hola MUI + Tailwind + Next.js 🚀
      </h1>
      <Button variant="contained" color="primary">
        Soy un botón de MUI
      </Button>
    </main>
  )
}

