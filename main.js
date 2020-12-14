const nav = document.createElement('nav');
const section = document.createElement('section');

document.body.appendChild(nav);
document.body.appendChild(section);

// Creating navbar
const ul = document.createElement('ul');
nav.appendChild(ul);

const navItems = ["home", "resume", "services", "portfolio", "blog", "contact"];

navItems.forEach(item => {
    const li = document.createElement('li');
    const listContent = `
                            <div>
                                <img src="images/${item}.svg" alt="">
                            </div>
                            <span>${item}</span>
                        `;
    li.innerHTML = listContent;
    ul.appendChild(li);
})

ul.querySelector('li').classList.add('active');
ul.querySelector('div').classList.add('hover');
// console.log(ul.querySelector('li'))

// Creating body section 
const aside = document.createElement('aside');
const article = document.createElement('article');

aside.innerHTML = `
                        <h1>Paul Rossi.</h1>
                        <p>web developer</p>
                        <p>photographer</p>
                        <p>soccer fan</p>
                        <p>father of two</p>
                        <img src="images/twitter.svg" alt="">
                        <img src="images/facebook-f.svg" alt="">
                        <img src="images/google-plus-g.svg" alt="">
                        <img src="images/pinterest.svg" alt="">
                        <img src="images/linkedin-in.svg" alt="">
                    `;

article.innerHTML = `
                    <div>
                        <h1>Savvy.</h1>
                        <h1>Creative.</h1>
                        <h1>Determined.</h1>

                        <P>
                            I'm a freelance web developer based in Santa Monica, California. I've been in business since 2006
                            and work mainly with design agencies.
                        </P>

                        <P>
                            While I specialize in front-end development and WordPress, I now also do a lot of work in mobile,
                            web and responsive development.
                        </P>
                    </div>

                    <div>
                        <img src="images/download.jpg" alt="">
                    </div>
                    `;

section.appendChild(aside);
section.appendChild(article);