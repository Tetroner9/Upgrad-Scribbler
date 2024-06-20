document.addEventListener('DOMContentLoaded', function () {
    var signUpModal = document.getElementById('signUpModal');
    var signInModal = document.getElementById('signInModal');
    var createPostModal = document.getElementById('createPostModal');

    var signUpBtn = document.getElementById('signUpBtn');
    var signInBtn = document.getElementById('signInBtn');
    var allPostsBtn = document.getElementById('allPostsBtn');
    var createPostBtn = document.getElementById('createPostBtn');

    var closeButtons = document.querySelectorAll('.close');

    function openModal(modal) {
        modal.style.display = 'block';
        modal.querySelector('.modal-content').classList.remove('exit');
    }

    function closeModal(modal) {
        var modalContent = modal.querySelector('.modal-content');
        modalContent.classList.add('exit');
        setTimeout(function() {
            modal.style.display = 'none';
            modalContent.classList.remove('exit');
        }, 400); // Match this duration with the exit animation duration
    }

    signUpBtn.onclick = function () {
        openModal(signUpModal);
    };

    signInBtn.onclick = function () {
        openModal(signInModal);
    };

    allPostsBtn.onclick = function () {
        window.location.href = 'html/postslist.html'; // Adjust this URL to your actual blog list page
    };

    createPostBtn.onclick = function () {
        openModal(createPostModal);
    };

    closeButtons.forEach(function (btn) {
        btn.onclick = function () {
            var modal = btn.closest('.modal');
            closeModal(modal);
        };
    });

    window.onclick = function (event) {
        if (event.target == signUpModal) {
            closeModal(signUpModal);
        } else if (event.target == signInModal) {
            closeModal(signInModal);
        } else if (event.target == createPostModal) {
            closeModal(createPostModal);
        }
    };

    var switchToSignUp = document.getElementById('switchToSignUp');
    switchToSignUp.onclick = function () {
        closeModal(signInModal);
        setTimeout(function() {
            openModal(signUpModal);
        }, 400); // Match this duration with the exit animation duration
    };
});
