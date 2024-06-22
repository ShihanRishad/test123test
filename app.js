if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/test123test/service-worker.js').then(registration => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, error => {
      console.log('ServiceWorker registration failed: ', error);
    });
  });
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById('changeThemeButton').addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomColor();
});

document.getElementById('notifyButton').addEventListener('click', () => {
  if (Notification.permission === 'granted') {
    navigator.serviceWorker.ready.then(registration => {
      registration.showNotification('Hello!', {
        body: 'This is a sample notification.',
        icon: '/test123test/images/icon-192x192.png'
      });
    });
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        navigator.serviceWorker.ready.then(registration => {
          registration.showNotification('Hello!', {
            body: 'This is a sample notification.',
            icon: '/test123test/images/icon-192x192.png'
          });
        });
      }
    });
  }
});
