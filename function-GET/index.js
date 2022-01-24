module.exports = async function (context, req, inputDocument) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        // status: 200, /* Defaults to 200 */
        status: 200,
        /* inputDocument* is the object being returned from the DB instance and passed into the function
        * this is defined when creating the function binding
        */
        body: inputDocument,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'text/plain'
        }
    };
}