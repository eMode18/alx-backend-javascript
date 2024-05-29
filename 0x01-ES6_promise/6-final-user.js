import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

async function handleProfileSignup(firstName, lastName, fileName) {
    try {
        // Call signUpUser and uploadPhoto functions
        const userPromise = signUpUser(firstName, lastName);
        const photoPromise = uploadPhoto(fileName);

        // Wait for promises to settle
        const [userResult, photoResult] = await Promise.allSettled([
            userPromise,
            photoPromise,
        ]);

        // make an array with the desired structure
        const resultArray = [
            {
                status: userResult.status,
                value: userResult.status === "fulfilled" ? userResult.value : userResult.reason,
            },
            {
                status: photoResult.status,
                value: photoResult.status === "fulfilled" ? photoResult.value : photoResult.reason,
            },
        ];

        return resultArray;
    } catch (error) {
        // Handle error
        console.error("Error during profile signup:", error);
        return [];
    }
}

export default handleProfileSignup;

