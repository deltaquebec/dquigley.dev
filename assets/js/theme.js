(function() {
  const themes = ['light', 'medium', 'dark'];
  
  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }
  
  function cycleTheme() {
    const current = document.documentElement.dataset.theme || 'light';
    const next = themes[(themes.indexOf(current) + 1) % 3];
    setTheme(next);
  }
  
  setTheme(localStorage.getItem('theme') || 'light');
  window.cycleTheme = cycleTheme;
})();
