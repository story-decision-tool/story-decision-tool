
document.getElementById('storyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const about = form.about.value;

    let storyType = "";
    switch (about) {
        case "Process":
            storyType = "PROCESS STORY: It highlights the way you did your work.";
            break;
        case "Narrative":
            storyType = "NARRATIVE STORY: It focuses on both the process and the results.";
            break;
        case "Impact":
            storyType = "IMPACT STORY: It showcases how lives were improved.";
            break;
        case "Creative":
            storyType = "CREATIVE STORY: It creatively shows what your data can inspire.";
            break;
    }

    document.getElementById('result').innerText = "Recommended Story Type: " + storyType;
});
