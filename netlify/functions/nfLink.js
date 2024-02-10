exports.handler = async (event, context) => {
    try {
        // Access the environment variable
        const pcloudLink = process.env.PCLOUD_LINKLFOD;

        // Logic to use the pcloudLink (this will depend on what you want to do)
        // Possibilities:
        //  1. Redirect the user to the link
        //  2. Send an email with the link
        //  3. Store the link in a database for later use

        // Example: Redirect the user
        return {
            statusCode: 302, // Redirect status code
            headers: {
                Location: pcloudLink
            }
        };

    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: 'An error occurred.'
        };
    }
};