document.addEventListener('DOMContentLoaded', () => {
    const menuIcons = document.querySelectorAll('.menu-icon');

    menuIcons.forEach(icon => {
        const menu = icon.querySelector('.menu');

        icon.addEventListener('click', (event) => {
            event.stopPropagation();
            document.querySelectorAll('.menu').forEach(m => {
                if (m !== menu) m.style.display = 'none';
            });
            menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
        });
    });

    document.addEventListener('click', () => {
        document.querySelectorAll('.menu').forEach(menu => {
            menu.style.display = 'none';
        });
    });
});
