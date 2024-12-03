// import fs from 'fs';
import fs from 'fs/promises';

// readFile() - callback - versão Assíncrona
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readFileSync() - versão Síncrona
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

// readfile () - Promise .then()
// fs.readFile('./test.txt', 'utf8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// readFile () - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile('./test.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// writeFile ()

const writeFile = async () => {
  try {
    await fs.writeFile('./test.txt', 'Olá, eu estou escrevendo aqui!');
    console.log('Escrevendo para...');
  } catch (error) {
    console.log(error);
  }
};

writeFile();
readFile();