/**
 * 🌈 奇幻字母樂園 (Fantasy Keyboard Park) - 核心遊戲引擎
 */

// --- 兒童卡通音效合成器 (Web Audio API Synthesizer) ---
class SoundSynthesizer {
    constructor() {
        this.ctx = null;
        this.enabled = true;
    }

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggle(state) {
        this.enabled = state !== undefined ? state : !this.enabled;
        return this.enabled;
    }

    // 🔨 充氣玩具搥打聲 (Squeak)
    playSqueak() {
        if (!this.enabled) return;
        this.init();
        const now = this.ctx.currentTime;
        
        // Squeak squeak slide sound
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(1400, now + 0.08); // Quick slide up

        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

        osc.start(now);
        osc.stop(now + 0.13);
    }

    // 🎈 氣球爆破聲 (Balloon Pop)
    playPop() {
        if (!this.enabled) return;
        this.init();
        const now = this.ctx.currentTime;

        // White noise pop burst
        const bufferSize = this.ctx.sampleRate * 0.08; // 80ms noise
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noiseNode = this.ctx.createBufferSource();
        noiseNode.buffer = buffer;

        // Bandpass filter to make it sound like a balloon pop
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 400;
        filter.Q.value = 1.0;

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

        noiseNode.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        noiseNode.start(now);
        noiseNode.stop(now + 0.08);

        // Low frequency thud helper
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();
        osc.connect(oscGain);
        oscGain.connect(this.ctx.destination);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(60, now + 0.06);
        oscGain.gain.setValueAtTime(0.15, now);
        oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.start(now);
        osc.stop(now + 0.07);
    }

    // 🦖 恐龍大胃王咀嚼聲 (Nom Nom Chew)
    playChew() {
        if (!this.enabled) return;
        this.init();
        const now = this.ctx.currentTime;

        // Two rapid crunching double sounds
        const playCrunch = (timeOffset) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(150, now + timeOffset);
            osc.frequency.linearRampToValueAtTime(40, now + timeOffset + 0.06);

            gain.gain.setValueAtTime(0.1, now + timeOffset);
            gain.gain.exponentialRampToValueAtTime(0.001, now + timeOffset + 0.06);

            osc.start(now + timeOffset);
            osc.stop(now + timeOffset + 0.07);
        };

        playCrunch(0);
        playCrunch(0.09);
    }

    // 🎉 成功拼字/歡慶音效
    playSuccess() {
        if (!this.enabled) return;
        this.init();
        const now = this.ctx.currentTime;
        const gain = this.ctx.createGain();
        gain.connect(this.ctx.destination);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

        // Happy chiptune upward melody
        const melody = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99]; // C4, E4, G4, C5, E5, G5
        melody.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + idx * 0.06);
            osc.connect(gain);
            osc.start(now + idx * 0.06);
            osc.stop(now + idx * 0.06 + 0.12);
        });
    }

    // 🌀 溫和的彈性彈跳音效 (Wrong Key, No Stress)
    playSpringWrong() {
        if (!this.enabled) return;
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        // Friendly cartoony spring sound slide down
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.quadraticRampToValueAtTime(120, now + 0.18);
        
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

        osc.start(now);
        osc.stop(now + 0.19);
    }
}

// --- 兒童友善英文發音與朗讀 (Web Speech API) ---
class VoiceSpeechEngine {
    constructor() {
        this.enabled = true;
        this.synth = window.speechSynthesis;
        this.voice = null;
        
        if (this.synth) {
            const loadVoices = () => {
                const voices = this.synth.getVoices();
                // Prefer Google US English or standard English voice
                this.voice = voices.find(v => v.lang.startsWith('en-US')) || 
                             voices.find(v => v.lang.startsWith('en')) || 
                             voices[0];
            };
            loadVoices();
            if (this.synth.onvoiceschanged !== undefined) {
                this.synth.onvoiceschanged = loadVoices;
            }
        }
    }

    toggle(state) {
        this.enabled = state !== undefined ? state : !this.enabled;
        return this.enabled;
    }

    speak(text, rate = 0.88, pitch = 1.25) { // friendly higher pitch
        if (!this.enabled || !this.synth) return;
        this.synth.cancel(); // Interrupt
        const utter = new SpeechSynthesisUtterance(text);
        if (this.voice) utter.voice = this.voice;
        utter.lang = 'en-US';
        utter.rate = rate;
        utter.pitch = pitch;
        this.synth.speak(utter);
    }
}

