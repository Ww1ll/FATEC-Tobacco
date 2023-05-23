const modalTobacco = document.getElementById('modalTobacco')

const fecharModal = document.getElementById('maisDezoito')

const redirecionarModal = document.getElementById('menorDezoito')

window.addEventListener('load', () => {
    modalTobacco.showModal()
})

fecharModal.addEventListener('click', () => {
    modalTobacco.close()
})

redirecionarModal.addEventListener('click', () => {
    modalTobacco.close()
    window.location.href = 'https://brasilescola.uol.com.br/'
})