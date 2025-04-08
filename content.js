// This script runs when the passenger input page loads
(function autofill() {
  const waitForElement = (selector, timeout = 10000) =>
    new Promise((resolve, reject) => {
      const interval = 100;
      let waited = 0;
      const check = () => {
        const el = document.querySelector(selector);
        if (el) return resolve(el);
        waited += interval;
        if (waited >= timeout) return reject(`Timeout waiting for ${selector}`);
        setTimeout(check, interval);
      };
      check();
    });

  async function fillForm() {
    try {
      console.log("⏳ Attempting to auto-fill form...");
      (await waitForElement('input[placeholder="Name"]')).value = "Rohit Roy";
      (await waitForElement('input[placeholder="Age"]')).value = "23";
      (await waitForElement('select[formcontrolname="passengerGender"]')).value = "M";
      (await waitForElement('select[formcontrolname="passengerNationality"]')).value = "IN";
      (await waitForElement('select[formcontrolname="passengerBerthChoice"]')).value = "SL";
      (await waitForElement('select[formcontrolname="passengerFoodChoice"]')).value = "N";

      console.log("✅ Form auto-filled!");
    } catch (err) {
      console.error("❌ Auto-fill failed:", err);
    }
  }

  fillForm();
})();
