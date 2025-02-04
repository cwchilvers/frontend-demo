document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tabs button");
    const tabContents = document.querySelectorAll(".tab");

    // Only for Team Managers(s) tab on Attendees pages
    const note = document.getElementById("note"); 

    tabs.forEach(tab => {
        tab.addEventListener("click", function(event) {
            event.preventDefault();

            tabs.forEach(button => button.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            tab.classList.add("active");
            const targetTab = document.getElementById(tab.dataset.target);
            targetTab.classList.add("active");

            //  Only show the note for Team Managers(s) tab on Attendees pages
            if (tab.dataset.target === "tms" || tab.dataset.target === "mobile-tms") {
                note.style.display = "block";
            } else {
                note.style.display = "none";
            }
        });
    });
});