// ⌨️ 標準指法鍵盤指引色彩映射表
const KEYBOARD_MAP = {
    '1': 'left-pink', '2': 'left-pink', '3': 'left-ring', '4': 'left-middle', '5': 'left-index', '6': 'left-index',
    '7': 'right-index', '8': 'right-index', '9': 'right-middle', '0': 'right-ring', '-': 'right-pink', '=': 'right-pink',
    
    'Q': 'left-pink', 'W': 'left-ring', 'E': 'left-middle', 'R': 'left-index', 'T': 'left-index',
    'Y': 'right-index', 'U': 'right-index', 'I': 'right-middle', 'O': 'right-ring', 'P': 'right-pink',
    
    'A': 'left-pink', 'S': 'left-ring', 'D': 'left-middle', 'F': 'left-index', 'G': 'left-index',
    'H': 'right-index', 'J': 'right-index', 'K': 'right-middle', 'L': 'right-ring', ';': 'right-pink', '\'': 'right-pink',
    
    'Z': 'left-pink', 'X': 'left-ring', 'C': 'left-middle', 'V': 'left-index', 'B': 'left-index',
    'N': 'right-index', 'M': 'right-index', ',': 'right-middle', '.': 'right-ring', '/': 'right-pink',
    
    ' ': 'thumbs'
};

