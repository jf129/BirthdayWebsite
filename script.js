// Confetti animation
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

class Confetti {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 5 + 2;
        this.speedX = Math.random() * 8 - 4;
        this.speedY = Math.random() * 5 + 5;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 10 - 5;
        this.colors = ['#FF6B9D', '#667eea', '#ffd700', '#ff1744', '#66BB6A', '#764ba2'];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.opacity = 1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        this.speedY += 0.2; // gravity
        this.opacity -= 0.02;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = confetti.length - 1; i >= 0; i--) {
        confetti[i].update();
        confetti[i].draw();
        
        if (confetti[i].opacity <= 0) {
            confetti.splice(i, 1);
        }
    }
    
    if (confetti.length > 0) {
        requestAnimationFrame(animate);
    }
}

function celebrate() {
    // Create confetti
    for (let i = 0; i < 100; i++) {
        confetti.push(new Confetti());
    }
    animate();
    
    // Bounce animation
    const card = document.querySelector('.card');
    card.style.animation = 'none';
    setTimeout(() => {
        card.style.animation = '';
    }, 10);
}

// Music toggle
let isPlaying = false;
const audioElement = document.getElementById('birthday-music');

function toggleMusic() {
    const musicBtn = document.querySelector('.music-btn');
    
    if (isPlaying) {
        audioElement.pause();
        musicBtn.textContent = '🎵 Birthday Music';
        isPlaying = false;
    } else {
        audioElement.play();
        musicBtn.textContent = '⏸️ Pause Music';
        isPlaying = true;
    }
}

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Auto-celebrate on load for extra festive feel
window.addEventListener('load', () => {
    setTimeout(() => {
        celebrate();
    }, 500);
});
