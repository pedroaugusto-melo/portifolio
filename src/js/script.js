const mobileMenu = document.getElementById('menu-items');
const mobileMenuIcon = document.getElementById('menu-icon');
const projects = document.querySelectorAll('.project');

mobileMenuIcon.addEventListener('click', () => {
    const menuState = mobileMenu.getAttribute('class');

    if(menuState === 'inactive'){
        mobileMenu.style.transform = 'translateY(0)';
        mobileMenu.classList.remove('inactive');
        mobileMenu.classList.add('active');
    } else if(menuState === 'active'){
        mobileMenu.style.transform = 'translateY(-400%)';
        mobileMenu.classList.remove('active');
        mobileMenu.classList.add('inactive');
    }
});

projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
        const projectCaption = document.getElementById(`${project.getAttribute('id')}Caption`);
        projectCaption.style.opacity = '1';
    });
});

projects.forEach(project => {
    project.addEventListener('mouseleave', () => {
        const projectCaption = document.getElementById(`${project.getAttribute('id')}Caption`);
        projectCaption.style.opacity = '0';
    });
});



