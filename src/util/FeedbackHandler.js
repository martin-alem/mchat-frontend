class FeedbackHandler {

    static feedback(message, target, other) {

        const element = document.querySelector(target);
        const secondary = document.querySelector(other);
        secondary.classList.add("hide");
        element.textContent = message;
    }

    static done(target, other) {
        const element = document.querySelector(target);
        const secondary = document.querySelector(other);
        secondary.classList.remove("hide");
        element.textContent = ""
    }

}

export default FeedbackHandler;