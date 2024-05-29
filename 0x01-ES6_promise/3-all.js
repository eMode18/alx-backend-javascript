import { uploadPhoto, createUser } from "./utils.js"

function handleProfileSignup() {
    // Create an array of promises
    const promises = [uploadPhoto(), createUser()];

    // concurrently resolve the promises
    Promise.all(promises)
        .then(([photoResult, userResult]) => {
            // extract data
            const { body } = photoResult;
            const { firstName, lastName } = userResult;

            console.log(`${body} ${firstName} ${lastName}`);
        })
        .catch((error) => {
            console.error("Signup system offline");
        });
}

export default handleProfileSignup;

