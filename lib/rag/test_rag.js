const { spawn } = require('child_process');

// Test RAG system with Node.js
function testRAG() {
  const userData = {
    relationship: "lover",
    emotionTag: "romantic", 
    receiverName: "Sarah"
  };

  // Simulate RAG response
  const screens = [];
  for (let i = 0; i < 20; i++) {
    screens.push({
      content: `Your heartfelt presence in my life has transformed everything I thought I knew about love and connection, Sarah. Every moment we share feels like a precious gift that I never want to unwrap too quickly, savoring each second of joy you bring to my world.`,
      background: `from-pink-${400 + (i % 3) * 100} to-purple-${500 + (i % 2) * 100}`,
      animation: ["fadeIn", "slideUp", "heartBeat"][i % 3],
      duration: 4000,
      emotion: "romantic"
    });
  }

  console.log(JSON.stringify(screens));
}

testRAG();