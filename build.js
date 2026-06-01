const fs   = require('fs');
const path = require('path');

const replacements = {
    '__FIREBASE_API_KEY__':            process.env.VITE_FIREBASE_API_KEY,
    '__FIREBASE_AUTH_DOMAIN__':        process.env.VITE_FIREBASE_AUTH_DOMAIN,
    '__FIREBASE_PROJECT_ID__':         process.env.VITE_FIREBASE_PROJECT_ID,
    '__FIREBASE_STORAGE_BUCKET__':     process.env.VITE_FIREBASE_STORAGE_BUCKET,
    '__FIREBASE_MESSAGING_SENDER_ID__':process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    '__FIREBASE_APP_ID__':             process.env.VITE_FIREBASE_APP_ID,
};

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    for (const [token, value] of Object.entries(replacements)) {
        if (content.includes(token)) {
            if (!value) {
                console.error(`Missing env var for token: ${token}`);
                process.exit(1);
            }
            content = content.split(token).join(value);
            changed = true;
        }
    }
    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Injected env vars into: ${filePath}`);
    }
}

function walkDir(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory() && !['node_modules', '.git', 'netlify'].includes(entry.name)) {
            walkDir(full);
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
            processFile(full);
        }
    }
}

walkDir(__dirname);
console.log('Build complete.');
