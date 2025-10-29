'use client'

import Link from 'next/link'

export default function TestNavigation() {
  const testPages = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Template Selection', path: '/templates/simple', icon: '🎨' },
    { name: 'Test Content', path: '/test-content', icon: '🧪' },
    { name: 'Comprehensive Test', path: '/comprehensive-test', icon: '🔧' },
    { name: 'Sender Create', path: '/sender/create', icon: '✍️' },
    { name: 'Auth', path: '/auth', icon: '🔑' }
  ]

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4">
        <h3 className="text-white text-sm font-semibold mb-3">🚀 Test Navigation</h3>
        <div className="space-y-2">
          {testPages.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              className="flex items-center space-x-2 text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded text-sm transition-all"
            >
              <span>{page.icon}</span>
              <span>{page.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}