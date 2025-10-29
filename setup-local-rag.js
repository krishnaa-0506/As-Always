const fs = require('fs')
const path = require('path')

console.log('🚀 Setting up AsAlways with Local RAG...')

// Create necessary directories
const dirs = [
  'public/uploads/photo',
  'public/uploads/video', 
  'public/uploads/voice',
  'lib/rag/models'
]

dirs.forEach(dir => {
  const fullPath = path.join(__dirname, dir)
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true })
    console.log(`✅ Created directory: ${dir}`)
  }
})

// Remove Prisma files
const prismaFiles = [
  'prisma/schema.prisma',
  'prisma/dev.db'
]

prismaFiles.forEach(file => {
  const fullPath = path.join(__dirname, file)
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath)
    console.log(`🗑️ Removed: ${file}`)
  }
})

// Update package.json
const packagePath = path.join(__dirname, 'package.json')
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'))

// Remove Prisma dependencies
delete packageJson.dependencies['@prisma/client']
delete packageJson.devDependencies?.prisma

// Add local AI dependencies
packageJson.dependencies = {
  ...packageJson.dependencies,
  '@tensorflow/tfjs-node': '^4.15.0',
  'natural': '^6.12.0',
  'compromise': '^14.10.0',
  'sentiment': '^5.0.2'
}

// Remove Prisma scripts
delete packageJson.scripts['db:generate']
delete packageJson.scripts['db:push']
delete packageJson.scripts['db:studio']
delete packageJson.scripts['db:migrate']
delete packageJson.scripts['db:reset']

fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2))
console.log('📦 Updated package.json')

console.log('\n🎉 Setup complete!')
console.log('\nNext steps:')
console.log('1. Run: npm install')
console.log('2. Run: npm run dev')
console.log('3. Your local RAG model will initialize on first use')