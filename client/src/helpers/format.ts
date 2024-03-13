export function formatDate(uploadTime: string) {
    const date = new Date(uploadTime);
  
    const formattedDate = date
      .toISOString()
      .replace(
        /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):\d{2}.\d{3}Z/,
        '$3.$2.$1 • $4:$5'
      );
  
    return formattedDate;
  }
  
  export function formatDuration(duration: string) {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+(\.\d+)?S)?/);
    if (!match) {
      return 'Invalid duration format';
    }
  
    const hours = match[1] ? parseInt(match[1], 10) : 0;
    const minutes = match[2] ? parseInt(match[2], 10) : 0;
    const seconds = match[3] ? parseFloat(match[3]) : 0;
  
    let result = '';
  
    if (hours > 0) {
      result += `${hours} ч `;
    }
  
    if (minutes > 0 || hours === 0) {
      result += `${minutes} мин`;
    }
    if (hours === 0 && minutes >= 0) {
      const roundedSeconds = Math.round(seconds);
      result += ` ${roundedSeconds} с`;
    }
  
    return result;
  }

  export function createdAtData(uploadTime:string){

    const regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})Z$/;
    const match = uploadTime!.match(regex);
    if (match) {
      const year = match[1];
      const month = match[2];
      const day = match[3];
      const hours = match[4];
      const minutes = match[5];
  
      // Собираем отформатированную строку
      return `${day}.${month}.${year} • ${hours}:${minutes}`;
    }
  
  }