function saveAndDisplaySysInfo() {
    const sysData = {
        platform: navigator.platform,
        language: navigator.language,
        userAgent: navigator.userAgent
    };

    localStorage.setItem('sys_info', JSON.stringify(sysData));

    const saved = JSON.parse(localStorage.getItem('sys_info'));

    const sysInfoDiv = document.getElementById('sys-info');
    sysInfoDiv.innerHTML = `
        <strong>Інформація про систему (з LocalStorage):</strong><br>
        Платформа: ${saved.platform}<br>
        Мова: ${saved.language}<br>
        <span style="color: var(--muted-text); font-size: 0.85em;">
            User-Agent: ${saved.userAgent}
        </span>
    `;
}

saveAndDisplaySysInfo();


// ============================================================
// ЗАВДАННЯ 2: Fetch API — завантажуємо коментарі (варіант 11)
// ============================================================

async function loadComments() {
    const container = document.getElementById('comments-container');

    try {
        // Варіант 11 — використовуємо posts/11/comments
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/11/comments');
        const comments = await response.json();

        container.innerHTML = '';

        comments.forEach(comment => {
            const div = document.createElement('div');
            div.className = 'comment';
            div.innerHTML = `
                <h4>${comment.name}</h4>
                <small>${comment.email}</small>
                <p>${comment.body}</p>
            `;
            container.appendChild(div);
        });

    } catch (error) {
        container.innerHTML = '<p>Помилка завантаження коментарів.</p>';
        console.error('Помилка Fetch:', error);
    }
}

loadComments();


const modal = document.getElementById('contact-modal');
const closeBtn = document.getElementById('close-modal');

setTimeout(() => {
    modal.classList.add('active');
}, 60000);

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});



const themeBtn = document.getElementById('theme-btn');
const html = document.documentElement;

function setThemeByTime() {
    const hour = new Date().getHours();
    if (hour >= 7 && hour < 21) {
        setTheme('day');
    } else {
        setTheme('night');
    }
}

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (theme === 'day') {
        themeBtn.textContent = '🌙 Темна тема';
    } else {
        themeBtn.textContent = '☀️ Денна тема';
    }
}

setThemeByTime();

themeBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    setTheme(current === 'day' ? 'night' : 'day');
}); 
