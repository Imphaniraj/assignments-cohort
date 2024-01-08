function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    console.log(`${hours}:${minutes}::${seconds}`);
  }
  
  function getCurrentTimeWithAMPM() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = now.getHours() < 12 ? 'AM' : 'PM';
    console.log(`${hours}:${minutes}::${seconds} ${ampm}`);
  }

  
  function showTime(){
    setInterval(()=>{
        getCurrentTime()
      }, 1000);
      setInterval(()=>{
        getCurrentTimeWithAMPM()
      }, 1000)
  }

  showTime()