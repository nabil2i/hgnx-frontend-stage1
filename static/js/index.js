
/* */
document.addEventListener('DOMContentLoaded', function () {
  const currentTimeInMs = Date.now();
  const currentTime = new Date(currentTimeInMs);
  // const year = currentTime.getUTCFullYear();
  // const month = String(currentTime.getUTCMonth() + 1).padStart(2, '0');
  // const day = String(currentTime.getUTCDate()).padStart(2, '0');
  // const hours = String(currentTime.getUTCHours()).padStart(2, '0');
  // const minutes = String(currentTime.getUTCMinutes()).padStart(2, '0');
  // const seconds = String(currentTime.getUTCSeconds()).padStart(2, '0');
  
  const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayOfTheWeek = currentTime.getDay();
  currentDayElement.textContent = days[currentDayOfTheWeek];

  const currentUTCElement = document.querySelector('[data-testid="currentUTCTime"]');
  // const formattedUTCTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
  // currentUTCElement.textContent = formattedUTCTime;
  currentUTCElement.textContent = currentTimeInMs;
});





