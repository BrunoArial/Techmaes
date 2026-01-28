// Data Store for Courses
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

        // --- Logic: Course Filtering and Rendering ---
        const coursesGrid = document.getElementById('courses-grid');
        const filterBtns = document.querySelectorAll('.filter-btn');

        function renderCourses(filter) {
            coursesGrid.innerHTML = '';
            
            const filtered = filter === 'all' 
                ? coursesData 
                : coursesData.filter(c => c.category === filter);

            filtered.forEach(course => {
                const card = document.createElement('div');
                card.className = 'course-card flex flex-col rounded-lg shadow-lg overflow-hidden bg-white border border-slate-100';
                
                // Color coding tags
                let tagColor = 'bg-slate-100 text-slate-800';
                if(course.category === 'dev') tagColor = 'bg-blue-100 text-blue-800';
                if(course.category === 'design') tagColor = 'bg-purple-100 text-purple-800';
                if(course.category === 'data') tagColor = 'bg-green-100 text-green-800';

                card.innerHTML = `
                    <div class="flex-1 p-6 flex flex-col justify-between">
                        <div class="flex-1">
                            <div class="flex justify-between items-center mb-2">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tagColor}">
                                    ${course.category === 'dev' ? 'Desenvolvimento' : course.category === 'design' ? 'Design/Produto' : 'Dados'}
                                </span>
                                <span class="text-xs text-slate-400">⏱ ${course.duration}</span>
                            </div>
                            <h3 class="mt-2 text-xl font-semibold text-slate-900">${course.title}</h3>
                            <p class="mt-3 text-base text-slate-500">${course.desc}</p>
                        </div>
                        <div class="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                            <div class="text-sm text-slate-400">Nível: ${course.level}</div>
                            <button class="text-teal-600 font-medium text-sm hover:text-teal-500">Detalhes &rarr;</button>
                        </div>
                    </div>
                `;
                coursesGrid.appendChild(card);
            });
        }

        // Filter Click Events
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Update active state style
                filterBtns.forEach(b => {
                    b.classList.remove('bg-teal-600', 'text-white');
                    b.classList.add('bg-slate-100', 'text-slate-600');
                });
                e.target.classList.remove('bg-slate-100', 'text-slate-600');
                e.target.classList.add('bg-teal-600', 'text-white');

                // Render
                renderCourses(e.target.dataset.filter);
            });
        });

        // Initial Render
        renderCourses('all');


        // --- Logic: Mobile Menu ---
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });


        // --- Logic: Charts (Chart.js) ---

        // Chart 1: Gender Gap / Opportunity
        const ctxGap = document.getElementById('genderGapChart').getContext('2d');
        new Chart(ctxGap, {
            type: 'bar',
            data: {
                labels: ['Liderança Geral', 'Liderança Tech (Atual)', 'Meta TechMães'],
                datasets: [{
                    label: '% Participação Feminina',
                    data: [38, 15, 30], // Simulated data
                    backgroundColor: [
                        'rgba(148, 163, 184, 0.5)', // Slate
                        'rgba(244, 63, 94, 0.5)',   // Red (Alert)
                        'rgba(13, 148, 136, 0.8)'   // Teal (Goal)
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

        // Chart 2: Community Growth (Line Chart)
        const ctxCommunity = document.getElementById('communityChart').getContext('2d');
        new Chart(ctxCommunity, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                datasets: [{
                    label: 'Novas Alunas',
                    data: [120, 150, 240, 300, 450, 680],
                    borderColor: '#2dd4bf', // Teal 400
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
                        grid: { color: '#334155' } // slate-700
                    },
                    y: {
                        ticks: { color: '#94a3b8' },
                        grid: { color: '#334155' }
                    }
                }
            }
        });
