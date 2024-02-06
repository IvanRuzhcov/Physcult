const verificationCode = () => {
    const verificationCode = Math.floor(1000 + Math.random() * 9000);
    return verificationCode
}

function generateSportsUsername() {
    const adjectives = ['Swift', 'Powerful', 'Athletic', 'Agile', 'Dynamic', 'Mighty', 'Energetic'];
    const nouns = ['Runner', 'Jumper', 'Cyclist', 'Lifter', 'Gymnast', 'Racer', 'Striker'];
    
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    
    const randomNumber = Math.floor(100000 + Math.random() * 900000); // Добавление случайного числа для уникальности
  
    const username = `${randomAdjective}${randomNoun}${randomNumber}`;
    return username;
  }
  
  const newSportsUsername = generateSportsUsername();
  console.log(newSportsUsername);

module.exports = {verificationCode, generateSportsUsername}