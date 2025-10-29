'use client'

import { useState } from 'react'
import { safeRender, decode, needsDecoding, formatQuote } from '@/lib/utils/contentUtils'
import TestNavigation from '@/components/TestNavigation'

export default function ComprehensiveTest() {
  const [testResults, setTestResults] = useState<any>({})
  const [loading, setLoading] = useState(false)

  // Test samples with various HTML entities
  const testSamples = [
    "You are my partner in all of life&#x27;s adventures.",
    "You&#x27;re the reason I smile every day.",
    "In this world of acquaintances, you&#x27;re my true connection.",
    "Life&#x27;s beautiful moments are made even better with you.",
    "I can&#x27;t imagine a world without you.",
    "You&#x27;ve made my heart your home.",
    "Let&#x27;s create memories that we&#x27;ll treasure forever.",
    "You&#x27;re not just my love, you&#x27;re my best friend.",
    "Here&#x27;s to all the adventures we&#x27;ve shared.",
    "Every moment with you is a gift I don&#x27;t take for granted."
  ]

  const runComprehensiveTest = async () => {
    setLoading(true)
    const results: any = {}

    try {
      // Test 1: Content Utils Functions
      console.log('🧪 Testing Content Utils Functions...')
      results.contentUtils = {
        decoding: testSamples.map(sample => ({
          original: sample,
          decoded: safeRender(sample),
          needsDecoding: needsDecoding(sample)
        })),
        quoteFormatting: testSamples.map(sample => ({
          original: sample,
          formatted: formatQuote(sample)
        }))
      }

      // Test 2: API Content Generation
      console.log('🧪 Testing API Content Generation...')
      try {
        const contentResponse = await fetch('/api/generate-content', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            senderName: "Test User with Apostrophe's Name",
            receiverName: "Love's Receiver",
            relationship: "romantic",
            selectedTemplate: "romantic-sunset-1",
            memories: [
              {
                type: "photo",
                content: "test-photo.jpg",
                caption: "Life's most beautiful moment together"
              }
            ],
            textContent: "Here's my message with apostrophes and quotes",
            backgroundMusic: "acoustic-love-1.mp3"
          })
        })

        if (contentResponse.ok) {
          const contentData = await contentResponse.json()
          results.contentGeneration = {
            success: contentData.success,
            screenCount: contentData.screens?.length || 0,
            sampleScreens: contentData.screens?.slice(0, 3).map((screen: any) => ({
              type: screen.type,
              originalContent: screen.content,
              decodedContent: safeRender(screen.content || ''),
              hasEntities: needsDecoding(screen.content || '')
            })) || []
          }
        }
      } catch (error) {
        results.contentGeneration = { error: error instanceof Error ? error.message : 'Unknown error' }
      }

      // Test 3: Templates API
      console.log('🧪 Testing Templates API...')
      try {
        const templatesResponse = await fetch('/api/templates')
        if (templatesResponse.ok) {
          const templatesData = await templatesResponse.json()
          results.templates = {
            success: templatesData.success,
            count: templatesData.templates?.length || 0,
            sampleTemplate: templatesData.templates?.[0] || null
          }
        }
      } catch (error) {
        results.templates = { error: error instanceof Error ? error.message : 'Unknown error' }
      }

      // Test 4: AI Suggestions API
      console.log('🧪 Testing AI Suggestions API...')
      try {
        const aiResponse = await fetch('/api/ai-suggestions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            senderName: "Test User's Name",
            receiverName: "Receiver's Name",
            relationship: "romantic",
            contentTone: "loving"
          })
        })

        if (aiResponse.ok) {
          const aiData = await aiResponse.json()
          results.aiSuggestions = {
            success: aiData.success,
            content: aiData.content ? {
              quotes: aiData.content.quotes?.map((q: string) => ({
                original: q,
                decoded: safeRender(q),
                hasEntities: needsDecoding(q)
              })) || [],
              notes: aiData.content.notes?.map((n: string) => ({
                original: n,
                decoded: safeRender(n),
                hasEntities: needsDecoding(n)
              })) || []
            } : null
          }
        }
      } catch (error) {
        results.aiSuggestions = { error: error instanceof Error ? error.message : 'Unknown error' }
      }

      console.log('✅ All tests completed!')
      setTestResults(results)
      
    } catch (error) {
      console.error('❌ Test suite failed:', error)
      setTestResults({ error: error instanceof Error ? error.message : 'Unknown error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <TestNavigation />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">🔧 Comprehensive Application Test</h1>
        
        <div className="bg-white/10 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">HTML Entity Decoding Preview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testSamples.slice(0, 4).map((sample, index) => (
              <div key={index} className="bg-white/5 rounded p-3">
                <div className="text-red-300 text-sm font-mono mb-2">
                  Raw: {sample}
                </div>
                <div className="text-green-300 text-lg">
                  Decoded: {safeRender(sample)}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={runComprehensiveTest}
          disabled={loading}
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold disabled:opacity-50 mb-8 text-lg"
        >
          {loading ? '🧪 Running Comprehensive Tests...' : '🚀 Run Full Application Test'}
        </button>

        {Object.keys(testResults).length > 0 && (
          <div className="space-y-6">
            
            {/* Content Utils Results */}
            {testResults.contentUtils && (
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">📝 Content Utils Test Results</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-lg text-white mb-2">Decoding Test:</h4>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {testResults.contentUtils.decoding?.map((test: any, index: number) => (
                        <div key={index} className="bg-white/5 rounded p-2 text-sm">
                          <div className="text-red-300">Original: {test.original}</div>
                          <div className="text-green-300">Decoded: {test.decoded}</div>
                          <div className="text-blue-300">Needs Decoding: {test.needsDecoding ? 'Yes' : 'No'}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Content Generation Results */}
            {testResults.contentGeneration && (
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">🎨 Content Generation Test Results</h3>
                {testResults.contentGeneration.error ? (
                  <div className="text-red-400">Error: {testResults.contentGeneration.error}</div>
                ) : (
                  <div className="space-y-3">
                    <div className="text-white">
                      Success: <span className="text-green-400">✅</span>
                    </div>
                    <div className="text-white">
                      Screen Count: <span className="text-blue-400 font-bold">{testResults.contentGeneration.screenCount}</span>
                    </div>
                    <div>
                      <h4 className="text-lg text-white mb-2">Sample Screens:</h4>
                      <div className="space-y-2">
                        {testResults.contentGeneration.sampleScreens?.map((screen: any, index: number) => (
                          <div key={index} className="bg-white/5 rounded p-3">
                            <div className="text-white/80 font-semibold">{screen.type}</div>
                            <div className="text-red-300 text-sm">Raw: {screen.originalContent?.substring(0, 50)}...</div>
                            <div className="text-green-300">Decoded: {screen.decodedContent?.substring(0, 50)}...</div>
                            <div className="text-blue-300 text-sm">Has Entities: {screen.hasEntities ? 'Yes' : 'No'}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Templates Results */}
            {testResults.templates && (
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">📋 Templates API Test Results</h3>
                {testResults.templates.error ? (
                  <div className="text-red-400">Error: {testResults.templates.error}</div>
                ) : (
                  <div className="space-y-2">
                    <div className="text-white">Success: <span className="text-green-400">✅</span></div>
                    <div className="text-white">Template Count: <span className="text-blue-400 font-bold">{testResults.templates.count}</span></div>
                  </div>
                )}
              </div>
            )}

            {/* AI Suggestions Results */}
            {testResults.aiSuggestions && (
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">🤖 AI Suggestions Test Results</h3>
                {testResults.aiSuggestions.error ? (
                  <div className="text-red-400">Error: {testResults.aiSuggestions.error}</div>
                ) : (
                  <div className="space-y-3">
                    <div className="text-white">Success: <span className="text-green-400">✅</span></div>
                    {testResults.aiSuggestions.content && (
                      <div>
                        <h4 className="text-lg text-white mb-2">Sample Quotes:</h4>
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                          {testResults.aiSuggestions.content.quotes?.slice(0, 3).map((quote: any, index: number) => (
                            <div key={index} className="bg-white/5 rounded p-2 text-sm">
                              <div className="text-red-300">Raw: {quote.original}</div>
                              <div className="text-green-300">Decoded: {quote.decoded}</div>
                              <div className="text-blue-300">Has Entities: {quote.hasEntities ? 'Yes' : 'No'}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Error Results */}
            {testResults.error && (
              <div className="bg-red-500/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-400 mb-4">❌ Test Suite Error</h3>
                <div className="text-red-300">{testResults.error}</div>
              </div>
            )}
            
          </div>
        )}
      </div>
    </div>
  )
}