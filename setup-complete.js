const fs = require('fs')
const path = require('path')

console.log('🚀 Setting up AsAlways - Complete Production Ready Version...')

// Remove old Prisma files
const filesToRemove = [
  'prisma/schema.prisma',
  'prisma/dev.db',
  'lib/rag/EnhancedContentRAG.ts'
]

filesToRemove.forEach(file => {
  const fullPath = path.join(__dirname, file)
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath)
    console.log(`🗑️ Removed: ${file}`)
  }
})

// Remove Prisma directory if empty
const prismaDir = path.join(__dirname, 'prisma')
if (fs.existsSync(prismaDir)) {
  const files = fs.readdirSync(prismaDir)
  if (files.length === 0) {
    fs.rmdirSync(prismaDir)
    console.log('🗑️ Removed empty prisma directory')
  }
}

// Create .gitignore additions
const gitignorePath = path.join(__dirname, '.gitignore')
const gitignoreAdditions = `
# AsAlways specific
public/uploads/*
!public/uploads/.gitkeep
lib/rag/models/*
!lib/rag/models/.gitkeep
.env.local
*.log
`

if (fs.existsSync(gitignorePath)) {
  const currentGitignore = fs.readFileSync(gitignorePath, 'utf8')
  if (!currentGitignore.includes('# AsAlways specific')) {
    fs.appendFileSync(gitignorePath, gitignoreAdditions)
    console.log('📝 Updated .gitignore')
  }
} else {
  fs.writeFileSync(gitignorePath, gitignoreAdditions)
  console.log('📝 Created .gitignore')
}

// Create .gitkeep files
const keepFiles = [
  'public/uploads/.gitkeep',
  'lib/rag/models/.gitkeep'
]

keepFiles.forEach(file => {
  const fullPath = path.join(__dirname, file)
  const dir = path.dirname(fullPath)
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, '')
    console.log(`📁 Created: ${file}`)
  }
})

console.log('\n✅ Setup Complete!')
console.log('\n📋 Next Steps:')
console.log('1. Run: npm install')
console.log('2. Configure your .env file with:')
console.log('   - MongoDB Atlas URI')
console.log('   - SMTP settings for emails')
console.log('   - Stripe keys for payments')
console.log('3. Run: npm run dev')
console.log('\n🎉 Your AsAlways platform is ready for production!')
console.log('\n🔧 Features Included:')
console.log('✅ MongoDB Atlas integration')
console.log('✅ Local RAG AI (no API keys needed)')
console.log('✅ Complete authentication system')
console.log('✅ File upload with validation')
console.log('✅ Real-time WebSocket features')
console.log('✅ Stripe payment integration')
console.log('✅ Email notification system')
console.log('✅ Security middleware & rate limiting')
console.log('✅ Error boundaries & loading states')
console.log('✅ Production-ready optimizations')