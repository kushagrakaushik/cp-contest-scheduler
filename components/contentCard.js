export function createContestCard(contest) {
    const card = document.createElement("div");
    card.className = "contest-card";

    const title = document.createElement("h3");
    title.textContent = contest.name;
    card.appendChild(title);

    const platform = document.createElement("p");
    contest.platform = "Codeforces";
    platform.textContent = "Platform: " + contest.platform;
    card.appendChild(platform);

    const startTime = document.createElement("p");
    const date = new Date(contest.startTimeSeconds * 1000);
    startTime.textContent = "Start Time: " + date.toLocaleString();
    card.appendChild(startTime);

    return card;
}



export function addContestsToContainer(contests) {
    let upcomingContainer = document.getElementById("contest-list");
    let registeredContainer = document.getElementById("registered-contests");
    contests.forEach(contest => {
        upcomingContainer.appendChild(createContestCard(contest));
    })
}