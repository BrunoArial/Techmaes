const coursesData = [
    {
        id: 1,
        title: "Introdução ao Python",
        category: "dev",
        duration: "4 Semanas",
        level: "Iniciante",
        desc: "Aprenda a lógica de programação com a linguagem mais popular do mercado."
    },
    {
        id: 2,
        title: "UX Design Essencial",
        category: "design",
        duration: "6 Semanas",
        level: "Iniciante",
        desc: "Entenda como criar produtos digitais centrados no usuário."
    },
    {
        id: 3,
        title: "Análise de Dados com Excel e SQL",
        category: "data",
        duration: "5 Semanas",
        level: "Intermediário",
        desc: "Transforme dados brutos em insights valiosos para negócios."
    },
    {
        id: 4,
        title: "Frontend: HTML, CSS & Tailwind",
        category: "dev",
        duration: "8 Semanas",
        level: "Iniciante",
        desc: "Crie sites bonitos e responsivos do zero."
    },
    {
        id: 5,
        title: "Gestão de Produtos Digitais",
        category: "design",
        duration: "4 Semanas",
        level: "Avançado",
        desc: "Como liderar times e definir a estratégia de produtos de tecnologia."
    },
    {
        id: 6,
        title: "Power BI para Mães",
        category: "data",
        duration: "3 Semanas",
        level: "Iniciante",
        desc: "Crie dashboards visuais impactantes sem precisar programar."
    }
];

const coursesGrid = document.getElementById('courses-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderCourses(filter) {
    coursesGrid.innerHTML = '';
    
    const filtered = filter === 'all' 
        ? coursesData 
        : coursesData.filter(c => c.category === filter);

    filtered.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';

        // Define a classe da tag baseada na categoria
        let tagClass = 'tag-default';
        if(course.category === 'dev') tagClass = 'tag-dev';
        if(course.category === 'design') tagClass = 'tag-design';
        if(course.category === 'data') tagClass = 'tag-data';
        
        let categoryLabel = 'Geral';
        if(course.category === 'dev') categoryLabel = 'Desenvolvimento';
        if(course.category === 'design') categoryLabel = 'Design/Produto';
        if(course.category === 'data') categoryLabel = 'Dados';

        card.innerHTML = `
            <div class="card-body">
                <div class="card-top">
                    <div class="card-header">
                        <span class="course-tag ${tagClass}">
                            ${categoryLabel}
                        </span>
                        <span class="course-duration">⏱ ${course.duration}</span>
                    </div>
                    <h3 class="course-title">${course.title}</h3>
                    <p class="course-desc">${course.desc}</p>
                </div>
                <div class="card-footer">
                    <div class="course-level">Nível: ${course.level}</div>
                    <button class="btn-details">Detalhes &rarr;</button>
                </div>
            </div>
        `;
        coursesGrid.appendChild(card);
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove active de todos e adiciona no clicado
        filterBtns.forEach(b => {
            b.classList.remove('active');
        });
        e.target.classList.add('active');

        renderCourses(e.target.dataset.filter);
    });
});

renderCourses('all');

const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Gráficos (Mantidos intactos, apenas garantindo que as cores do Chart.js combinem com o novo CSS)
const ctxGap = document.getElementById('genderGapChart').getContext('2d');
new Chart(ctxGap, {
    type: 'bar',
    data: {
        labels: ['Liderança Geral', 'Liderança Tech (Atual)', 'Meta TechMães'],
        datasets: [{
            label: '% Participação Feminina',
            data: [38, 15, 30], 
            backgroundColor: [
                'rgba(148, 163, 184, 0.5)',
                'rgba(244, 63, 94, 0.5)',  
                'rgba(13, 148, 136, 0.8)'  
            ],
            borderColor: [
                'rgb(148, 163, 184)',
                'rgb(244, 63, 94)',
                'rgb(13, 148, 136)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Participação Feminina em Cargos de Liderança (%)'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 50
            }
        }
    }
});

const ctxCommunity = document.getElementById('communityChart').getContext('2d');
new Chart(ctxCommunity, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            label: 'Novas Alunas',
            data: [120, 150, 240, 300, 450, 680],
            borderColor: '#2dd4bf', 
            backgroundColor: 'rgba(45, 212, 191, 0.1)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#2dd4bf',
            pointRadius: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        scales: {
            x: {
                ticks: { color: '#94a3b8' },
                grid: { color: '#334155' }
            },
            y: {
                ticks: { color: '#94a3b8' },
                grid: { color: '#334155' }
            }
        }
    }
});