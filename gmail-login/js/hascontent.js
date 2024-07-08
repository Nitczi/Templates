function hasc(){
    document.addEventListener('DOMContentLoaded', function () {
        var inputField = document.getElementById('password-box');

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
}

hasc()
