/**
 * Sets a value to a form field and dispatches input & change events
 * to trigger Angular's change detection and form updates.
 */
function setValueAndDispatch(selector, value) {
  const el = document.querySelector(selector);
  if (el) {
    el.value = value;

    // Dispatch events so Angular reacts to the change
    el.dispatchEvent(new Event("input", { bubbles: true }));
    el.dispatchEvent(new Event("change", { bubbles: true }));
  }
}

/**
 * Specifically handles Angular Material autocomplete input fields.
 * Sets the value and dispatches events to mimic typing and blur behavior.
 */
function fillAngularAutoComplete(selector, value) {
  const input = document.querySelector(selector);
  if (!input) return console.warn("❗ Autocomplete input not found");

  // Use the native setter to update input value programmatically
  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value"
  ).set;
  nativeInputValueSetter.call(input, value);

  // Dispatch events to mimic user interaction (Angular listens to these)
  input.dispatchEvent(new Event("input", { bubbles: true }));
  input.dispatchEvent(
    new KeyboardEvent("keydown", { bubbles: true, key: "a" })
  );
  input.dispatchEvent(new Event("blur")); // Triggers validations if any
}

// Fetch passenger data from Chrome storage and autofill the form
chrome.storage.sync.get("passengerData", ({ passengerData }) => {
  const defaults = {
    name: "Rohit Roy",
    age: "23",
    gender: "M",
    berth: "SL",
    food: "N",
    mobile: "7003275110",
  };

  // Merge stored data with defaults (fallback if any field is missing)
  const data = {
    ...defaults,
    ...passengerData,
  };

  console.log("🚀 Auto-filling with data:", data); // Optional: dev debug

  // Fill each field using appropriate method
  fillAngularAutoComplete(
    'input[placeholder="Name"][maxlength="16"]',
    data.name
  );
  setValueAndDispatch('input[formcontrolname="passengerAge"]', data.age);
  setValueAndDispatch('select[formcontrolname="passengerGender"]', data.gender);
  setValueAndDispatch(
    'select[formcontrolname="passengerBerthChoice"]',
    data.berth
  );
  setValueAndDispatch(
    'select[formcontrolname="passengerFoodChoice"]',
    data.food
  );
  setValueAndDispatch('input[formcontrolname="mobileNumber"]', data.mobile);

  // ✅ Check the "autoUpgradation" checkbox if not already checked
  const checkbox = document.querySelector(
    'input[formcontrolname="autoUpgradationSelected"]'
  );
  if (checkbox && !checkbox.checked) {
    checkbox.checked = true;
    checkbox.dispatchEvent(new Event("change", { bubbles: true }));
  }

  console.log("✅ Data filled successfully!"); // Optional: dev debug
});
