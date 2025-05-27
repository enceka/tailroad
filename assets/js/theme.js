function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIconLight = document.getElementById('theme-icon-light');
  const themeIconDark = document.getElementById('theme-icon-dark');
  const root = document.documentElement;

  if (!themeToggle) return;

  // Toggle handler
  function toggleTheme() {
    const current = root.getAttribute("data-theme");
    const switchTheme = current === "dark" ? "light" : "dark"
    root.setAttribute("data-theme", switchTheme);        
    localStorage.setItem("theme", switchTheme)
    themeIconLight?.classList.toggle('hidden', switchTheme === 'dark');
    themeIconDark?.classList.toggle('hidden', !(switchTheme === 'dark'));
  }

  
  // Event listener
  themeToggle.addEventListener('click', toggleTheme);


  // Apply saved theme
  const savedTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  if (savedTheme === 'dark') {
    root.setAttribute("data-theme", 'dark');        
    themeIconLight?.classList.add('hidden');
    themeIconDark?.classList.remove('hidden');
  } 
}

document.addEventListener('DOMContentLoaded', initTheme);
console.log("Theme.js loaded");