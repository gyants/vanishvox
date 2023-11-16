export function calculateTimeRemaining(timestamp) {
    // Parse the provided timestamp
    const startTime = new Date(timestamp);
    // Calculate the time 60 minutes after the provided timestamp
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);
  
    // Get the current time
    const currentTime = new Date();
  
    // Calculate the difference in milliseconds
    let timeDiff = endTime - currentTime;
  
    // If the difference is negative, time is up
    if (timeDiff <= 0) {
      return '0m';
    }
  
    // Convert milliseconds into minutes
    const minutes = Math.floor(timeDiff / (1000 * 60));
  
    // Format the time remaining
    return `${minutes}m`;
  }