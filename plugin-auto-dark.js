kiwi.plugin('auto-dark', function(kiwi, log) {
    const darkMedia = '(prefers-color-scheme: dark)';

    // Set theme on startup
    updateTheme();

    // Update theme on media change
    window.matchMedia(darkMedia).addEventListener('change', updateTheme);

    function updateTheme() {
        const isDark = window.matchMedia && window.matchMedia(darkMedia).matches;
        const currentTheme = kiwi.themes.currentTheme().name.toLowerCase();
        const newTheme = isDark ? "dark" : "default";

        if (['dark', 'default'].includes(currentTheme) && currentTheme !== newTheme) {
            kiwi.themes.setTheme(newTheme);
        }
    }
});
