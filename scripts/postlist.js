document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById('deletePostModal');
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeDeletePostModal();
        }
    });
});

function viewDeletePostModal(id) {
    var modal = document.getElementById('deletePostModal');
    modal.style.display = 'block';
    var modalContent = modal.querySelector('.delete-post-modal-content');
    modalContent.style.animationName = 'pop-in';
    modal.setAttribute('idToDelete', id);
}

function closeDeletePostModal() {
    var modal = document.getElementById('deletePostModal');
    var modalContent = modal.querySelector('.delete-post-modal-content');
    modalContent.style.animationName = 'pop-out';

    setTimeout(function() {
        modal.style.display = 'none';
    }, 300);
    event.preventDefault();
}

function deletePost(e) {
    event.preventDefault();
    var modal = document.getElementById('deletePostModal');
    var modalContent = modal.querySelector('.delete-post-modal-content');
    modalContent.style.animationName = 'pop-out';

    setTimeout(function() {
        modal.style.display = 'none';
        var idToDelete = modal.getAttribute('idToDelete');
        document.getElementById(idToDelete).remove();
    }, 300);
}

function viewFullPost() {
    window.location.href = "./post.html";
}
