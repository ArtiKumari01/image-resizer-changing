
ipcRenderer.on('msg:print', (event) => {
  alertSuccess(`Message ${event.value}`);
});

function sendMyMsg() {
  let value2 = document.getElementById("details").value;
  console.log("File is testing");
  ipcRenderer.send('msg:send', {
    value: value2,
  });
}

function alertSuccess(message) {
  Toastify.toast({
    text: message,
    duration: 5000,
    close: false,
    style: {
      background: 'green',
      color: 'white',
      textAlign: 'center',
    },
  });
}

function alertError(message) {
  Toastify.toast({
    text: message,
    duration: 5000,
    close: false,
    style: {
      background: 'red',
      color: 'white',
      textAlign: 'center',
    },
  });
}

// File select listener
// img.addEventListener('change', loadImage);
// Form submit listener
// form.addEventListener('submit', sendImage);
