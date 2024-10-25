const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Создаем zip архив
const output = fs.createWriteStream('pimteh-website.zip');
const archive = archiver('zip', {
  zlib: { level: 9 }
});

archive.pipe(output);

// Добавляем все файлы проекта
archive.directory('client/src/', 'client/src');
archive.directory('routes/', 'routes');
archive.file('server.js', { name: 'server.js' });
archive.file('package.json', { name: 'package.json' });

archive.finalize();