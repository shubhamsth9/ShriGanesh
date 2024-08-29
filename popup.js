const celebrateBtn = document.getElementById('celebrateBtn');

celebrateBtn.addEventListener('click', () => {
    // trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.45 }
    });

    // button animation
    celebrateBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        celebrateBtn.style.transform = 'scale(1)';
    }, 100);
});