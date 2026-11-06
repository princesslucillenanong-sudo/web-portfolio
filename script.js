let currentAvatarIndex = 0;
    
    function updateAvatarDisplay() {
        const images = document.querySelectorAll('.about-avatar-slider .avatar-img');
        if (images.length === 0) return;

        images.forEach((img, index) => {
            img.classList.remove('active', 'peeking');
            
            if (index === currentAvatarIndex) {
                img.classList.add('active');
            } else if (index === (currentAvatarIndex + 1) % images.length) {
                img.classList.add('peeking');
            }
        });
    }

    function nextAvatar() {
        const images = document.querySelectorAll('.about-avatar-slider .avatar-img');
        currentAvatarIndex = (currentAvatarIndex + 1) % images.length;
        updateAvatarDisplay();
    }

    window.addEventListener('DOMContentLoaded', () => {
        updateAvatarDisplay();
    });

      function toggleTheme() {
            document.body.classList.toggle('light-mode');
        }

       
        const navLinks = document.querySelectorAll('.navbar a');
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', function() {
                for (let j = 0; j < navLinks.length; j++) {
                    navLinks[j].classList.remove('active');
                }
                this.classList.add('active');
            });
        }

        
        const flipCard = document.getElementById('flipCard');
        flipCard.addEventListener('click', function() {
            flipCard.classList.toggle('flipped');
        });