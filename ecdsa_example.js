// ecdsa: elliptic curve digital signature algorithm
const crypto = require('crypto');

// Generate an ECDSA key pair using the secp256k1 curve (used by Bitcoin)
const ecKeyPair = crypto.generateKeyPairSync('ec', { namedCurve: 'secp256k1' });

// Export the public key in PEM format
const publicKey = ecKeyPair.publicKey.export({ type: 'spki', format: 'pem' });

// Export the private key in PEM format
const privateKey = ecKeyPair.privateKey.export({ type: 'pkcs8', format: 'pem' });

console.log('Public Key:', publicKey);
console.log('Private Key:', privateKey);

// Sign a message using the private key
const message = 'This is a message to be signed.';
const sign = crypto.createSign('SHA256');
sign.update(message);
const signature = sign.sign(privateKey);

console.log('Signature:', signature.toString('hex'));

// Verify the message signature using the public key
const verify = crypto.createVerify('SHA256');
verify.update(message);
const isVerified = verify.verify(publicKey, signature);

console.log('Signature verification:', isVerified ? 'Success' : 'Failure');
