<p align="center">
  <a href="https://prevedere.platarium.com" rel="noopener">
    <img width="200px" height="200px" src="https://platarium.com/assets/prevedere/assets/images/icon/plp.png" alt="Project logo">
  </a>
</p>

<h3 align="center">🪙 Platarium Wallet CLI</h3>

A command-line wallet for interacting with the **Platarium Network**. This CLI allows you to create and restore wallets using a mnemonic phrase and a unique alphanumeric code generated for each user.

> 🧪 **Version (v0.1)** – Early development stage for the Platarium blockchain.

---

## ⚙️ Installation

> Requirements: Node.js >= 18


```bash
git clone https://github.com/your-username/platarium-wallet-cli.git
cd platarium-wallet-cli
npm install
```

## 🚀 Запуск

```bash
node index.js
```

## 📋 CLI Commands

| Command  | Description                                                    |
|----------|----------------------------------------------------------------|
| create   | Create a new wallet with a randomly generated mnemonic         |
| restore  | Restore a wallet using a mnemonic phrase and alphanumeric code |
| exit     | Exit the CLI                                                   |

## 🗂 Project Structure

```bash
.
├── index.js
├── functions/
│   ├── createWallet.js
│   ├── restoreWallet.js
│   └── printHeader.js
├── wallet/
│   └── wallets.json
└── README.md
```

## 🔐 Security

The mnemonic and private keys are stored as `.json` files inside the `wallet/` directory.  
Do **not** publish or store the `wallet/` directory in any public repository.
```bash
# .gitignore
wallet/
```

## 🧑‍💻 Author
Developed by the Platarium Team!