// Função para permitir o drop do item arrastado
function allowDrop(event) {
    event.preventDefault();
}

// Função chamada ao iniciar o arrasto de um item
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Função chamada ao soltar um item na nova coluna
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var droppedCard = document.getElementById(data);
    
    // Garantir que o card seja movido para a nova coluna
    event.target.appendChild(droppedCard);
    
    // Atualizar a coluna do card após o movimento
    updateColumn(droppedCard, event.target.id);
}

// Função para atualizar o atributo 'data-column' do card ao ser movido
function updateColumn(card, columnId) {
    card.setAttribute("data-column", columnId);
}

// Função chamada ao clicar em "Atender"
function attendOpportunity(event, cardId) {
    // Recupera o card e a coluna "Em Atendimento"
    var card = document.getElementById(cardId);
    var inProgressColumn = document.getElementById("in-progress");

    // Remove o botão de "Atender"
    var attendButton = document.getElementById("attend-btn-" + cardId.replace('card', ''));
    attendButton.style.display = 'none'; // Oculta o botão

    // Mover o card para a coluna "Em Atendimento"
    inProgressColumn.appendChild(card);

    // Atualiza o atributo 'data-column' do card para refletir a nova coluna
    updateColumn(card, 'in-progress');
}

// Função para abrir o modal de detalhes
function openModal() {
    // Aqui você pode adicionar o código para exibir o modal, se necessário.
    alert("Abrir detalhes...");
}

// Exemplo de configuração de temporizador para cada card
function startTimer(timerElement) {
    var timeLeft = parseInt(timerElement.getAttribute("data-time"));
    var display = timerElement.querySelector(".timer");

    var interval = setInterval(function () {
        var minutes = Math.floor(timeLeft / 60);
        var seconds = timeLeft % 60;
        display.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        timeLeft--;

        // Quando o tempo acabar, parar o intervalo
        if (timeLeft < 0) {
            clearInterval(interval);
        }
    }, 1000);
}

// Inicialização dos temporizadores em cada card (exemplo)
window.onload = function () {
    var timers = document.querySelectorAll('.timer');
    timers.forEach(function(timer) {
        startTimer(timer);
    });
}

// Função do Modal
function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Carregar o estado quando a página for carregada
window.onload = loadState;

