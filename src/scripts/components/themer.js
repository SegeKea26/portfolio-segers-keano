
function showIcon($body, $icon1, $icon2) {
   // Check if all elements exist before trying to use them
   if (!$body || !$icon1 || !$icon2) {
      console.warn('Missing DOM elements for theme toggle');
      return;
   }
   
   if ($body.classList.contains('dark')) {
      $icon1.classList.remove('themer__icon--active');
      $icon2.classList.add('themer__icon--active');
   } else {
      $icon1.classList.add('themer__icon--active');
      $icon2.classList.remove('themer__icon--active');
   }
}

function changeTheme() { 
   const $body = document.querySelector('body');
   const $themerSunIcon = document.querySelector('[data-themer-child="sun-icon"]');
   const $themerMoonIcon = document.querySelector('[data-themer-child="moon-icon"]');
   
   // Check if body element exists
   if (!$body) {
      console.warn('Body element not found');
      return;
   }

   const currentTheme = localStorage.getItem('theme');
   
   if (currentTheme === 'dark') {
      $body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
   } else if (currentTheme === 'light') {
      $body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
   }

   showIcon($body, $themerSunIcon, $themerMoonIcon);
}

function initLocalStorageTheme() {
   const $body = document.querySelector('body');
   const $themerSunIcon = document.querySelector('[data-themer-child="sun-icon"]');
   const $themerMoonIcon = document.querySelector('[data-themer-child="moon-icon"]');
   
   // Check if body element exists
   if (!$body) {
      console.warn('Body element not found');
      return;
   }
   
   const currentTheme = localStorage.getItem('theme');
   
   if (currentTheme === 'dark') { 
      $body.classList.add('dark');
   } else if (currentTheme === 'light') {
      $body.classList.remove('dark');
   } else {
      localStorage.setItem('theme', 'light');
      $body.classList.remove('dark');
   }
   
   showIcon($body, $themerSunIcon, $themerMoonIcon);
}

function initThemer() { 
   const $body = document.querySelector('body');
   const $themerBtn = document.querySelector('[data-themer="button"]');
   const $themerSunIcon = document.querySelector('[data-themer-child="sun-icon"]');
   const $themerMoonIcon = document.querySelector('[data-themer-child="moon-icon"]');
   
   // Check if themer button exists
   if (!$themerBtn) {
      console.warn('Theme toggle button not found');
      return;
   }
   
   initLocalStorageTheme();
   
   $themerBtn.addEventListener('click', function() { 
      changeTheme();
   });
}

export default initThemer;



