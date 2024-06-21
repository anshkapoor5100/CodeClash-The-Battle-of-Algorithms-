document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll('.toggle-questions');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            const targetId = this.getAttribute('data-target');
            const targetTable = document.getElementById(targetId);

            // Hide all question tables
            const allTables = document.querySelectorAll('.question-table');
            allTables.forEach(table => {
                table.style.display = 'none';
            });

            // Display the clicked question table
            if (targetTable) {
                targetTable.style.display = 'block';
                // Scroll to the question table
                targetTable.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
