document.addEventListener("DOMContentLoaded", () => {
    // Placeholder for potential future functionality.
    const squares = document.querySelectorAll('.square');
    
    squares.forEach(square => {
        square.addEventListener('click', () => {
            alert(`You clicked on square ${square.id}`);
        });
    });
});
