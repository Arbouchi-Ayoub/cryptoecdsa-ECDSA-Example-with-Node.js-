# cryptoecdsa

📝 ECDSA Example with Node.js 🚀
This is a simple example demonstrating the use of the Elliptic Curve Digital Signature Algorithm (ECDSA) in Node.js using the built-in crypto module 🔐. The script generates an ECDSA key pair, signs a message with the private key, and verifies the signature using the public key.

🛠️ Prerequisites
Node.js installed on your system.
🏃‍♂️ How to Run
Save the provided code in a file named ecdsa_example.js 📄.

Open a terminal/command prompt and navigate to the directory where you saved the ecdsa_example.js file 🖥️.

Run the script using the following command: node ecdsa_example.js 🚦.

🧪 What the Script Does
The script performs the following steps:

Generates an ECDSA key pair using the secp256k1 elliptic curve (the same curve used by Bitcoin) 🔑.
Exports the public key and private key in PEM format and logs them to the console 🖨️.
Signs a sample message using the private key ✍️.
Verifies the signature of the message using the public key ✔️.
Logs the signature in hexadecimal format and the result of the signature verification to the console 📋.
⚠️ Note
This example is intended for educational purposes and should not be used for production systems without proper testing and validation 🎓.
