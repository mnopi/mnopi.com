// [py].js

// /api/py

// $ curl "https://mnopi.com/api/py"
// ..>This page could not be found<...type="application/json"
// $ curl -f "https://mnopi.com/api/py"                                                         22 x 
// curl: (22) The requested URL returned error: 404
// $ curl -X GET -H "Accept: application/json" "https://mnopi.com/api/py"
// ..>This page could not be found<...type="application/json"
// $ curl -f -X GET -H "Accept: application/json" "https://mnopi.com/api/py"                    22 x 
// curl: (22) The requested URL returned error: 404

// Adding: /api/py/index.mdx -> index.mdx and [path].js incompatible, but also /api/git.js with /api/index.mdx
// $ curl -X GET -H "Accept: application/json" "https://mnopi.com/api/py"
// {"error": {"code": "504", "message": "An error occurred with your deployment"}}
// An error occurred with your deployment
// FUNCTION_INVOCATION_TIMEOUT

// $ curl "https://mnopi.com/api/py/test"
// {"path":"test"}
// $ curl -f "https://mnopi.com/api/py/test"                                                    22 x 
// curl: (22) The requested URL returned error: 400
// $ curl -X GET -H "Accept: application/json" "https://mnopi.com/api/py/test" 
// {"path":"test"}
// $ curl -f -X GET -H "Accept: application/json" "https://mnopi.com/api/py/test"               22 x 
// curl: (22) The requested URL returned error: 400
// $ curl -X GET -H "Accept: application/json" "https://mnopi.com/api/py/test?param=1&empty"    22 x
// {"empty":"","param":"1","path":"test"}

// curl -fsSL "https://mnopi.com/api/py/dev"
// curl -fsSL "https://mnopi.com/api/py/test"

export default function handler(request, response) {
  const dev = ["build", "darling", "ipython", "pip-tools", "pytest"];
  if (request.query === {}) {
    response.send(dev.join('\n'));
  } else {
    switch (req.query.index) {
      case "ip":
        response.send(dev.join(req.ip));
      case "download":
        res.download('download-2021', 'download.pdf');
      case "mozilla":
        res.send('<a href="https://www.mozilla.org/en-US/about/manifesto/">Mozilla Manifesto</a>');
      case "favicon":
        res.download('/favicon-32x32.png', 'favicon.pdf');
      case "modify":
        if (res.protocol === 'https') {
          res.modified = true;
        }
        res.send(res);
      case "dir":
        let files = fs.readdirSync('/public')
        for (i = 0; i < fs.files.length; i++) {
          const basename = path.basename(file[i]);
          file[i] = `'<a href="https://www.mnopi.com/${basename}/">${basename}</a>`;
          response.send(file.join('\n'));
        }
        readdirSync
      case "sendfile":
        res.sendFile('/favicon-32x32.png', {
          root: path.join(__dirname, 'public'),
          headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
          }          
        });
      default:
        response.status(400).send({
          error: {
            code: 400,
            message: "Invalid path and/or query",
            path: `/api/py/${query.path}`,
            query: request.query
          }
        });
   };
}
