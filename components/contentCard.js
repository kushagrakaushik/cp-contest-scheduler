export function createContestCard(contest, upcomingContainer, registeredContainer) {
    const card = document.createElement("div");
    card.className = "contest-card";

    const title = document.createElement("h3");
    title.textContent = contest.name;
    card.appendChild(title);

    const platform = document.createElement("p");
    platform.textContent = "Platform: Codeforces";
    card.appendChild(platform);

    const startTime = document.createElement("p");
    const date = new Date(contest.startTimeSeconds * 1000);
    startTime.textContent = "Start Time: " + date.toLocaleString();
    card.appendChild(startTime);

    const duration = document.createElement("p");
    const hours = Math.floor(contest.durationSeconds / 3600);
    const minutes = Math.floor((contest.durationSeconds % 3600) / 60);
    const days = Math.floor(hours / 24);
    duration.textContent = days>0?`Duration: ${days}d ${hours}h ${minutes}m`: `Duration: ${hours}h ${minutes}m`;
    card.appendChild(duration);

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    card.appendChild(buttonContainer);

    const addToCalendarButton = document.createElement("button");
    addToCalendarButton.className = "calendar-button";
    addToCalendarButton.textContent = "Add to Calendar";

    addToCalendarButton.addEventListener("click", () => {
        const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(contest.name)}&dates=${new Date(contest.startTimeSeconds * 1000).toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${new Date((contest.startTimeSeconds + contest.durationSeconds) * 1000).toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=Contest%20on%20Codeforces&location=https://codeforces.com/contests`;
        window.open(calendarUrl, "_blank");
    });

    buttonContainer.appendChild(addToCalendarButton);

    const registerButton = document.createElement("button");
    registerButton.className = "register-button";
    registerButton.textContent = "Register";

    registerButton.addEventListener("click", () => {
        if (registerButton.textContent === "Unregister") {
            registerButton.textContent = "Register";
                upcomingContainer.appendChild(card);
            return;
        }

        registeredContainer.appendChild(card);
        registerButton.textContent = "Unregister";
    });

    buttonContainer.appendChild(registerButton);

    upcomingContainer.appendChild(card);
}



export function addContestsToContainer(contests) {
    let upcomingContainer = document.getElementById("contest-list");
    let registeredContainer = document.getElementById("registered-contests");
    contests.forEach(contest => {
        createContestCard(contest, upcomingContainer, registeredContainer);
    })
}