#!/usr/bin/env node

// Test script to validate and fix code issues
const https = require('https');

const testCode = 'LTXB59';
const baseUrl = 'http://localhost:3000';

async function makeRequest(url, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port,
      path: urlObj.pathname + urlObj.search,
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = require(urlObj.protocol.replace(':', '')).request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(responseData);
          resolve({ status: res.statusCode, data: parsedData });
        } catch (e) {
          resolve({ status: res.statusCode, data: responseData });
        }
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    if (data) {
      req.write(JSON.stringify(data));
    }
    
    req.end();
  });
}

async function testCodeValidation() {
  console.log(`Testing code validation for: ${testCode}`);
  
  try {
    // Test validation
    console.log('\n1. Testing code validation...');
    const validationResult = await makeRequest(`${baseUrl}/api/messages/validate`, 'POST', { code: testCode });
    console.log('Validation result:', JSON.stringify(validationResult, null, 2));
    
    // Test message retrieval
    console.log('\n2. Testing message retrieval...');
    const messageResult = await makeRequest(`${baseUrl}/api/messages/${testCode}`);
    console.log('Message result:', JSON.stringify(messageResult, null, 2));
    
    // Test debug endpoint
    console.log('\n3. Testing debug endpoint...');
    const debugResult = await makeRequest(`${baseUrl}/api/debug/messages`);
    console.log('Debug result:', JSON.stringify(debugResult, null, 2));
    
  } catch (error) {
    console.error('Test failed:', error.message);
  }
}

console.log('Starting code validation test...');
testCodeValidation();