const KEYBOARD_ROWS = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', { text: 'Back', class: 'key-backspace' }],
    [{ text: 'Tab', class: 'key-tab' }, 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'],
    [{ text: 'Caps', class: 'key-capslock' }, 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', { text: 'Enter', class: 'key-enter' }],
    [{ text: 'Shift', class: 'key-leftshift' }, 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', { text: 'Shift', class: 'key-rightshift' }],
    [{ text: 'Space', val: ' ', class: 'key-space' }]
];

// Emojis for kids spelling
const WORD_EMOJIS = {
    "apple": "🍎", "banana": "🍌", "cat": "🐱", "dog": "🐶", "egg": "🥚", "fish": "🐟", "girl": "👧", "hat": "👒", "ice": "🧊", "juice": "🧃",
    "key": "🔑", "lion": "🦁", "milk": "🥛", "nest": "🪺", "orange": "🍊", "pig": "🐷", "queen": "👸", "rain": "🌧️", "sun": "☀️", "tree": "🌳",
    "umbrella": "🌂", "vase": "🏺", "water": "💧", "box": "📦", "yellow": "💛", "zebra": "🦓", "book": "📖", "cake": "🍰", "duck": "🦆", "frog": "🐸",
    "grape": "🍇", "hand": "✋", "kite": "🪁", "leaf": "🍃", "monkey": "🐒", "pear": "🍐", "ring": "💍", "star": "⭐", "toy": "🧸", "wind": "💨",
    "baseball": "⚾", "candy": "🍬", "doctor": "🧑‍⚕️", "happy": "😊", "lovely": "🥰", "rainbow": "🌈", "teacher": "🧑‍🏫", "watermelon": "🍉"
};

class GameEngine {
    constructor() {
        this.synth = new SoundSynthesizer();
        this.voice = new VoiceSpeechEngine();

        this.activeMode = 'mole';
        this.activeGrade = 'low';
        this.activeLevel = '1';
        this.currentWordPool = [];

        this.views = {
            menu: document.getElementById('view-menu'),
            mole: document.getElementById('view-mole'),
            balloon: document.getElementById('view-balloon'),
            dino: document.getElementById('view-dino')
        };

        this.initDOM();
    }

    initDOM() {
        // Toggle Audio
        const btnSound = document.getElementById('btn-sound-toggle');
        btnSound.addEventListener('click', () => {
            const state = this.synth.toggle();
            btnSound.textContent = state ? '🔊 音效: 開' : '🔇 音效: 關';
            btnSound.classList.toggle('red', !state);
            btnSound.classList.toggle('green', state);
        });

        // Toggle Voice
        const btnVoice = document.getElementById('btn-voice-toggle');
        btnVoice.addEventListener('click', () => {
            const state = this.voice.toggle();
            btnVoice.textContent = state ? '🗣️ 語音: 開' : '🔇 語音: 關';
            btnVoice.classList.toggle('red', !state);
            btnVoice.classList.toggle('purple', state);
        });

        // Mode Cards selector
        const modes = ['mole', 'balloon', 'dino'];
        modes.forEach(mode => {
            const card = document.getElementById(`mode-${mode}`);
            card.addEventListener('click', () => {
                modes.forEach(m => document.getElementById(`mode-${m}`).classList.remove('active'));
                card.classList.add('active');
                this.activeMode = mode;
            });
        });
        document.getElementById(`mode-mole`).classList.add('active');

        // Grade selectors
        const grades = ['low', 'mid'];
        grades.forEach(grade => {
            const btn = document.querySelector(`[data-grade="${grade}"]`);
            btn.addEventListener('click', () => {
                grades.forEach(g => document.querySelector(`[data-grade="${g}"]`).classList.remove('active'));
                btn.classList.add('active');
                this.activeGrade = grade;
            });
        });

        // Level selectors
        const levels = ['1', '2', '3', '4'];
        levels.forEach(level => {
            const btn = document.querySelector(`[data-level="${level}"]`);
            btn.addEventListener('click', () => {
                levels.forEach(l => document.querySelector(`[data-level="${l}"]`).classList.remove('active'));
                btn.classList.add('active');
                this.activeLevel = level;
            });
        });

        // Start Adventure
        document.getElementById('btn-start-game').addEventListener('click', () => {
            this.synth.playSuccess();
            this.startSelectedGame();
        });

        // Leaderboard modal toggle
        const lbModal = document.getElementById('modal-leaderboard');
        document.getElementById('btn-leaderboard').addEventListener('click', () => {
            lbModal.classList.remove('hidden');
            this.renderLeaderboard(this.activeMode);
        });
        document.getElementById('btn-close-leaderboard').addEventListener('click', () => {
            lbModal.classList.add('hidden');
        });

        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.renderLeaderboard(btn.dataset.tab);
            });
        });
    }

    buildWordPool() {
        const rawDB = this.activeGrade === 'low' ? LOW_GRADE_WORDS : MID_GRADE_WORDS;
        
        let filtered = rawDB.filter(w => {
            const wordLen = w.english.replace(/[^a-zA-Z]/g, '').length;
            
            if (this.activeLevel === '1' && wordLen > 4) return false;
            if (this.activeLevel === '2' && (wordLen < 5 || wordLen > 6)) return false;
            if (this.activeLevel === '3' && wordLen < 7) return false;
            return true;
        });

        if (filtered.length === 0) {
            filtered = rawDB.slice(0, 50);
        }

        // Shuffle
        const shuffle = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[array[j]]] = [array[array[j]], array[i]];
            }
            return array;
        };

        this.currentWordPool = shuffle([...filtered]);
        console.log(`Word pool built: ${this.currentWordPool.length}`);
    }

    switchView(viewName) {
        Object.keys(this.views).forEach(key => {
            this.views[key].classList.remove('active');
        });
        this.views[viewName].classList.add('active');
    }

    startSelectedGame() {
        this.buildWordPool();
        this.switchView(this.activeMode);

        if (this.activeMode === 'mole') {
            this.startWhackAMole();
        } else if (this.activeMode === 'balloon') {
            this.startBalloonPopper();
        } else if (this.activeMode === 'dino') {
            this.startHungryDino();
        }
    }

    // 👐 建構雙手發光指引鍵盤
    buildVirtualKeyboard(containerId) {
        const kb = document.getElementById(containerId);
        kb.innerHTML = '';
        
        KEYBOARD_ROWS.forEach(row => {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'keyboard-row';
            
            row.forEach(key => {
                const keyDiv = document.createElement('div');
                let displayVal = typeof key === 'string' ? key : key.text;
                let actualVal = typeof key === 'string' ? key : (key.val !== undefined ? key.val : key.text);
                
                keyDiv.className = 'key key-letter';
                keyDiv.textContent = displayVal;
                keyDiv.setAttribute('data-key', actualVal.toUpperCase());
                
                if (typeof key === 'object') {
                    keyDiv.className = `key ${key.class}`;
                }
                
                rowDiv.appendChild(keyDiv);
            });
            rowDiv.addEventListener('mousedown', (e) => e.preventDefault()); // Stop stealing input focus
            kb.appendChild(rowDiv);
        });
    }

    highlightKeyboardKey(containerId, char) {
        const keys = document.querySelectorAll(`#${containerId} .key`);
        keys.forEach(k => {
            k.className = k.className.replace(/\bhighlight-\S+/g, '');
            k.classList.remove('pressed');
        });

        if (!char) return;
        const upperChar = char.toUpperCase();
        const fingerClass = KEYBOARD_MAP[upperChar];
        if (fingerClass) {
            const keyEl = document.querySelector(`#${containerId} .key[data-key="${upperChar}"]`);
            if (keyEl) {
                keyEl.classList.add(`highlight-${fingerClass}`);
            }
        }
    }

    triggerKeyPressVisual(containerId, char) {
        const upperChar = char.toUpperCase();
        const keyEl = document.querySelector(`#${containerId} .key[data-key="${upperChar}"]`);
        if (keyEl) {
            keyEl.classList.add('pressed');
            setTimeout(() => keyEl.classList.remove('pressed'), 120);
        }
    }

    saveRecord(mode, grade, context, score) {
        const records = JSON.parse(localStorage.getItem('park_records') || '[]');
        const dateStr = new Date().toLocaleString('zh-TW', { hour12: false }).substring(5, 16);
        records.push({
            mode,
            grade: grade === 'low' ? '低年級' : '中年級',
            context,
            value: score,
            date: dateStr
        });
        localStorage.setItem('park_records', JSON.stringify(records));
    }

    renderLeaderboard(mode) {
        const list = document.getElementById('leaderboard-list');
        list.innerHTML = '';
        
        const records = JSON.parse(localStorage.getItem('park_records') || '[]');
        const filtered = records.filter(r => r.mode === mode);
        filtered.sort((a, b) => b.value - a.value);

        const top10 = filtered.slice(0, 10);
        if (top10.length === 0) {
            list.innerHTML = '<tr><td colspan="5" style="text-align: center; padding: 20px;">還沒有紀錄喔！快來當第一名吧！🌟</td></tr>';
            return;
        }

        top10.forEach((r, idx) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>第 ${idx + 1} 名</td>
                <td>${r.grade}</td>
                <td>${r.context}</td>
                <td>${r.value} 分 ⭐</td>
                <td>${r.date}</td>
            `;
            list.appendChild(tr);
        });
    }

    // ==========================================
    // 🔨 模式一：鍵盤敲土撥鼠 (WHACK-A-MOLE)
    // ==========================================
    startWhackAMole() {
        const scoreVal = document.getElementById('mole-score');
        const comboVal = document.getElementById('mole-combo');
        const progressBar = document.getElementById('mole-progress-bar');
        const board = document.getElementById('mole-board');
        const victoryPanel = document.getElementById('mole-completed');

        victoryPanel.classList.add('hidden');
        this.buildVirtualKeyboard('mole-keyboard');

        let score = 0;
        let combo = 0;
        let activeIdx = 0; // Current spelling word index
        let charIndex = 0; // Current letter in spelling word
        
        scoreVal.textContent = "0";
        comboVal.textContent = "0";
        progressBar.style.width = "0%";

        // Build 8 grass holes
        board.innerHTML = '';
        const moles = [];
        for (let i = 0; i < 8; i++) {
            const hole = document.createElement('div');
            hole.className = 'mole-hole';
            
            const moleDiv = document.createElement('div');
            moleDiv.className = 'mole';
            
            const letterSpan = document.createElement('span');
            letterSpan.className = 'mole-letter';
            letterSpan.textContent = '';
            
            moleDiv.appendChild(letterSpan);
            hole.appendChild(moleDiv);
            board.appendChild(hole);

            moles.push({
                div: moleDiv,
                span: letterSpan,
                letter: '',
                isUp: false
            });
        }

        let currentWordObj = null;
        let targetLetter = '';
        let timer = null;

        const updateWordTarget = () => {
            if (activeIdx >= this.currentWordPool.length) {
                // Done!
                this.synth.playSuccess();
                document.getElementById('mole-final-score').textContent = score;
                victoryPanel.classList.remove('hidden');
                
                const lvlName = this.activeLevel === '1' ? '簡單' : (this.activeLevel === '2' ? '快樂' : (this.activeLevel === '3' ? '挑戰' : '無盡'));
                this.saveRecord('mole', this.activeGrade, `${lvlName}打地鼠`, score);
                clearInterval(timer);
                return;
            }

            currentWordObj = this.currentWordPool[activeIdx];
            const cleanWord = currentWordObj.english.replace(/[^a-zA-Z]/g, '');
            targetLetter = cleanWord[charIndex].toLowerCase();
            
            // Pop up mole in a random hole!
            moles.forEach(m => {
                m.div.classList.remove('up', 'whacked');
                m.isUp = false;
            });

            const randomHole = moles[Math.floor(Math.random() * moles.length)];
            randomHole.letter = targetLetter;
            randomHole.span.textContent = targetLetter.toUpperCase();
            randomHole.isUp = true;
            
            // Trigger popup
            setTimeout(() => {
                randomHole.div.classList.add('up');
            }, 50);

            // Highlight in virtual keyboard
            this.highlightKeyboardKey('mole-keyboard', targetLetter);

            // Audio prompts the letter
            this.voice.speak(targetLetter, 1.1, 1.3);
        };

        const handleMoleKeydown = (e) => {
            if (victoryPanel.classList.contains('hidden') === false) return;
            if (e.key.length !== 1) return;

            const typed = e.key.toLowerCase();
            this.triggerKeyPressVisual('mole-keyboard', typed);

            if (typed === targetLetter) {
                // Squeaky hammer whack!
                this.synth.playSqueak();
                score += 10 + combo;
                combo++;
                scoreVal.textContent = score;
                comboVal.textContent = combo;

                // Whack animation
                const activeMole = moles.find(m => m.isUp);
                if (activeMole) {
                    activeMole.div.classList.add('whacked');
                }

                // Increment letter spelled
                const cleanWord = currentWordObj.english.replace(/[^a-zA-Z]/g, '');
                charIndex++;

                // Progress Bar updates
                const pct = Math.round((activeIdx / this.currentWordPool.length) * 100);
                progressBar.style.width = `${pct}%`;

                if (charIndex >= cleanWord.length) {
                    // Spelling completed! Play sound & pronounce word
                    this.synth.playSuccess();
                    this.voice.speak(currentWordObj.english);
                    
                    // Show a quick bubble banner showing the word
                    const banner = document.createElement('div');
                    banner.className = 'dino-effect';
                    banner.innerHTML = `${WORD_EMOJIS[currentWordObj.english.toLowerCase()] || '⭐'} ${currentWordObj.english.toUpperCase()} (${currentWordObj.chinese})!`;
                    banner.style.left = '45%';
                    banner.style.top = '40%';
                    board.appendChild(banner);
                    setTimeout(() => banner.remove(), 1200);

                    activeIdx++;
                    charIndex = 0;
                }

                setTimeout(updateWordTarget, 600);
            } else {
                // Wrong bounce
                this.synth.playSpringWrong();
                combo = 0;
                comboVal.textContent = combo;
            }
        };

        window.addEventListener('keydown', handleMoleKeydown);
        updateWordTarget();

        // Exit cleanup handlers
        const exitHandler = () => {
            window.removeEventListener('keydown', handleMoleKeydown);
            this.switchView('menu');
        };

        document.getElementById('btn-mole-exit').onclick = exitHandler;
        document.getElementById('btn-mole-menu').onclick = exitHandler;
        
        document.getElementById('btn-mole-retry').onclick = () => {
            window.removeEventListener('keydown', handleMoleKeydown);
            this.startWhackAMole();
        };
    }

    // ==========================================
    // 🎈 模式二：氣球單字爆爆樂 (BALLOON POPPER)
    // ==========================================
    startBalloonPopper() {
        const scoreVal = document.getElementById('balloon-score');
        const wordsVal = document.getElementById('balloon-words-count');
        const wordEmoji = document.getElementById('balloon-word-emoji');
        const wordTarget = document.getElementById('balloon-word-target');
        const wordChinese = document.getElementById('balloon-word-chinese');
        const victoryPanel = document.getElementById('balloon-completed');
        const canvas = document.getElementById('balloon-canvas');

        victoryPanel.classList.add('hidden');
        this.buildVirtualKeyboard('balloon-keyboard');

        // Resize Canvas
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = 420;

        const ctx = canvas.getContext('2d');

        let score = 0;
        let wordsCount = 0;
        let activeIdx = 0;
        let charIndex = 0;

        scoreVal.textContent = "0";
        wordsVal.textContent = "0";

        let currentWordObj = null;
        let targetLetter = '';
        let balloons = [];
        let particles = [];
        let loopActive = true;

        const updateWordCard = () => {
            if (activeIdx >= this.currentWordPool.length) {
                // Done!
                this.synth.playSuccess();
                document.getElementById('balloon-final-score').textContent = score;
                document.getElementById('balloon-final-words').textContent = wordsCount;
                victoryPanel.classList.remove('hidden');
                
                const lvlName = this.activeLevel === '1' ? '簡單' : (this.activeLevel === '2' ? '快樂' : (this.activeLevel === '3' ? '挑戰' : '無盡'));
                this.saveRecord('balloon', this.activeGrade, `${lvlName}氣球爆爆`, score);
                loopActive = false;
                return;
            }

            currentWordObj = this.currentWordPool[activeIdx];
            const cleanWord = currentWordObj.english.replace(/[^a-zA-Z]/g, '');
            targetLetter = cleanWord[charIndex].toLowerCase();

            // Render word card letters
            wordEmoji.textContent = WORD_EMOJIS[currentWordObj.english.toLowerCase()] || '🧸';
            wordChinese.textContent = `(${currentWordObj.chinese})`;
            
            let spellingHtml = '';
            for (let i = 0; i < cleanWord.length; i++) {
                if (i < charIndex) {
                    spellingHtml += `<span style="color:var(--candy-green)">${cleanWord[i].toUpperCase()}</span>`;
                } else if (i === charIndex) {
                    spellingHtml += `<span style="color:var(--candy-pink); text-decoration: underline; font-weight:900;">${cleanWord[i].toUpperCase()}</span>`;
                } else {
                    spellingHtml += `<span style="color:#b2c0cc">_</span>`;
                }
            }
            wordTarget.innerHTML = spellingHtml;

            // Voice out targeted letter
            this.voice.speak(targetLetter, 1.0, 1.25);

            // Highlight keyboard
            this.highlightKeyboardKey('balloon-keyboard', targetLetter);
        };

        const createConfetti = (x, y, color) => {
            this.synth.playPop();
            for (let i = 0; i < 22; i++) {
                particles.push({
                    x,
                    y,
                    vx: (Math.random() - 0.5) * 10,
                    vy: (Math.random() - 0.5) * 10 - 2,
                    size: 4 + Math.random() * 5,
                    color,
                    alpha: 1.0,
                    decay: 0.02 + Math.random() * 0.02
                });
            }
        };

        // Balloon Spawner Logic
        let spawnTimer = 0;
        const colors = ['#ff85a2', '#54ccff', '#4ade80', '#fcd34d', '#a78bfa', '#fb923c'];

        const loop = () => {
            if (!loopActive) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Spawn balloons
            spawnTimer++;
            if (spawnTimer >= 48) { // Frame spawn interval
                spawnTimer = 0;
                
                // 30% chance spawn the targeted letter, 70% random letter
                const isTarget = Math.random() < 0.35 || balloons.filter(b => b.letter === targetLetter).length === 0;
                const letter = isTarget ? targetLetter : String.fromCharCode(97 + Math.floor(Math.random() * 26));
                
                balloons.push({
                    letter: letter.toLowerCase(),
                    x: 40 + Math.random() * (canvas.width - 80),
                    y: canvas.height + 40,
                    speed: 1.0 + Math.random() * 1.5,
                    radius: 26 + Math.random() * 8,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    wiggleSeed: Math.random() * 100
                });
            }

            // Draw Balloons
            balloons.forEach((b, idx) => {
                b.y -= b.speed;
                // side-to-side float wiggle
                const wiggle = Math.sin((Date.now() / 200) + b.wiggleSeed) * 0.8;
                b.x += wiggle;

                // Draw String
                ctx.strokeStyle = '#8fa3b5';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(b.x, b.y + b.radius);
                ctx.quadraticCurveTo(b.x + Math.sin(b.y / 10) * 8, b.y + b.radius + 15, b.x, b.y + b.radius + 30);
                ctx.stroke();

                // Draw Balloon Body
                ctx.fillStyle = b.color;
                ctx.beginPath();
                ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
                ctx.fill();

                // Triangle tie at bottom of balloon
                ctx.beginPath();
                ctx.moveTo(b.x, b.y + b.radius - 2);
                ctx.lineTo(b.x - 6, b.y + b.radius + 6);
                ctx.lineTo(b.x + 6, b.y + b.radius + 6);
                ctx.closePath();
                ctx.fill();

                // Draw Highlight shine
                ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
                ctx.beginPath();
                ctx.arc(b.x - b.radius/3, b.y - b.radius/3, b.radius/4, 0, Math.PI * 2);
                ctx.fill();

                // Draw Letter text
                ctx.fillStyle = '#ffffff';
                ctx.font = 'bold 24px "Fredoka", sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.shadowColor = 'rgba(0,0,0,0.15)';
                ctx.shadowBlur = 4;
                ctx.fillText(b.letter.toUpperCase(), b.x, b.y);
                ctx.shadowBlur = 0; // Reset shadow

                // Remove out of bound balloons
                if (b.y < -50) {
                    balloons.splice(idx, 1);
                }
            });

            // Draw Confetti Particles
            particles.forEach((p, idx) => {
                p.x += p.vx;
                p.y += p.vy;
                p.alpha -= p.decay;
                if (p.alpha <= 0) {
                    particles.splice(idx, 1);
                } else {
                    ctx.fillStyle = p.color;
                    ctx.globalAlpha = p.alpha;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.globalAlpha = 1.0;
                }
            });

            requestAnimationFrame(loop);
        };

        const handleBalloonKeydown = (e) => {
            if (victoryPanel.classList.contains('hidden') === false) return;
            if (e.key.length !== 1) return;

            const typed = e.key.toLowerCase();
            this.triggerKeyPressVisual('balloon-keyboard', typed);

            // Pop ALL balloons matching typed key
            let hit = false;
            balloons.forEach((b, idx) => {
                if (b.letter === typed) {
                    createConfetti(b.x, b.y, b.color);
                    balloons.splice(idx, 1);
                    hit = true;
                }
            });

            if (hit) {
                if (typed === targetLetter) {
                    // Correct spelling popping!
                    score += 15;
                    scoreVal.textContent = score;

                    charIndex++;
                    const cleanWord = currentWordObj.english.replace(/[^a-zA-Z]/g, '');

                    if (charIndex >= cleanWord.length) {
                        // Word spelled fully!
                        this.synth.playSuccess();
                        this.voice.speak(currentWordObj.english);
                        wordsCount++;
                        wordsVal.textContent = wordsCount;

                        activeIdx++;
                        charIndex = 0;
                    }
                    updateWordCard();
                } else {
                    // Just hit other letters - pop them, but don't progress spelling
                    score += 5;
                    scoreVal.textContent = score;
                }
            } else {
                // Key pressed but no matching balloon floating on screen
                this.synth.playSpringWrong();
            }
        };

        // Voice Read Out Aloud
        document.getElementById('btn-balloon-pronounce').onclick = () => {
            if (currentWordObj) {
                this.voice.speak(currentWordObj.english, 0.85);
            }
        };

        window.addEventListener('keydown', handleBalloonKeydown);
        updateWordCard();
        requestAnimationFrame(loop);

        // Exit cleanups
        const exitHandler = () => {
            loopActive = false;
            window.removeEventListener('keydown', handleBalloonKeydown);
            this.switchView('menu');
        };

        document.getElementById('btn-balloon-exit').onclick = exitHandler;
        document.getElementById('btn-balloon-menu').onclick = exitHandler;
        
        document.getElementById('btn-balloon-retry').onclick = () => {
            loopActive = false;
            window.removeEventListener('keydown', handleBalloonKeydown);
            this.startBalloonPopper();
        };
    }

    // ==========================================
    // 🦖 模式三：字母大胃王 (HUNGRY DINO)
    // ==========================================
    startHungryDino() {
        const scoreVal = document.getElementById('dino-score');
        const fullnessBar = document.getElementById('dino-fullness');
        const statusText = document.getElementById('dino-status');
        const victoryPanel = document.getElementById('dino-completed');
        const canvas = document.getElementById('dino-canvas');
        const avatarContainer = document.getElementById('dino-avatar-container');
        const chewEffect = document.getElementById('dino-chew-effect');

        victoryPanel.classList.add('hidden');
        this.buildVirtualKeyboard('dino-keyboard');

        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = 420;

        const ctx = canvas.getContext('2d');

        let score = 0;
        let fullness = 100; // starts full, slowly drains, child must feed dino to keep it happy!
        let activeIdx = 0;

        scoreVal.textContent = "0";
        fullnessBar.style.width = "100%";
        statusText.textContent = "肚子好餓呀！好想吃字母食物喔 🍪🍎";

        let foods = [];
        let loopActive = true;
        let spawnTimer = 0;

        // Food options (Emojis)
        const foodEmojis = ['🍎', '🍪', '🍩', '🍦', '🍰', '🧁', '🍉', '🍌', '🍒'];

        const loop = () => {
            if (!loopActive) return;

            // Fullness drains slowly
            fullness -= 0.05;
            if (fullness <= 0) {
                fullness = 0;
                // Victory completion (meaning the game is complete, but no death - just end round nicely!)
                this.synth.playSuccess();
                document.getElementById('dino-final-score').textContent = score;
                victoryPanel.classList.remove('hidden');
                
                const lvlName = this.activeLevel === '1' ? '簡單' : (this.activeLevel === '2' ? '快樂' : (this.activeLevel === '3' ? '挑戰' : '無盡'));
                this.saveRecord('dino', this.activeGrade, `${lvlName}字母大胃王`, score);
                loopActive = false;
                return;
            }

            fullnessBar.style.width = `${fullness}%`;

            // Dino status commentary
            if (fullness > 75) {
                statusText.textContent = "🦖 小恐龍：「好飽好幸福喔！謝謝你！❤️」";
            } else if (fullness > 40) {
                statusText.textContent = "🦖 小恐龍：「肚子又有一點餓了，還想吃～😋」";
            } else {
                statusText.textContent = "🦖 小恐龍：「哇啊！肚子空空的快沒力氣了，快餵我！😫」";
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Spawn Food falling down
            spawnTimer++;
            if (spawnTimer >= 75) {
                spawnTimer = 0;
                
                if (this.currentWordPool.length > 0) {
                    // Pull random letters from database
                    const randWordObj = this.currentWordPool[Math.floor(Math.random() * this.currentWordPool.length)];
                    const cleanWord = randWordObj.english.replace(/[^a-zA-Z]/g, '');
                    const char = cleanWord[Math.floor(Math.random() * cleanWord.length)].toLowerCase();

                    foods.push({
                        letter: char,
                        emoji: foodEmojis[Math.floor(Math.random() * foodEmojis.length)],
                        x: 50 + Math.random() * (canvas.width - 100),
                        y: -30,
                        speed: 0.8 + Math.random() * 0.7,
                        size: 30
                    });
                }
            }

            // Draw foods
            foods.forEach((f, idx) => {
                f.y += f.speed;

                // Draw food circle backdrop
                ctx.fillStyle = '#ffffff';
                ctx.strokeStyle = '#4a3728';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();

                // Draw emoji
                ctx.font = '26px sans-serif';
                ctx.fillText(f.emoji, f.x - 13, f.y - 4);

                // Draw Letter label inside food
                ctx.fillStyle = '#ff7a00';
                ctx.font = 'bold 20px "Fredoka", sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(f.letter.toUpperCase(), f.x, f.y + 18);

                // Hits bottom (uneaten food)
                if (f.y >= canvas.height - 40) {
                    foods.splice(idx, 1);
                }
            });

            // Dynamic highlight the lowest food letter to help kids standard blind typing
            if (foods.length > 0) {
                // Find lowest food on screen
                let lowest = foods[0];
                foods.forEach(f => {
                    if (f.y > lowest.y) lowest = f;
                });
                this.highlightKeyboardKey('dino-keyboard', lowest.letter);
            } else {
                this.highlightKeyboardKey('dino-keyboard', '');
            }

            requestAnimationFrame(loop);
        };

        const handleDinoKeydown = (e) => {
            if (victoryPanel.classList.contains('hidden') === false) return;
            if (e.key.length !== 1) return;

            const typed = e.key.toLowerCase();
            this.triggerKeyPressVisual('dino-keyboard', typed);

            // Feed Dino check - eat matching letters starting from lowest food!
            // Sort foods by depth (lowest y coordinates first)
            const sortedFoods = [...foods].sort((a, b) => b.y - a.y);
            const targetFood = sortedFoods.find(f => f.letter === typed);

            if (targetFood) {
                // Crunch chew Nom nom!
                this.synth.playChew();
                score += 20;
                scoreVal.textContent = score;

                fullness += 18;
                if (fullness > 100) fullness = 100;

                // Chew animation
                avatarContainer.className = 'dino-avatar-container chew';
                chewEffect.classList.remove('hidden');
                
                setTimeout(() => {
                    avatarContainer.className = 'dino-avatar-container idle';
                    chewEffect.classList.add('hidden');
                }, 700);

                // Remove eaten food
                foods = foods.filter(f => f !== targetFood);
            } else {
                this.synth.playSpringWrong();
            }
        };

        window.addEventListener('keydown', handleDinoKeydown);
        requestAnimationFrame(loop);

        // Exit cleanups
        const exitHandler = () => {
            loopActive = false;
            window.removeEventListener('keydown', handleDinoKeydown);
            this.switchView('menu');
        };

        document.getElementById('btn-dino-exit').onclick = exitHandler;
        document.getElementById('btn-dino-menu').onclick = exitHandler;
        
        document.getElementById('btn-dino-retry').onclick = () => {
            loopActive = false;
            window.removeEventListener('keydown', handleDinoKeydown);
            this.startHungryDino();
        };
    }
}

// Window load init engine
window.addEventListener('DOMContentLoaded', () => {
    window.gameEngine = new GameEngine();
});
