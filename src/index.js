// const message = 'Hello node';

// console.log(message);

import fs from 'node:fs/promises';

const buffer = await fs.readFile('hello.txt');
// припустимо, що в файлі hello.txt був текст Hello World!

console.log(buffer);
console.log(buffer.toString('utf-8'));
///<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>
