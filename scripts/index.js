function displayAllPosts() {
    window.location.href = "./html/postslist.html";
}

function openNewPostModal() {
    var modal = document.getElementById('newPostModal');
    var modalContent = modal.querySelector('.modal-content');
    modal.classList.add('modal-show');
    setTimeout(() => {
        modalContent.classList.add('modal-content-show');
    }, 10);
}

function closeNewPostModal() {
    var modal = document.getElementById('newPostModal');
    var modalContent = modal.querySelector('.modal-content');
    modalContent.classList.remove('modal-content-show');
    
    setTimeout(() => {
        modal.classList.remove('modal-show');
    }, 300);
}

function createPost() {
    openNewPostModal();
}
