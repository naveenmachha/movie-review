let movieReviewsContainer = document.getElementById("movieReviewsContainer");
let titleInput = document.getElementById("titleInput");
let reviewTextarea = document.getElementById("reviewTextarea");
let addBtn = document.getElementById("addBtn");

let reviewsContainer = document.createElement("div");
reviewsContainer.classList.add("col-12", "mt-3");
reviewsContainer.id = "reviewsContainer";
movieReviewsContainer.appendChild(reviewsContainer);

addBtn.onclick = function() {
    if (titleInput.value === "") {
        alert("enter the movie title");
        return;
    }


    let mtElement = document.createElement("h1");
    mtElement.textContent = "Movie Title: " + titleInput.value;
    mtElement.classList.add("mtHeading");
    reviewsContainer.appendChild(mtElement);

    let reviewPara = document.createElement("p");
    reviewPara.classList.add("mtpara");
    reviewPara.textContent = "Review: " + reviewTextarea.value;
    reviewsContainer.appendChild(reviewPara);

    titleInput.value = "";
    reviewTextarea.value = "";
}