// Show registration form

function showRegistration() {
    document.getElementById("registration").classList.remove("hidden");

    document.getElementById("registration").scrollIntoView({
        behavior: "smooth"
    });
}


// Add new agent

function addAgent(event) {

    event.preventDefault();

    let name = document.getElementById("agentName").value;
    let email = document.getElementById("agentEmail").value;
    let phone = document.getElementById("agentPhone").value;
    let location = document.getElementById("agentLocation").value;
    let status = document.getElementById("agentStatus").value;

    let table = document.getElementById("agentTable");

    let agentNumber = table.rows.length + 1;

    let newRow = table.insertRow();

    newRow.innerHTML = `
        <td>AG00${agentNumber}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${location}</td>
        <td>
            <span class="${status === "Active" ? "active" : "training"}">
                ${status}
            </span>
        </td>
        <td>New</td>
    `;

    alert("Agent registered successfully!");

    document.getElementById("agentName").value = "";
    document.getElementById("agentEmail").value = "";
    document.getElementById("agentPhone").value = "";
    document.getElementById("agentLocation").value = "";

    updateAgentCount();
}


// Search agents

function searchAgents() {

    let input = document
        .getElementById("searchAgent")
        .value
        .toLowerCase();

    let rows = document
        .getElementById("agentTable")
        .getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {

        let text = rows[i].innerText.toLowerCase();

        if (text.includes(input)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}


// Update total agents

function updateAgentCount() {

    let rows = document
        .getElementById("agentTable")
        .getElementsByTagName("tr");

    document.getElementById("totalAgents").innerText = rows.length;
}


// Report message

function showMessage(message) {
    alert(message);
}


// Logout button

function logout() {
    alert("You have been logged out.");
}