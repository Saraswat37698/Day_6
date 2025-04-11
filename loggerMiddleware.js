const loggerMiddleware = (req, res, next) => {
    const startTime = Date.now();
    const { method, url } = req;
    const timestamp = new Date().toISOString();
  
    res.on('finish', () => {
      const duration = Date.now() - startTime;
      console.log(`[${timestamp}] ${method} ${url} - ${res.statusCode} - ${duration}ms`);
    });
  
    next();
  };
  
  module.exports = loggerMiddleware;
  