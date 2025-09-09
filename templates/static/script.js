const socket = io();

function sendMessage() {
    let msg = document.getElementById("message").value;

    // Dummy encryption (you'll replace with real AES/RSA logic)
    let encrypted = btoa(msg);  // base64 encoding as placeholder

    socket.emit("send_message", { encrypted_msg: encrypted });
    document.getElementById("message").value = "";
}

socket.on("receive_message", function(data) {
    let decrypted = atob(data.encrypted_msg);  // decoding
    let chat = document.getElementById("chat");
    chat.value += "Friend: " + decrypted + "\n";
});
