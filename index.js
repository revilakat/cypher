class CaesarCipher {
    constructor(shift) {
      this.shift = shift;
      this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
  
    encrypt(text) {
      
      return this.transform(text, this.shift);
    }
  
    decrypt(text) {
      return this.transform(text, -this.shift);
    }
  
    transform(text, shift) {
      return text
        .toUpperCase()
        .split('')
        .map(char => {
          if (this.alphabet.includes(char)) {
            const index = (this.alphabet.indexOf(char) + shift + 26) % 26;
            return this.alphabet.charAt(index);
          }
          return char;
        })
        .join('');
    }
  }
  
  // Example usage
  const myCipher = new CaesarCipher(3);
  const originalText = 'Hello, World!';
  const encryptedText = myCipher.encrypt(originalText);
  const decryptedText = myCipher.decrypt(encryptedText);
  
  console.log('Original Text:', originalText);
  console.log('Encrypted Text:', encryptedText);
  console.log('Decrypted Text:', decryptedText);
  