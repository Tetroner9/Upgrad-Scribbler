function openSignupModal() {
    var modal = document.getElementById('signUpModal');
    var modalContent = modal.querySelector('.modal-content');
    modal.classList.add('modal-show');
    setTimeout(() => {
        modalContent.classList.add('modal-content-show');
    }, 10);
}

function openSigninModal() {
    var modal = document.getElementById('signInModal');
    var modalContent = modal.querySelector('.modal-content');
    modal.classList.add('modal-show');
    setTimeout(() => {
        modalContent.classList.add('modal-content-show');
    }, 10);
}

function openNewPostModal() {
    var modal = document.getElementById('newPostModal');
    var modalContent = modal.querySelector('.modal-content');
    modal.classList.add('modal-show');
    setTimeout(() => {
        modalContent.classList.add('modal-content-show');
    }, 10);
}

function closeModal() {
    var signInModal = document.getElementById('signInModal');
    var signUpModal = document.getElementById('signUpModal');
    var signInModalContent = signInModal.querySelector('.modal-content');
    var signUpModalContent = signUpModal.querySelector('.modal-content');

    signInModalContent.classList.remove('modal-content-show');
    signUpModalContent.classList.remove('modal-content-show');
    
    setTimeout(() => {
        signInModal.classList.remove('modal-show');
        signUpModal.classList.remove('modal-show');
    }, 300);
}

function closeNewPostModal() {
    var modal = document.getElementById('newPostModal');
    var modalContent = modal.querySelector('.modal-content');
    modalContent.classList.remove('modal-content-show');
    
    setTimeout(() => {
        modal.classList.remove('modal-show');
    }, 300);
}

function displaySignupModal() {
    var signInModal = document.getElementById('signInModal');
    var signInModalContent = signInModal.querySelector('.modal-content');
    var signUpModal = document.getElementById('signUpModal');
    var signUpModalContent = signUpModal.querySelector('.modal-content');

    signInModalContent.classList.remove('modal-content-show');
    setTimeout(() => {
        signInModal.classList.remove('modal-show');
        signUpModal.classList.add('modal-show');
        setTimeout(() => {
            signUpModalContent.classList.add('modal-content-show');
        }, 10);
    }, 300);
}

function createPost() {
    openNewPostModal();
}
