import { spawn } from 'child_process';

// Set environment variables for TLS
process.env.NODE_OPTIONS = '--tls-min-v1.2 --tls-cipher-list=ECDHE-RSA-AES128-GCM-SHA256';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
process.env.MONGODB_TLS_ALLOW_INVALID_CERTIFICATES = 'true';
process.env.MONGODB_TLS_VERSION = 'TLSv1_2';

// Start Next.js dev server
const nextDev = spawn('next', ['dev'], {
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    NODE_OPTIONS: '--tls-min-v1.2 --tls-cipher-list=ECDHE-RSA-AES128-GCM-SHA256',
  },
});

nextDev.on('error', (err) => {
  console.error('Failed to start Next.js dev server:', err);
  process.exit(1);
});

nextDev.on('exit', (code) => {
  process.exit(code || 0);
});
