'use client'

import { useState } from 'react'
import { safeRender } from '@/lib/utils/contentUtils'

interface TestResult {
  success: boolean
  screens: any[]
  error?: string
}

export default function TestContentGeneration() {
  const [result, setResult] = useState<TestResult | null>(null)
  const [loading, setLoading] = useState(false)

  const testContentGeneration = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/generate-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          senderName: "Test User",
          receiverName: "Love",
          relationship: "romantic",
          selectedTemplate: "romantic-sunset-1",
          memories: [
            {
              type: "photo",
              content: "test-photo.jpg",
              caption: "Our beautiful moment together"
            },
            {
              type: "voice", 
              content: "test-voice.mp3",
              caption: "My voice message for you"
            }
          ],
          backgroundMusic: "acoustic-love-1.mp3"
        })
      })

      const data = await response.json()
      setResult({
        success: data.success,
        screens: data.screens || [],
        error: data.error
      })
    } catch (error) {
      setResult({
        success: false,
        screens: [],
        error: error instanceof Error ? error.message : 'Unknown error'
      })
    } finally {
      setLoading(false)
    }
  }

  // Test samples with HTML entities
  const testSamples = [
    "You are my partner in all of life&#x27;s adventures.",
    "You&#x27;re the reason I smile every day.",
    "In this world of acquaintances, you&#x27;re my true connection.",
    "Life&#x27;s beautiful moments are made even better with you."
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Test Enhanced Content Generation</h1>
        
        {/* HTML Entity Decoding Test */}
        <div className="bg-white/10 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">HTML Entity Decoding Test</h2>
          <div className="space-y-3">
            {testSamples.map((sample, index) => (
              <div key={index} className="bg-white/5 rounded p-3">
                <div className="text-white/60 text-sm mb-1">Raw (with entities):</div>
                <div className="text-red-300 text-sm mb-2 font-mono">{sample}</div>
                <div className="text-white/60 text-sm mb-1">Decoded (display):</div>
                <div className="text-green-300">{safeRender(sample)}</div>
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={testContentGeneration}
          disabled={loading}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50 mb-8"
        >
          {loading ? 'Testing...' : 'Test Content Generation'}
        </button>

        {result && (
          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Results</h2>
            
            <div className="space-y-4">
              <div>
                <span className="text-white/60">Success: </span>
                <span className={result.success ? 'text-green-400' : 'text-red-400'}>
                  {result.success ? 'Yes' : 'No'}
                </span>
              </div>
              
              <div>
                <span className="text-white/60">Screen Count: </span>
                <span className="text-white font-bold">{result.screens.length}</span>
              </div>

              {result.error && (
                <div>
                  <span className="text-white/60">Error: </span>
                  <span className="text-red-400">{result.error}</span>
                </div>
              )}

              {result.screens.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Screen Details:</h3>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {result.screens.map((screen, index) => (
                      <div key={index} className="bg-white/5 rounded p-3">
                        <div className="text-white/80">
                          <strong>Screen {index + 1}:</strong> {screen.type}
                        </div>
                        {screen.content && (
                          <div className="text-white/60 text-sm mt-1">
                            <div className="mb-1">Raw content:</div>
                            <div className="font-mono text-xs text-red-300 mb-2">
                              {typeof screen.content === 'string' ? 
                                screen.content.substring(0, 100) + '...' : 
                                JSON.stringify(screen.content).substring(0, 100) + '...'
                              }
                            </div>
                            <div className="mb-1">Decoded content:</div>
                            <div className="text-green-300">
                              {typeof screen.content === 'string' ? 
                                safeRender(screen.content.substring(0, 100)) + '...' : 
                                safeRender(JSON.stringify(screen.content).substring(0, 100)) + '...'
                              }
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}