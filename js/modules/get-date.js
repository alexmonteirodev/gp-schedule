export default function getDate() {
    document.addEventListener("DOMContentLoaded", function() {
        const dataDisplay = document.getElementById("data"); // Exibe mês e ano no topo
        const arrows = document.querySelectorAll(".arrows"); // As setas de navegação
        const tabela = document.getElementById("tabela").querySelector("tbody");

        let currentDate = new Date(); // Data atual
        let currentMonth = currentDate.getMonth(); // Mês atual (0-11)
        let currentYear = currentDate.getFullYear(); // Ano atual

        // Função para atualizar o calendário
        function updateCalendar(month, year) {
            const today = new Date(); // Obtém a data de hoje
            const isToday = (day) => today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
        
            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            dataDisplay.textContent = `${monthNames[month]} ${year}`;
        
            tabela.innerHTML = ""; // Limpa o calendário
        
            const firstDay = new Date(year, month, 1).getDay();
            const lastDate = new Date(year, month + 1, 0).getDate();
        
            let row = document.createElement("tr");
        
            // Ajusta para que o calendário comece na segunda-feira
            const startDay = firstDay === 0 ? 6 : firstDay - 1;
        
            for (let i = 0; i < startDay; i++) {
                row.appendChild(document.createElement("td")); // Dias vazios
            }
        
            for (let day = 1; day <= lastDate; day++) {
                const cell = document.createElement("td");
                const dayDiv = document.createElement("div");
                dayDiv.classList.add("day");
                dayDiv.textContent = day;
        
                // Verifica se é o dia de hoje e adiciona a classe "today" apenas no número do dia
                if (isToday(day)) {
                    dayDiv.classList.add("today"); // Aplica a classe "today" no número do dia
                }
        
                const morning = document.createElement("div");
                morning.classList.add("manana");
                morning.textContent = "Manana";
                const afternoon = document.createElement("div");
                afternoon.classList.add("tarde");
                afternoon.textContent = "Tarde";
                const night = document.createElement("div");
                night.classList.add("noche");
                night.textContent = "Noche";
        
                cell.appendChild(dayDiv); // Adiciona o número do dia
                cell.appendChild(morning);
                cell.appendChild(afternoon);
                cell.appendChild(night);
        
                row.appendChild(cell);
        
                if (row.children.length === 7) {
                    tabela.appendChild(row);
                    row = document.createElement("tr");
                }
            }
        
            if (row.children.length > 0) {
                tabela.appendChild(row);
            }
        }

        // Função para navegar entre os meses
        function navigateMonth(direction) {
            if (direction === 'next') {
                currentMonth++;
                if (currentMonth > 11) {
                    currentMonth = 0;
                    currentYear++;
                }
            } else if (direction === 'prev') {
                currentMonth--;
                if (currentMonth < 0) {
                    currentMonth = 11;
                    currentYear--;
                }
            }
            updateCalendar(currentMonth, currentYear);
        }

        // Event listeners para as setas de navegação
        arrows[0].addEventListener("click", function() {
            navigateMonth('prev');
        });
        arrows[1].addEventListener("click", function() {
            navigateMonth('next');
        });

        // Inicializa o calendário com o mês e ano atuais
        updateCalendar(currentMonth, currentYear);
    });
}

//   // get month
//   const monthDate = new Date()
//   const month = monthDate.getMonth() +1

//   const anualMonths = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

//   const actualMonth = anualMonths[month-1]

//   // get year
//   const yearDate = new Date()
//   const year = yearDate.getFullYear()

//   // write
//   const data = document.querySelector('#data')
//   data.innerHTML = `${actualMonth} ${year}`
  

    