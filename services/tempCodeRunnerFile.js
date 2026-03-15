const filteredAndSortedData = data.result.filter(contest => contest.phase === "BEFORE").sort((a, b) => a.startTimeSeconds - b.startTimeSeconds);
        // return filteredAndSortedData;