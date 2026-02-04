const BASE_URL = "https://splendid-cascaron-8b9286.netlify.app/.netlify/functions/fireZyggsParticle";

export const sendZyggsParticle = async ({ name, email, message }) => {
    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message }),
        });
        if (!response.ok) {
            throw new Error("Failed to send Zyggs Particle");
        }
        return { success: true };
    } catch (error) {
        console.error("Error sending Zyggs Particle:", error);
        return { success: false, error: error.message };
    }
};