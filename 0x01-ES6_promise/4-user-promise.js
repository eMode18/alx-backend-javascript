function signUpUser(firstName, lastName) {
    // make a resolved promise with given data
    return Promise.resolve({
        firstName: firstName,
        lastName: lastName,
    });
}

export default signUpUser;
