function start()
{
    console.log("request handler 'start' was called.");
    return "request handler 'start' was called.";
}
function upload()
{
    console.log("request handler 'upload' was called.");
    return "request handler 'upload' was called.";
}

exports.start = start;
exports.upload = upload;
