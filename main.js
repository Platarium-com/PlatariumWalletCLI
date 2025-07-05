import readline from 'readline';
import { createWallet } from './functions/createWallet.js';
import { restoreWallet } from './functions/restoreWallet.js';
import { printHeader } from './functions/printHeader.js';

printHeader();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('Enter command: ');
rl.prompt();

rl.on('line', async (line) => {
  const command = line.trim().toLowerCase();

  switch (command) {
    case 'create':
      await createWallet(rl);
      break;

    case 'restore':
      await restoreWallet(rl);
      break;

    case 'exit':
      console.log('👋 Exiting...');
      rl.close();
      process.exit(0);

    default:
      console.log(`❌ Unknown command: "${command}"`);
  }

  rl.prompt();
});
