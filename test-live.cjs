const http = require('http');
const https = require('https');
const fs = require('fs');

async function testLiveUpload() {
  console.log('Logging in to live site...');
  
  // 1. Login
  const loginRes = await fetch('https://www.getsetnetwork.com/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'admin', password: 'password123' })
  });
  
  if (!loginRes.ok) {
    fs.writeFileSync('error.txt', 'Login failed: ' + await loginRes.text());
    return;
  }
  
  const cookies = loginRes.headers.get('set-cookie');
  console.log('Got Auth Cookie:', cookies ? 'Yes' : 'No');
  
  // 2. Upload
  const boundary = '----WebKitFormBoundary7MA4YWxkTrZu0gW';
  const dummyContent = 'Hello World Dummy Image';
  let body = `--${boundary}\r\n`;
  body += 'Content-Disposition: form-data; name="file"; filename="test.jpg"\r\n';
  body += 'Content-Type: image/jpeg\r\n\r\n';
  body += dummyContent + '\r\n';
  body += `--${boundary}--\r\n`;

  console.log('Uploading dummy file...');
  const uploadRes = await fetch('https://www.getsetnetwork.com/api/upload', {
    method: 'POST',
    headers: {
      'Content-Type': `multipart/form-data; boundary=${boundary}`,
      'Cookie': cookies || ''
    },
    body: body
  });
  
  const result = await uploadRes.json().catch(() => uploadRes.text());
  console.log('Status:', uploadRes.status);
  fs.writeFileSync('error.txt', JSON.stringify(result, null, 2));
}

testLiveUpload().catch(console.error);
