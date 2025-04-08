// document.getElementById("fill").addEventListener("click", async () => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       files: ["content.js"]
//     });
//   });
  

document.getElementById("save").addEventListener("click", () => {
  const saveButton = document.getElementById("save");

  const data = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    mobile: document.getElementById("mobile").value,
    gender: document.getElementById("gender").value,
    berth: document.getElementById("berth").value,
    food: document.getElementById("food").value
  };
  

  // Change button text instantly
  saveButton.textContent = "Data Saved";
  saveButton.disabled = true;

  chrome.storage.sync.set({ passengerData: data }, () => {
    // Optional: reset after 2 seconds
    setTimeout(() => {
      saveButton.textContent = "Save Data";
      saveButton.disabled = false;
    }, 2000);
  });
});

document.getElementById("fill").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"]
  }, () => {
    const fillBtn = document.getElementById("fill");
    fillBtn.textContent = "Data Filled";
    setTimeout(() => fillBtn.textContent = "Fill Data", 1500);
  });
});