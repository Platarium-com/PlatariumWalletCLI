// functions/wallet.js
import fs from 'fs';
import path from 'path';
import { KeyGenerator } from 'platarium-network';

const walletDir = path.resolve('wallet');

if (!fs.existsSync(walletDir)) {
  fs.mkdirSync(walletDir, { recursive: true });
}

export function createWallet() {
  const keyGen = new KeyGenerator(0);
  const result = keyGen.generateKeys();

  console.log('✅ Wallet generated!');
  console.log('Full result object:', result);

  const filename = `wallet_${result.alphanumericPart}.json`;
  const filePath = path.join(walletDir, filename);

  fs.writeFileSync(filePath, JSON.stringify(result, null, 2), 'utf-8');
  console.log(`💾 Saved to ${filePath}`);
}
