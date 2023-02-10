const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Listen for the 'beforeinstallprompt' event, which is fired before the PWA installation prompt is shown
window.addEventListener('beforeinstallprompt', (event) => {
  // Store the event in a global variable to use it later, when the 'butInstall' button is clicked
  deferredPrompt = event;
});

// Listen for the 'click' event on the 'butInstall' button
butInstall.addEventListener('click', async () => {
  // Use the 'event' from the 'beforeinstallprompt' listener to show the PWA installation prompt
  deferredPrompt.prompt();

  // Wait for the user's response to the prompt
  const choiceResult = await deferredPrompt.userChoice;

  // Check the user's response
  if (choiceResult.outcome === 'accepted') {
    console.log('PWA installation accepted by the user');
  } else {
    console.log('PWA installation rejected by the user');
  }

  // Reset the deferred prompt
  deferredPrompt = null;
});

// Listen for the 'appinstalled' event, which is fired when the PWA is successfully installed
window.addEventListener('appinstalled', (event) => {
  // Perform any necessary actions, such as showing a success message or redirecting the user to a different page
  console.log('PWA successfully installed');
});
