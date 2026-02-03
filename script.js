const music = document.getElementById('bgMusic');

function playMusic() { music.play(); }
function pauseMusic() { music.pause(); }

function showNextScreen() {
    document.getElementById('screen1').classList.add('hidden');
    document.getElementById('screen2').classList.remove('hidden');
}

function showGiftMenu() {
    document.getElementById('screen2').classList.add('hidden');
    document.getElementById('screen3').classList.remove('hidden');
}

function moveNo() {
    const btn = document.getElementById('noBtn');
    btn.style.position = 'absolute';
    btn.style.left = Math.random() * 80 + '%';
    btn.style.top = Math.random() * 80 + '%';
}

function showLetter() {
    const area = document.getElementById('contentArea');
    area.innerHTML = `
        <h3 class="pink-text">For My Ananda ❤️</h3>
        <div style="text-align: left; font-size: 14px;">
            <p>Hey Ananda, My love,</p>
            <p>I created this website for you as a token of my love. This isn't the actual gift I'm planning for yet, but I thought this would be a one-of-a-kind gesture for my <b>CSE graduate girlfriend</b>—my everything.</p>
            <p>I hope this makes you smile. We've been together for literally 4 years now, but this is finally our first Valentine's Day together. I know this is a simple thing, but the effort is what's real.</p>
            <p>I manifest that no energy can break us apart or interfere in our lives; <b>we are 1 1</b>.</p>
            <p style="text-align: center; color: #d81b60;">With infinity LOVE, <br> Sanjay</p>
        </div>`;
}

function showMemories() {
    const area = document.getElementById('contentArea');
    area.innerHTML = `
        <p class="pink-text">📸 Our Memories</p>
        <div class="photo-grid">
            <img src="us1.jpg"><img src="us2.jpg">
            <img src="us3.jpg"><img src="us4.jpg">
        </div>
        <p style="font-size: 12px; margin-top: 10px;">4 years of us! ❤️</p>
        <button class="back-btn" onclick="clearContent()">Back</button>`;
}

function clearContent() {
    document.getElementById('contentArea').innerHTML = `<p class="placeholder-text">Click a gift above to see the surprise!</p>`;
}

// QUIZ LOGIC
function startQuiz() {
    const area = document.getElementById('contentArea');
    area.innerHTML = `
        <p class="pink-text">🧩 Question 1</p>
        <p>Since you're a CSE Grad... what is the Boolean value of my love for you?</p>
        <button class="back-btn" onclick="wrongAnswer()">False</button>
        <button class="back-btn" onclick="quizQ2()">True</button>
        <button class="back-btn" onclick="wrongAnswer()">Null</button>`;
}

function wrongAnswer() {
    alert("Try again my love 😌🤍 you know the answer");
}

function quizQ2() {
    const area = document.getElementById('contentArea');
    area.innerHTML = `
        <p class="pink-text">🧩 Question 2</p>
        <p>We've been together for 4 years! When was our first official Valentine's Day together?</p>
        <button class="back-btn" onclick="wrongAnswer()">2023</button>
        <button class="back-btn" onclick="wrongAnswer()">2024</button>
        <button class="back-btn" onclick="quizQ3()">This is our first ❤️</button>`;
}

function quizQ3() {
    const area = document.getElementById('contentArea');
    area.innerHTML = `
        <p class="pink-text">🧩 Question 3</p>
        <p>What does "1 1" actually represent to us?</p>
        <button class="back-btn" style="width: 100%; margin-bottom: 5px;" onclick="wrongAnswer()">Binary code for '3'</button><br>
        <button class="back-btn" style="width: 100%; margin-bottom: 5px;" onclick="quizFinish()">Two individuals choosing each other ❤️</button><br>
        <button class="back-btn" style="width: 100%;" onclick="wrongAnswer()">Two separate people</button>`;
}

function quizFinish() {
    const area = document.getElementById('contentArea');
    area.innerHTML = `
        <h3 class="pink-text">🏆 You Passed!</h3>
        <p>Exactly. Two individuals choosing to stay together forever. I love you, my 1 1! ❤️</p>
        <button class="back-btn" onclick="clearContent()">Back</button>`;
}