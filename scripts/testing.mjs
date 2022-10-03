import { readFileSync } from 'node:fs';

try {
  const data = readFileSync('text.txt');
  console.log(data.toString());
} catch (err) {
  console.error(err);
}
