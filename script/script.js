var N = false;

document.addEventListener("DOMContentLoaded", function() {
    var heartContainers = document.querySelectorAll(".heart-container");
    heartContainers.forEach(function(heartContainer) {
        heartContainer.addEventListener("click", function() {
            toggleHiddenContent(heartContainer);
        });
    });
});

function toggleHiddenContent(heartContainer) {
    var heart = heartContainer.querySelector(".heart");
    var content = heartContainer.querySelector(".content");
    var secondHeart = document.getElementById("heart2");

    if (content) {
        content.classList.toggle("hidden");

        if (secondHeart) {
            secondHeart.classList.toggle("hidden");
            if (!N) {
                showCombinedContent();
                N = true;
            } else {
                hideCombinedContent();
                N = false;
            }
        }
    }
}

function showCombinedContent() {
    var combinedContent = document.getElementById("content1");
    var TcombinedContent = document.getElementById("content2");

    if (combinedContent) {
        combinedContent.classList.remove("hidden");
    }
    if (TcombinedContent) {
        TcombinedContent.classList.remove("hidden");
    }
}

function hideCombinedContent() {
    var combinedContent = document.getElementById("content1");
    var TcombinedContent = document.getElementById("content2");

    if (combinedContent) {
        combinedContent.classList.add("hidden");
    }
    if (TcombinedContent) {
        TcombinedContent.classList.add("hidden");
    }
}
