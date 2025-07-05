// functions/restoreWallet.js
import fs from 'fs';
import path from 'path';
import bip39 from 'bip39';
import { KeyGenerator } from 'platarium-network';

const walletDir = path.resolve('wallet');
const walletsFile = path.join(walletDir, 'wallets.json');

if (!fs.existsSync(walletDir)) {
  fs.mkdirSync(walletDir, { recursive: true });
}

function loadWallets() {
  if (!fs.existsSync(walletsFile)) return [];
  try {
    const data = fs.readFileSync(walletsFile, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveWallets(wallets) {
  fs.writeFileSync(walletsFile, JSON.stringify(wallets, null, 2), 'utf-8');
}

export async function restoreWallet(rl) {
  function ask(question) {
    return new Promise((resolve) => {
      rl.question(question, resolve);
    });
  }

  try {
    let mnemonic;
    while (true) {
      const input = await ask('🧠 Enter your mnemonic phrase:\n> ');
      mnemonic = input.trim().toLowerCase().replace(/\s+/g, ' ');
      if (bip39.validateMnemonic(mnemonic)) break;
      console.log('❌ Invalid mnemonic phrase. Please try again.');
    }

    let alphanumericPart;
    while (true) {
      const input = await ask('🔐 Enter your alphanumeric part (e.g. C2OBJD9287):\n> ');
      alphanumericPart = input.trim();
      if (alphanumericPart.length > 0) break;
      console.log('❌ Alphanumeric part cannot be empty. Please try again.');
    }

    const keyGen = new KeyGenerator();
    const result = keyGen.restoreKeys(
      mnemonic,
      alphanumericPart,
      keyGen.seedIndex,
      keyGen.customPath
    );

    const wallets = loadWallets();

    const exists = wallets.some(w => w.alphanumericPart === result.alphanumericPart);
    if (exists) {
      console.log(`⚠️ Wallet with alphanumericPart "${result.alphanumericPart}" already exists in the wallet list.`);
    } else {
      wallets.push(result);
      saveWallets(wallets);
      console.log('✅ Wallet successfully restored and saved!');
    }

    console.log(`💾 Saved wallets to ${walletsFile}`);
    console.log('🔑 Recovered keys:', result);

  } catch (error) {
    console.error('❌ Error restoring wallet:', error.message);
  }
}
