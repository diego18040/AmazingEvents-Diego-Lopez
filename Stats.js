import { loadNavbar, loadFooter, loadCarruselstats } from "./index.js";

document.addEventListener("DOMContentLoaded", async function() {
    loadNavbar();
    loadFooter();
    loadCarruselstats();

    try {
        const response = await fetch('https://aulamindhub.github.io/amazing-api/events.json');
        const data = await response.json();
        console.log("Datos cargados:", data);

        // Filtrar eventos pasados y futuros
        const currentDate = new Date(data.currentDate);
        const pastEvents = data.events.filter(event => new Date(event.date) < currentDate);
        const upcomingEvents = data.events.filter(event => new Date(event.date) >= currentDate);

        // Calcular estadísticas
        const highestAttendanceEvent = getEventWithHighestAttendance(pastEvents);
        const lowestAttendanceEvent = getEventWithLowestAttendance(pastEvents);
        const largestCapacityEvent = getEventWithLargestCapacity(data.events);

        const upcomingStats = getCategoryStatistics(upcomingEvents);
        const pastStats = getCategoryStatistics(pastEvents);

        // Mostrar estadísticas en la tabla
        showEventStatistics(highestAttendanceEvent, lowestAttendanceEvent, largestCapacityEvent);
        showCategoryStatistics("upcoming-stats", upcomingStats);
        showCategoryStatistics("past-stats", pastStats);
    } catch (error) {
        console.error("Error loading event details:", error);
        showError("Hubo un error al cargar los detalles del evento.");
    }
});

function getEventWithHighestAttendance(events) {
    return events.reduce((max, event) => {
        const attendancePercentage = (event.assistance / event.capacity) * 100;
        return attendancePercentage > max.attendancePercentage ? { event, attendancePercentage } : max;
    }, { event: null, attendancePercentage: 0 }).event;
}

function getEventWithLowestAttendance(events) {
    return events.reduce((min, event) => {
        const attendancePercentage = (event.assistance / event.capacity) * 100;
        return attendancePercentage < min.attendancePercentage ? { event, attendancePercentage } : min;
    }, { event: null, attendancePercentage: Infinity }).event;
}

function getEventWithLargestCapacity(events) {
    return events.reduce((max, event) => event.capacity > max.capacity ? event : max, { capacity: 0 });
}

function getCategoryStatistics(events) {
    const stats = {};
    events.forEach(event => {
        if (!stats[event.category]) {
            stats[event.category] = { revenue: 0, totalCapacity: 0, totalAssistance: 0, eventCount: 0 };
        }
        stats[event.category].revenue += event.price * (event.assistance || event.estimate);
        stats[event.category].totalCapacity += event.capacity;
        stats[event.category].totalAssistance += event.assistance || event.estimate;
        stats[event.category].eventCount++;
    });
    for (const category in stats) {
        stats[category].attendancePercentage = (stats[category].totalAssistance / stats[category].totalCapacity) * 100;
    }
    return stats;
}

function showEventStatistics(highestAttendanceEvent, lowestAttendanceEvent, largestCapacityEvent) {
    document.querySelector("#event-highest-attendance").innerText = highestAttendanceEvent ? highestAttendanceEvent.name : "N/A";
    document.querySelector("#event-lowest-attendance").innerText = lowestAttendanceEvent ? lowestAttendanceEvent.name : "N/A";
    document.querySelector("#event-largest-capacity").innerText = largestCapacityEvent ? largestCapacityEvent.name : "N/A";
}

function showCategoryStatistics(containerId, stats) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    for (const category in stats) {
        container.innerHTML += `
            <tr>
                <td class="small p-2">${category}</td>
                <td class="small p-2">$${stats[category].revenue.toFixed(2)}</td>
                <td class="small p-2">${stats[category].attendancePercentage.toFixed(2)}%</td>
            </tr>
        `;
    }
}

function showError(message) {
    document.getElementById("error-message").innerText = message;
}
// Diego Lopez 05-08-2024