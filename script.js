function apiCard() {

    // Carregar o arquivo JSON e renderizar os dados no HTML
    fetch('./server.json') // Nome do arquivo JSON
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao carregar o JSON.');
        }
        return response.json(); // Converte para um objeto JavaScript
    })
    .then(data => {
        const gallery = document.getElementById('container-cards');
    
        // Itera sobre as categorias no JSON
        Object.keys(data).forEach(categoria => {
            const categoryContainer = document.createElement('div');
            categoryContainer.classList.add('categoria');
    
            // Cria o título da categoria
            const title = document.createElement('h2');
            title.textContent = categoria;
            title.classList.add('categoria-titulo');
    
            // Contêiner para as imagens
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('cards-img');
    
            // Adiciona as imagens e descrições da categoria
            data[categoria].forEach(item => {
                const div = document.createElement('div');
                div.classList.add('card');
    
                const img = document.createElement('img');
                img.src = `${item.src}`; // Caminho relativo para as imagens
                img.alt = item.nome;
                img.classList.add('img-prod')
    
                const nome = document.createElement('p');
                nome.textContent = item.nome;
                nome.classList.add('nome-prod');
    
                const valor = document.createElement('p');
                valor.textContent = `R$${item.valor}`;
                valor.classList.add('valor-prod');
    
    
                div.appendChild(img);
                div.appendChild(nome);
                div.appendChild(valor);
                imageContainer.appendChild(div);
            });
    
            // Adiciona o título e as imagens ao contêiner da categoria
            categoryContainer.appendChild(title);
            categoryContainer.appendChild(imageContainer);
            gallery.appendChild(categoryContainer);
        });
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));
}

apiCard()