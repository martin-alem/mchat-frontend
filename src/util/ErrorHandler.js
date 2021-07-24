class ErrorHandler {

    static errorHandler(errorMessage, duration, target) {

        const message = document.querySelector(target);
        message.innerHTML = errorMessage;
        message.classList.remove("hide");
        message.classList.add("show");

        setTimeout(() => {
            message.classList.add("hide");
            message.classList.remove("show");
        }, duration);
    }
}

export default ErrorHandler;