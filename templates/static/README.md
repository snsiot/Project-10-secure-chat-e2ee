# 🔐 Secure Chat App with End-to-End Encryption (E2EE)

This is a real-time chat application built using Flask-SocketIO with complete end-to-end encryption (E2EE). Messages are encrypted on the client using AES, and keys are securely exchanged using RSA.

---

## 💡 Features

- Real-time messaging with Flask-SocketIO
- AES encryption for message content
- RSA encryption for sharing AES keys
- Messages are decrypted only on the receiving client
- Basic message log support (encrypted)

---

## 🛠️ How to Run

bash
pip install -r requirements.txt
python app.py

Open http://localhost:5000 in two browser tabs to simulate chat.

🧪 Next Steps (Planned Features)
Store encrypted messages to file
GUI chat client
Key rotation support
Auto-generate RSA keys per user
