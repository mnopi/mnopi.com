// [py].js

export default function handler(req, res) {
  const dev = ["build", "darling", "ipython", "pip-tools", "pytest"];
  if (req.query === {}) {
    res.send(dev.join('\n'));
  } else {
    switch (req.query.path) {
      case "req":
        res.send(req);
        break;
      case "ip":
        res.send(req.ip);
        break;
      case "download":
        res.download('./download-2021', 'download.pdf');
        break;
      case "mozilla":
        res.send('<a href="https://www.mozilla.org/en-US/about/manifesto/">Mozilla Manifesto</a>');
        break;
      case "favicon":
        res.download('/favicon-32x32.png', 'favicon.pdf');
        break;
      case "modify":
        if (res.protocol === 'https') {
          res.modified = true;
        }
        res.send(res.middelware);
        break;
      case "dir":
        let files = fs.readdirSync('/public')
        for (i = 0; i < fs.files.length; i++) {
          const basename = path.basename(file[i]);
          file[i] = `'<a href="https://www.mnopi.com/${basename}/">${basename}</a>`;
        }
        response.send(file.join('\n'));
        break;
      case "sendfile":
        res.sendFile('/favicon-32x32.png', {
          root: path.join(__dirname, 'public'),
          headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
          }          
        });
        break;
      default:
        res.status(400).send({
          error: {
            code: 400,
            message: "Invalid path and/or query",
            path: `/api/py/${req.query.path}`,
            query: req.query
          }
        });
    };
  };
}
