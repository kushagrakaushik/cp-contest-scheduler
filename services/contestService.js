export async function getContests() {
    try{
        const response = await fetch("https://codeforces.com/api/contest.list");
        const data = await response.json();

        const filteredAndSortedData = data.result.filter(contest => contest.phase === "BEFORE").sort((a, b) => a.startTimeSeconds - b.startTimeSeconds);
        return filteredAndSortedData;
    } catch(error){
        throw new Error("Failed to fetch contests: " + error.message);
    }
}