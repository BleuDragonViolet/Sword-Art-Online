document.addEventListener("DOMContentLoaded", function() {
    // Liste des fichiers musicaux à lire
    const musicFiles = [
        'sound/Sword Art Online - Opening 1.mp3',
        'sound/A Brisk Conversation.mp3',
        'sound/A Narrow Escape.mp3',
        'sound/A New World of Fairies.mp3',
        'sound/A Strategy Meeting.mp3',
        'sound/A Tender Feeling.mp3',
        'sound/Daily Life, You and Me.mp3',
        'sound/Dance with Me.mp3',
        'sound/Death Gun.mp3',
        'sound/Desolate Landscape.mp3',
        'sound/Drive Your Way.mp3',
        'sound/Got to Win.mp3',
        'sound/Gracefully.mp3',
        'sound/Gunland.mp3',
        'sound/He, or She?.mp3',
        'sound/Heartbreaking Reality.mp3',
        'sound/Luminous Sword.mp3',
        'sound/March Down.mp3',
        'sound/Moon and Shadow.mp3',
        'sound/No-Escape.mp3',
        'sound/Peace, Again.mp3',
        'sound/Survive the Swordland.mp3',
        'sound/Swordland - To Be Continued.mp3',
        'sound/Swordland.mp3',
        'sound/Tears for You.mp3',
        'sound/The First Town.mp3',
        'sound/You Are Not Alone #3.mp3',
        'sound/You Are Not Alone Acoustic Guitar Version.mp3',
        'sound/You Are Not Alone Piano Version.mp3',
        'sound/You Are Not Alone.mp3',
        'sound/You Are the Winner!.mp3',
        'sound/Yui.mp3',
        // Ajoute d'autres fichiers si nécessaire
    ];

    let currentMusicIndex = 0;
    let audioFond = new Audio();
    let audioMenu = new Audio('SoundM/Menu.mp3');
    let buttonClickSound = new Audio('SoundM/bouton.m4a'); // Son à jouer lors d'un clic sur un bouton
    let isHoverSoundPlaying = false;

    // Fonction pour jouer la musique de fond
    function playBackgroundMusic() {
        audioFond.src = musicFiles[currentMusicIndex];
        audioFond.play().catch(error => {
            console.error("Erreur lors de la lecture de la musique de fond :", error);
        });

        audioFond.onended = function() {
            currentMusicIndex = (currentMusicIndex + 1) % musicFiles.length;
            playBackgroundMusic();
        };
    }

    // Écouter les clics sur le document pour démarrer la musique de fond
    document.body.addEventListener('click', function() {
        if (audioFond.paused) {
            playBackgroundMusic();
        }
        
        // Joue le son de bouton à chaque clic, même sur les zones non cliquables
        buttonClickSound.currentTime = 0; // Remettre le son au début
        buttonClickSound.play().catch(error => {
            console.error("Erreur lors de la lecture du son de bouton :", error);
        });
    });

    // Écouter les événements de survol sur le header
    const header = document.querySelector('header');

    header.addEventListener('mouseenter', function() {
        if (!isHoverSoundPlaying) {
            audioMenu.currentTime = 0; // Remettre le son au début
            audioMenu.play().catch(error => {
                console.error("Erreur lors de la lecture du son du menu :", error);
            });
            isHoverSoundPlaying = true; // Indiquer que le son est en cours de lecture
        }
    });

    header.addEventListener('mouseleave', function() {
        isHoverSoundPlaying = false; // Réinitialiser le flag lorsque la souris sort du header
    });

    // Écouter les événements de clic sur chaque bouton
    const clickableButtons = document.querySelectorAll('nav button');
    
    clickableButtons.forEach(button => {
        button.addEventListener('click', function() {
            buttonClickSound.currentTime = 0; // Remettre le son au début
            buttonClickSound.play().catch(error => {
                console.error("Erreur lors de la lecture du son de bouton :", error);
            });
        });
    });
});
