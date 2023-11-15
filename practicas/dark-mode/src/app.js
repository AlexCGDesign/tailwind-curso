document.addEventListener('DOMContentLoaded', ()=>{

    const switcherTheme = document.querySelector('[data-id="switch-theme"]');
    const htmlTag = document.documentElement;
    
    if(htmlTag.getAttribute('data-theme') === 'dark'){
        switcherTheme.checked = true;
    }

    switcherTheme.addEventListener('change', toggleTheme);

    function toggleTheme(){
        const newTheme = switcherTheme.checked ? 'dark' : 'light';

        htmlTag.setAttribute('data-theme', newTheme);

        localStorage.setItem('theme', newTheme);
    }
})