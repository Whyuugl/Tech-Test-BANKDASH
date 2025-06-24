// Import CSS files
import '../assets/css/style-v2.css';
import '../assets/css/setting.css';

// Setting page specific logic
console.log('Setting page loaded');

document.addEventListener('DOMContentLoaded', function() {
    // Tab logic (langsung dari assets/js/setting.js)
    const tabs = document.querySelectorAll('.setting-tabs .tab-item');
    const panes = document.querySelectorAll('.setting-content-pane');

    function switchTab(e) {
        e.preventDefault();
        tabs.forEach(t => t.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));
        const clickedTab = e.currentTarget;
        clickedTab.classList.add('active');
        const targetId = clickedTab.getAttribute('data-tab');
        const targetPane = document.getElementById(targetId);
        if(targetPane) {
            targetPane.classList.add('active');
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', switchTab);
    });

    const initialActiveTab = document.querySelector('.setting-tabs .tab-item.active');
    if (initialActiveTab) {
        const initialTargetId = initialActiveTab.getAttribute('data-tab');
        const initialTargetPane = document.getElementById(initialTargetId);
        if (initialTargetPane) {
            panes.forEach(p => p.classList.remove('active'));
            initialTargetPane.classList.add('active');
        }
    }

    // Setting toggles logic (jika ada)
    const settingToggles = document.querySelectorAll('.setting-toggle');
    settingToggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            const settingName = this.getAttribute('data-setting');
            const isEnabled = this.checked;
            localStorage.setItem(settingName, isEnabled);
            console.log(`Setting ${settingName} changed to: ${isEnabled}`);
        });
    });
    settingToggles.forEach(toggle => {
        const settingName = toggle.getAttribute('data-setting');
        const savedValue = localStorage.getItem(settingName);
        if (savedValue !== null) {
            toggle.checked = savedValue === 'true';
        }
    });
}); 