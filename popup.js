// Handle Save Data button click
document.getElementById("save").addEventListener("click", () => {
  const saveButton = document.getElementById("save");

  // Collect passenger input data from popup form
  const data = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    mobile: document.getElementById("mobile").value,
    gender: document.getElementById("gender").value,
    berth: document.getElementById("berth").value,
    food: document.getElementById("food").value
  };

  // Provide visual feedback to user that data is saved
  saveButton.textContent = "Saved";
  saveButton.disabled = true;

  // Save passenger data to Chrome sync storage
  chrome.storage.sync.set({ passengerData: data }, () => {
    // Reset button after 1.5 seconds
    setTimeout(() => {
      saveButton.textContent = "Save Data";
      saveButton.disabled = false;
    }, 1500);
  });
});

// Handle Fill Data button click
document.getElementById("fill").addEventListener("click", async () => {
  // Get the currently active tab in the browser
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Inject the content script to perform autofill in the IRCTC page
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"]
  }, () => {
    // Temporarily change button text to indicate data was filled
    const fillBtn = document.getElementById("fill");
    fillBtn.textContent = "Data Filled";
    setTimeout(() => fillBtn.textContent = "Fill Data", 1500);
  });
});

// Handle Clear Data button click
document.getElementById("clear").addEventListener("click", () => {
  // Remove passenger data from Chrome sync storage
  chrome.storage.sync.remove("passengerData", () => {
    const clearBtn = document.getElementById("clear");

    // Visual feedback for user after clearing data
    clearBtn.textContent = "Cleared";

    setTimeout(() => {
      clearBtn.textContent = "Clear Data";
    }, 1500);
  });
});
