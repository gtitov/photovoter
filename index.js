const vote = function(markValue) {
    const candidateImage = document.querySelector("#candidate")
    candidateImage.style.display = "none"
    const loadingDiv = document.querySelector("#loading")
    loadingDiv.style.display = "block"

    const response = {
        photo: candidateImage.src,
        mark: markValue
    }
    // надо отправить в API оценку и отметить, что это фото уже оценено
    console.log(response)
    // а потом запросить новое фото
    candidateImage.src = "photo.jpg"
    loadingDiv.style.display = "none"
    candidateImage.style.display = "block"
}

document.querySelector("#dislike").onclick = function() {
    vote(1)
}
document.querySelector("#like").onclick = function() {
    vote(2)
}
document.querySelector("#next").onclick = function() {
    candidateImage.src = "photo.jpg"
}

// Get a reference to an element.
const candidateImage = document.querySelector("#candidate")

// Create an instance of Hammer with the reference.
var candidateHammer = new Hammer(candidateImage)
candidateHammer.on('swipeleft', function(ev) {
    vote(1)
})
candidateHammer.on('swiperight', function(ev) {
	vote(2)
})