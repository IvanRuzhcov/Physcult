function formatDuration(duration) {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+(\.\d+)?S)?/);
  if (!match) {
    return 'Invalid duration format';
  }

  const hours = match[1] ? parseInt(match[1], 10) : 0;
  const minutes = match[2] ? parseInt(match[2], 10) : 0;
  const seconds = match[3] ? parseFloat(match[3]) : 0;

  const totalTimeMinutes = hours * 60 + minutes + seconds / 60;

  return totalTimeMinutes;
}

function formatDurationTime(duration) {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+(\.\d+)?S)?/);
  if (!match) {
    return 'Invalid duration format';
  }

  const hours = match[1] ? parseInt(match[1], 10) : 0;
  const minutes = match[2] ? parseInt(match[2], 10) : 0;
  const seconds = match[3] ? parseFloat(match[3]) : 0;

  let result = '';

  if (hours > 0) {
    result += `${hours}ч. `;
  }

  if (minutes > 0 || hours === 0) {
    result += ` ${minutes}мин.`;
  }
  if (hours === 0 && minutes >= 0) {
    const roundedSeconds = Math.round(seconds);
    result += ` ${roundedSeconds}с.`;
  }

  return result;
}
function convertDecimalTime(decimalTime) {
  var parts = decimalTime.toString().split('.');
  var wholePart = Number(parseInt(parts[0])); 
  var decimalPart = Number(parseInt(parts[1]));

  if (decimalPart > 60){
    decimalPart -= 60
    wholePart +=1 
  }
  if(decimalPart < 10){
    decimalPart =`0${decimalPart}`
  }
  return `${wholePart}:${decimalPart}`
}

module.exports = { formatDuration, formatDurationTime, convertDecimalTime };
