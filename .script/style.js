
const grid2 = document.querySelector('.grid2');
const grid = document.querySelector('.grid');
const navPai = document.querySelector('.nav');



const criarNav = () =>{
    navPai.setAttribute('id', 'mainNavigation');

    const navRole = document.createElement('nav');
    navRole.setAttribute('role', 'navigation');

    const insideRole = document.createElement('div');
    insideRole.className = 'py-3 text-center border-bottom';
    navRole.appendChild(insideRole);

    const insedeImg = document.createElement('img');
    insedeImg.src = '../img/envato.png';
    insedeImg.className ='invert';

    insideRole.appendChild(insedeImg);

    // fim da navigation role

    const navSpand = document.createElement('div');
    navSpand.className = 'navbar-expand-md';

        const insideSpan = document.createElement('div');
        insideSpan.className = 'navbar-dark text-center my-2';

        navSpand.appendChild(insideSpan);

        const butNav = document.createElement('button');
        butNav.className = 'navbar-toggler w-75';
        butNav.setAttribute('type','button');
        butNav.setAttribute('data-bs-toggle','collapse');
        butNav.setAttribute('data-bs-target', '#navbarNavDropdown'); 
        butNav.setAttribute('aria-controls','navbarNavDropdown' );
        butNav.setAttribute('aria-expanded','false');
        butNav.setAttribute('aria-label', 'Toggle navigation');

        insideSpan.appendChild(butNav);

        const insiSpan = document.createElement('span');
            insiSpan.className = 'navbar-toggler-icon';

            butNav.appendChild(insiSpan);

        const sidSpan = document.createElement('span');
            sidSpan.className ='align-middle';
            sidSpan.appendChild(document.createTextNode('Menu'));

            butNav.appendChild(sidSpan);

        const navDar = document.createElement('div');
        navDar.className = 'navbar-expand-md';
            const insideDrk = document.createElement('div');
            insideDrk.className = 'navbar-dark text-center my-2';
            navDar.appendChild(insideDrk);

        const navCtr = document.createElement('div');
        navCtr.className = 'text-center mt-3 collapse navbar-collapse';
        navCtr.setAttribute('id', 'avbarNavDropdown');

        navDar.appendChild(navCtr);

        const initUl = document.createElement('ul');
        initUl.className ='navbar-nav mx-auto';
        navCtr.appendChild(initUl);
            //daqui em diante iniciar as contagem de LI

            const lI1 = document.createElement('li');
            lI1.className = 'nav-item'; 
                const insideLIn1 = document.createElement('a');
                    insideLIn1.className = 'nav-link active';
                    insideLIn1.setAttribute('aria-current','page');
                    insideLIn1.appendChild(document.createTextNode('Home'));
                     lI1.appendChild(insideLIn1);
            initUl.appendChild(lI1);



            const lI2 = document.createElement('li');
            lI2.className = 'nav-item';
            const insideLIn2 = document.createElement('a');
            insideLIn2.className = 'nav-link';
            insideLIn2.setAttribute('aria-current','page');
            insideLIn2.appendChild(document.createTextNode('Book Hotel'));
            lI2.appendChild(insideLIn2);
            initUl.appendChild(lI2);

        
            const lI3 = document.createElement('li');
            lI3.className = 'nav-item';
            const insideLIn3 = document.createElement('a');
            insideLIn3.className = 'nav-link';
            insideLIn3.setAttribute('aria-current','page');
            insideLIn3.appendChild(document.createTextNode('Destinations'));
            lI3.appendChild(insideLIn3);


            initUl.appendChild(lI3);


            const lI4 = document.createElement('li');
            lI4.className = 'nav-item';
            const insideLIn4 = document.createElement('a');
            insideLIn4.className = 'nav-link';
            insideLIn4.setAttribute('aria-current','page');
            insideLIn4.appendChild(document.createTextNode('Policy'));
            lI4.appendChild(insideLIn4);


            initUl.appendChild(lI4);




            const lI5 = document.createElement('li');
            lI5.className = 'nav-item dropdown';
            const insideLIn5 = document.createElement('a');
            insideLIn5.className = 'nav-link dropdown-toggle';
            insideLIn5.setAttribute('id','navbarDropdownMenuLink');
            insideLIn5.setAttribute('role','button');
            insideLIn5.setAttribute('data-bs-toggle','dropdown');
            insideLIn5.setAttribute('aria-expanded','false');
            insideLIn5.appendChild(document.createTextNode('Company'));
            lI5.appendChild(insideLIn5);

            const initUl2 = document.createElement('ul');
            initUl2.className ='dropdown-menu';
            initUl2.setAttribute('aria-labelledby','navbarDropdownMenuLink'); 
            lI5.appendChild(initUl2);
            


            initUl.appendChild(lI5);












    navPai.appendChild(navRole);
    navPai.appendChild(navSpand);
    navPai.appendChild(navDar);

}


/*const criar2 =() =>{
    const pai2 = document.createElement('div');
    pai2.className = 'pai2';

    const filhoS2 = document.createElement('button');
    filhoS2.className = 'butt1';
    filhoS2.appendChild(document.createTextNode('clique aqui'));

    pai2.appendChild(filhoS2);

    grid2.appendChild(pai2);

}

const createP = () => {

    const pai = document.createElement('div');    
    const filho1 = document.createElement('div');
    const filho2 = document.createElement('p');
    const filho3 = document.createElement('button', 'clique aqui');

    pai.className ='pai';
    filho1.className ='filho1';
    filho2.className = 'paragraFo';
    filho3.className ="but2";
    filho3.setAttribute('placeholder', 'clique aqui');
    filho3.setAttribute('type', 'button');
    filho3.setAttribute('value', 'AGAIN');
    filho3.appendChild(document.createTextNode('Clique aqui!'));
    
    
   


    pai.appendChild(filho1);
    pai.appendChild(filho2);
   pai.appendChild(filho3);
    
    grid.appendChild(pai);
criar2();

createP();
}*/

criarNav();


