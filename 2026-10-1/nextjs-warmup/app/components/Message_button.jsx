"use client";

export default function MessageButton() {
    const buttonClick = async () => {
        try {
            const response = await fetch("/api/message");
            // show button as loading while fetching the message
            const button = document.getElementById("message-button");
            const messageContent = document.getElementById("message-content");
            button.disabled = true;
            button.textContent = "Loading...";

            if (response.ok) {
                const data = await response.json();
                messageContent.textContent = data.message;
                // reset button state after fetching the message
                button.disabled = false;
                button.textContent = "Get Message";

                } else {
                    throw new Error("Network response was not ok");
                    }
            
            
        }
        catch (error) {
            console.error("Error fetching message:", error);
            const data = "Viga!";
            messageContent.textContent = data;
        }
    };
    return (
        <div>
            <button id="message-button" onClick={buttonClick}>
                Get Message
            </button>
            <p id="message-content"></p>
        </div>
    );
}