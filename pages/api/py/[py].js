// [py].js

export default function handler(request, response) {
  const dev = ["build", "darling", "ipython", "pip-tools", "pytest"];
  let body = dev.join('\n');
  let code = 200;
  
  if (request.query !== "dev" && request.query !== null) {
    body = request.query;
    code = 400;
  }
  
  if (typeof body === 'string') {
    response.status(code).end(body);
  } else {
    response.status(code).json(body);
  }
}
