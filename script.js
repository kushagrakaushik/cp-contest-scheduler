import { getContests } from "./services/contestService.js";
import { addContestsToContainer } from "./components/contentCard.js";

async function initializeApp() {
    try {
        const contests = await getContests();
        console.log("Contests loaded:", contests);

        addContestsToContainer(contests);
        return contests;
    } catch (error) {
        console.error("Error initializing app:", error);
    }
}

initializeApp();