let sidebarBtn = document.querySelector('.sidebar-btn');
let sidebar = document.querySelector('.sidebar');
let body = document.body;

if (sidebar) {
    sidebarBtn.addEventListener('click', event => {
        sidebar.classList.toggle('sidebar--show');
        sidebarBtn.classList.toggle('sidebar-btn__transform');
        event.stopPropagation();
    });

    body.addEventListener('click', event => {
        if (!event.target.closest('.sidebar')) {
            console.log('pip')
            sidebarClose()
        }
    });

    function sidebarClose() {
        sidebar.classList.remove('sidebar--show');
        sidebarBtn.classList.remove('sidebar-btn__transform');
    };


}
if (!sidebar) {
    sidebarBtn.style.opacity = 0;

}