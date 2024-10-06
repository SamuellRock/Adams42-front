function showCardDetails(cardType) {
    const cardTitle = document.getElementById('card-title');
    const cardDescription = document.getElementById('card-description');
    const cardDetails = document.getElementById('card-details');

    if (cardType === 'projeto') {
        cardTitle.innerText = 'O Projeto';
        cardDescription.innerText = 'O Devengers é um projeto que utiliza as tecnologias mais avançadas como Python, React e IA para criar soluções inovadoras!';
    } else if (cardType === 'python') {
        cardTitle.innerText = 'Python';
        cardDescription.innerText = 'Python é a linguagem principal usada no backend para processamento de dados e desenvolvimento de sistemas robustos.';
    } else if (cardType === 'react') {
        cardTitle.innerText = 'React';
        cardDescription.innerText = 'React é a biblioteca utilizada para criar interfaces dinâmicas e responsivas no front-end.';
    } else if (cardType === 'ia') {
        cardTitle.innerText = 'Inteligência Artificial';
        cardDescription.innerText = 'O uso de IA permite que o projeto tenha funcionalidades inteligentes, como aprendizado de máquina e automação de processos.';
    }

    cardDetails.classList.remove('hidden');
}

function closeCardDetails() {
    document.getElementById('card-details').classList.add('hidden');
}
