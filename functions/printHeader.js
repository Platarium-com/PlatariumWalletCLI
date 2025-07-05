// functions/printHeader.js
export function printHeader() {
  console.clear();
  console.log('===============================================================');
  function printAsciiArt() {
    console.log(`
█▀█ █░░ ▄▀█ ▀█▀ ▄▀█ █▀█ █ █░█ █▀▄▀█   █░█░█ ▄▀█ █░░ █░░ █▀▀ ▀█▀
█▀▀ █▄▄ █▀█ ░█░ █▀█ █▀▄ █ █▄█ █░▀░█   ▀▄▀▄▀ █▀█ █▄▄ █▄▄ ██▄ ░█░
`);
  }
  printAsciiArt();
  console.log('===============================================================');
  console.log('Available Commands:');
  console.log('create           - Create a new wallet');
  console.log('restore          - Restore wallet from mnemonic + code');
  console.log('exit             - Exit the application');
  console.log('===============================================================');
}
