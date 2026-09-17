const fs = require('fs');

const filename = process.argv[2];

if (!filename) {
    console.log('Please provide a filename');
    return;
}

try {
    const content = fs.readFileSync(filename, 'utf8');

    console.log(content);

    const lines = content.trim().split('\n');
    console.log('Total lines', lines.length);

} catch (error) {
    console.log('File not found');
}
