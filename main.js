let expression = "";
        let isLightOn = true;

        function append(value) {
            expression += value;
            document.getElementById("display").value = expression;
        }

        function clearDisplay() {
            expression = "";
            document.getElementById("display").value = "";
        }

        function calculate() {
            try {
                document.getElementById("display").value = eval(expression);
            } catch (error) {
                document.getElementById("display").value = "Error";
            }
        }

        function toggleLight() {
            const calculator = document.querySelector(".calculator");
            const toggleButton = document.getElementById("toggle-light");

            if (isLightOn) {
                calculator.style.backgroundColor = "#333";
                calculator.style.color = "#fff";
                toggleButton.classList.add("active");
                isLightOn = false;
            } else {
                calculator.style.backgroundColor = "#fff";
                calculator.style.color = "#333";
                toggleButton.classList.remove("active");
                isLightOn = true;
            }
        }