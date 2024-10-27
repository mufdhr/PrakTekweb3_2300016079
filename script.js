
        document.getElementById('dark-mode').addEventListener('change', function() {
            document.body.classList.toggle('dark-mode', this.checked);
        });

        document.getElementById('font-size').addEventListener('input', function() {
            document.body.style.fontSize = this.value + 'px';
        });
        document.getElementById('serif-font').addEventListener('click', function() {
            document.body.style.fontFamily = 'serif';
        });

        document.getElementById('sans-serif-font').addEventListener('click', function() {
            document.body.style.fontFamily = 'Arial, sans-serif';
        });

        document.getElementById('color').addEventListener('change', function() {
            document.body.style.backgroundColor = this.value;
        });
        
        function addTask() {
            // Implement addTask function
        }

        function deleteTask(element) {
            // Implement deleteTask function
        }

        function editTask(element) {
            // Implement editTask function
        }

        function changeBackgroundColor(color) {
            document.body.style.backgroundColor = color;
        }

        function increaseFontSize() {
            document.body.style.fontSize = 'larger';
        }

        function decreaseFontSize() {
            document.body.style.fontSize = 'smaller';
        }

        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }

        function changeFontStyle() {
            document.body.style.fontFamily = 'Courier New, monospace';
        }
