document.getElementById("save").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value; // Should be M/F/T
    const berth = document.getElementById("berth").value;

    chrome.storage.sync.set({ passenger: { name, age, gender, berth } }, () => {
        alert("Passenger info saved!");
    });
});
