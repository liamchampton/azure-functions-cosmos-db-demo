module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello! This HTTP triggered function executed successfully and you have added " + name + " to the database."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body to add items to the database.";
    const price = req.body.price;
    const description = req.body.description;

    if (name) {
        /* outputDocument* is the reference name of the binding
        * this is defined when creating the function binding
        */
        context.bindings.outputDocument = JSON.stringify({
            // create a random ID
            id: new Date().toISOString() + Math.random().toString().substr(2, 8),
            name: name,
            price: price,
            description: description
        });
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        status: 200,
        body: responseMessage,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'text/plain'
        }
    };
}