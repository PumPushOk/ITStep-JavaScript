const site = {
    header: {
        logo: {
            image: 'https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-1024x655.png',
            tag: 'logo'
        },
        menu: [
            { title: 'First', link: '#first_header' },
            { title: 'Second', link: '#second_header' },
            { title: 'Third', link: '#third_header' }
        ]
    },
    main: {
        blocks: [
            { header: 'First', paragraphs: ['text1', 'text2', 'text3'] },
            { header: 'Second', paragraphs: ['text1', 'text2', 'text3'] },
            { header: 'Third', paragraphs: ['text1', 'text2', 'text3'] },
        ]
    },
    footer: '&copy; 2024 Simple Website. All rights reserved.'
};

site.main.blocks.forEach((value) => {
    value.paragraphs.forEach((value1, index) => value.paragraphs[index] = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione neque necessitatibus magni ad aperiam assumenda ex quia explicabo qui porro dignissimos, impedit in enim dolores rem sint voluptas tempora perspiciatis ullam quos provident natus non sequi? Error neque soluta et modi consectetur quaerat iste rerum ipsa molestiae, excepturi architecto doloremque?');
}
)

const container = document.querySelector('.container');

let string = `
        <header>
            <img src="${site.header.logo.image}" alt="${site.header.logo.tag}">
            <nav>
                <ul>
                    <li><a href = "${site.header.menu[0].link}">${site.header.menu[0].title}</a></li>
                    <li><a href = "${site.header.menu[1].link}">${site.header.menu[1].title}</a></li>
                    <li><a href = "${site.header.menu[2].link}">${site.header.menu[2].title}</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <h2 id="first_header">${site.main.blocks[0].header}</h2>
            <p>${site.main.blocks[0].paragraphs[0]}</p>
            <p>${site.main.blocks[0].paragraphs[1]}</p>
            <p>${site.main.blocks[0].paragraphs[2]}</p>
        
            <h2 id="second_header">${site.main.blocks[1].header}</h2>
            <p>${site.main.blocks[1].paragraphs[0]}</p>
            <p>${site.main.blocks[1].paragraphs[1]}</p>
            <p>${site.main.blocks[1].paragraphs[2]}</p>
        
            <h2 id="third_header">${site.main.blocks[2].header}</h2>
            <p>${site.main.blocks[2].paragraphs[0]}</p>
            <p>${site.main.blocks[2].paragraphs[1]}</p>
            <p>${site.main.blocks[2].paragraphs[2]}</p>
        </main>
        
        <footer>
            <p>${site.footer}</p>
        </footer>
        `;

container.innerHTML = string;