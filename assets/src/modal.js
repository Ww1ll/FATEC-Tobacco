const modalTobacco = document.getElementById('modalTobacco')

const fecharModal = document.getElementById('maisDezoito')

const redirecionarModal = document.getElementById('menorDezoito')

window.addEventListener('load', () => {
    const modalShown = localStorage.getItem('modalShown')

    if(!modalShown){
        modalTobacco.showModal()
        localStorage.setItem('modalShown', 'true')
    }
})

fecharModal.addEventListener('click', () => {
    modalTobacco.close()
})

redirecionarModal.addEventListener('click', () => {
    modalTobacco.close()
    window.location.href = 'https://brasilescola.uol.com.br/'
})