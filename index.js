document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit");
    const inputs = document.querySelectorAll("input[required]");
    const soldierNumInput = document.getElementById("solider-num");

    const checkInputs = () => {
        let allFilled = true;
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false;
            }
        });
        
        if (!validateSoldierNum(soldierNumInput.value)) {
            allFilled = false;
        }
        
        submitButton.disabled = !allFilled;
    };

    const validateSoldierNum = (num) => {
        return /^[0-9]{7}$/.test(num);
    };

    inputs.forEach(input => {
        input.addEventListener("input", checkInputs);
    });

    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (!submitButton.disabled) {
            window.location.href = "./end.html";
        }
    });

    checkInputs();
});
