// Custom Handlebars helpers for Publii
document.addEventListener('DOMContentLoaded', function() {
    // This will be available in the global scope for Handlebars
    window.getThemeSetting = function(settingName) {
        const themeSettings = window.publiiThemeConfig || {};
        return themeSettings[settingName] || '';
    };
});
