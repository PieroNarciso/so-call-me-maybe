document.addEventListener('DOMContentLoaded', async () => {

  const localStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true })
  const videoEl = document.querySelector('#local') as HTMLVideoElement;
  
  videoEl.srcObject = localStream;
  videoEl.play();
});
