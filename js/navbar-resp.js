let navSlide = () =>
{
    let burger      = document.querySelector('.burger');
    let nav         = document.querySelector('.nav-links');
    let navLinks    = document.querySelectorAll('.nav-links li');

    
    burger.addEventListener('click', ()=>
    {
        // toggle nav
        nav.classList.toggle('nav-active');

        // animate links
        navLinks.forEach((link, index) =>
        {
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else
            {
                link.style.animation    =   `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
                // console.log(index / 7);
            }
            
        });

        // burger animation
        burger.classList.toggle('toggle');
    });

    
}

navSlide();