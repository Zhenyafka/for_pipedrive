export default async function submitForm() {
    const clientDetails = {
        first_name: document.getElementById("firstName").value,
        last_name: document.getElementById("lastName").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value
    };

    const jobDetails = {
        job_type: document.getElementById("jobType").value,
        job_source: document.getElementById("jobSource").value,
        job_description: document.getElementById("jobDescription").value
    };

    const serviceLocation = {
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zip_code: document.getElementById("zipCode").value,
        area: document.getElementById("area").value
    };

    const schedule = {
        start_date: document.getElementById("startDate").value,
        start_time: document.getElementById("startTime").value,
        end_time: document.getElementById("endTime").value,
        test_select: document.getElementById("testSelect").value
    };

    const data = {
        title: `${clientDetails.first_name} ${clientDetails.last_name}`,
        person: clientDetails,
        job_details: jobDetails,
        location: serviceLocation,
        schedule: schedule
    };

    try {
        const response = await fetch('https://api.pipedrive.com/v1/deals?api_token=YOUR_API_TOKEN', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            alert("Data saved to Pipedrive successfully!");
        } else {
            alert("Failed to save data: " + (result.error || "Unknown error"));
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while saving data.");
    }
}
