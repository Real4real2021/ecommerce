// SIDEBAR TOGGLE

const openNav = document.getElementById('openNav');
const closeNav = document.getElementById('closeNav');

openNav.addEventListener('click', openSidebar);
closeNav.addEventListener('click', closeSidebar);

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}