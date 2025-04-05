function fillPassengerDetails() {
    chrome.storage.sync.get("passenger", function (data) {
        if (data.passenger) {
            const { name, age, gender, berth } = data.passenger;

            const interval = setInterval(() => {
                const nameField = document.querySelector("input[placeholder='Name']");
                const ageField = document.querySelector("input[formcontrolname='passengerAge']");
                const genderField = document.querySelector("select[formcontrolname='passengerGender']");
                const berthField = document.querySelector("select[formcontrolname='passengerBerthChoice']");

                if (nameField && ageField && genderField && berthField) {
                    clearInterval(interval);

                    nameField.value = name;
                    nameField.dispatchEvent(new Event("input", { bubbles: true }));

                    ageField.value = age;
                    ageField.dispatchEvent(new Event("input", { bubbles: true }));

                    genderField.value = gender; // Use "M", "F", or "T"
                    genderField.dispatchEvent(new Event("change", { bubbles: true }));

                    berthField.value = berth; // Like "SL", "SU", etc.
                    berthField.dispatchEvent(new Event("change", { bubbles: true }));

                    console.log("✅ IRCTC passenger details auto-filled!");
                }
            }, 500);
        }
    });
}

fillPassengerDetails();
