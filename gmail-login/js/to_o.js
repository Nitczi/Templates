if (document.getElementById("next-btt") != null) {
    document.getElementById("next-btt").onclick = function () {
        location.href = "login.html";
    };
}

function hasc(){
    document.addEventListener('DOMContentLoaded', function () {
        var inputField = document.getElementById('email-box');

        function togglePlaceholder() {
            if (inputField.value.trim() !== '') {
                inputField.classList.add('has-content');
            } else {
                inputField.classList.remove('has-content');
            }
        }

        togglePlaceholder();
        inputField.addEventListener('input', togglePlaceholder);
        }
    );
};

hasc()