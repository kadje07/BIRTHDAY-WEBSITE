document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const surpriseBtn = document.getElementById('surpriseBtn');
    const birthdaySong = document.getElementById('birthdaySong');
    const memoriesContainer = document.getElementById('memories-container');
    const countdownEl = document.getElementById('countdown');

    // Configuration
    const friendName = "Pedro"; // Change to your friend's name
    const birthdayDate = "2004-06-05"; // YYYY-MM-DD format

    // Initialize
    document.getElementById('name').textContent = friendName;

    // 1. Surprise Button (Music + Confetti + Balloons)
    surpriseBtn.addEventListener('click', () => {
        // Play music
        birthdaySong.play();
        
        // Trigger confetti
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });

        // Create balloons
        createBalloons(30);

        // Button feedback
        surpriseBtn.textContent = "🎊 Woohoo! 🎊";
        surpriseBtn.disabled = true;
    });

    // 2. Memories Section
    const memories = [
        "Our first meetup at sky in 2023, I didn't think i would be friends with you this much",
        "And our late night chats and playing sky together were some of the best times i will ever remember, I am proud to havz known you!!",
        "I hope that this will be a year of success and happiness for you, i which you will achieve your dreams and reach your goals. i hope anything you dearm of be come true one day, pleas remember that you deserve evrything good in this life❤",
        "HAPPY BIRTHDAY ZINOOO, thank you for being in my life. I HOPE ONE DAY WE MEET💕💖"

    ];

    memories.forEach(memory => {
        const memoryEl = document.createElement('div');
        memoryEl.className = 'memory-card';
        memoryEl.innerHTML = `
            <p> ${memory}</p>
        `;
        memoriesContainer.appendChild(memoryEl);
    });

    // 3. Countdown Timer
    function updateCountdown() {
        const now = new Date();
        const targetDate = new Date(birthdayDate);
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            countdownEl.innerHTML = "🎉 Today is the special day! 🎉";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        countdownEl.innerHTML = `
            ${days} days and ${hours} hours until your birthday!
        `;
    }

    // Update countdown every hour
    updateCountdown();
    setInterval(updateCountdown, 3600000);

    // Helper: Create floating balloons
    function createBalloons(count) {
        const colors = ['#e91e63', '#9c27b0', '#2196f3', '#4caf50', '#ffeb3b'];
        
        for (let i = 0; i < count; i++) {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.style.left = `${Math.random() * 100}vw`;
            balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            balloon.style.animationDuration = `${Math.random() * 5 + 3}s`;
            document.body.appendChild(balloon);

            // Remove balloon after animation
            setTimeout(() => {
                balloon.remove();
            }, 8000);
        }
    }
});