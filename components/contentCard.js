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

    card.appendChild(registerButton);

    upcomingContainer.appendChild(card);
}



export function addContestsToContainer(contests) {
    let upcomingContainer = document.getElementById("contest-list");
    let registeredContainer = document.getElementById("registered-contests");
    contests.forEach(contest => {
        createContestCard(contest, upcomingContainer, registeredContainer);
    })
}