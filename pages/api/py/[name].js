// [py].js

// curl -fsSL "https://mnopi.com/api/py" -> 404
// curl -fsSL "https://mnopi.com/api/py/dev"

export default function handler(request, response) {
  const dev = ["build", "darling", "ipython", "pip-tools", "pytest"];
  let body = dev.join('\n');
  let code = 200;
  
  if (request.query.name !== "dev" && request.query !== null) {
    body = request.query;
    code = 400;
  }
  
  if (typeof body === 'string') {
    response.status(code).end(body);
  } else {
    response.status(code).json(body);
  }
}
