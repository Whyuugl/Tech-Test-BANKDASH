document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.setting-tabs .tab-item');
    const panes = document.querySelectorAll('.setting-content-pane');

    // Function to switch tabs
    function switchTab(e) {
        e.preventDefault();

        // Deactivate all tabs and panes
        tabs.forEach(t => t.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));
        
        // Activate clicked tab
        const clickedTab = e.currentTarget;
        clickedTab.classList.add('active');
        
        // Activate corresponding content pane
        const targetId = clickedTab.getAttribute('data-tab');
        const targetPane = document.getElementById(targetId);
        if(targetPane) {
            targetPane.classList.add('active');
        }
    }

    // Attach event listeners
    tabs.forEach(tab => {
        tab.addEventListener('click', switchTab);
    });

    // Set initial active tab based on the HTML class
    const initialActiveTab = document.querySelector('.setting-tabs .tab-item.active');
    if (initialActiveTab) {
        const initialTargetId = initialActiveTab.getAttribute('data-tab');
        const initialTargetPane = document.getElementById(initialTargetId);
        if (initialTargetPane) {
            panes.forEach(p => p.classList.remove('active'));
            initialTargetPane.classList.add('active');
        }
    }
});
