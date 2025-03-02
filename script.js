function apiCard() {
    fetch('./server.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao carregar o JSON.');
        }
        return response.json();
    })
    .then(data => {
        const gallery = document.getElementById('container-cards');
    
        Object.keys(data).forEach(categoria => {
            const categoryContainer = document.createElement('div');
            categoryContainer.classList.add('categoria');
    
            const title = document.createElement('h2');
            title.textContent = categoria;
            title.classList.add('categoria-titulo');
    
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('cards-img');
    
            // Ordena os itens do menor para o maior valor
            data[categoria].sort((a, b) => a.valor - b.valor);
    
            data[categoria].forEach(item => {
                const div = document.createElement('div');
                div.classList.add('card');

                const img = document.createElement('img');
                img.src = `${item.src}`;
                img.alt = item.nome;
                img.classList.add('img-prod');

                const nome = document.createElement('p');
                nome.textContent = item.nome;
                nome.classList.add('nome-prod');

                const valor = document.createElement('p');
                valor.textContent = `R$${item.valor},00`;
                valor.classList.add('valor-prod');

                const desc = document.createElement('p');
                desc.textContent = item.descricao;
                desc.classList.add('desc-prod');
    
                div.appendChild(img);
                div.appendChild(nome);
                div.appendChild(desc);
                div.appendChild(valor);

                imageContainer.appendChild(div);
            });
    
            categoryContainer.appendChild(title);
            categoryContainer.appendChild(imageContainer);
            gallery.appendChild(categoryContainer);
        });
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));
}

apiCard();
