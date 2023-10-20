"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
class App {
    startServer() {
    }
}
class Express {
    /**
     * Initializes the express server
     */
    constructor() {
        this.express = express();
        this.mountDotEnv();
        this.mountMiddlewares();
        this.mountRoutes();
    }
    mountDotEnv() {
        this.express = Locals.init(this.express);
    }
    /**
     * Mounts all the defined middlewares
     */
    mountMiddlewares() {
        this.express = Bootstrap.init(this.express);
    }
    /**
     * Mounts all the defined routes
     */
    mountRoutes() {
        this.express = Routes.mountWeb(this.express);
        this.express = Routes.mountApi(this.express);
    }
    /**
     * Starts the express server
     */
    init() {
        const port = Locals.config().port;
        // Registering Exception / Error Handlers
        this.express.use(ExceptionHandler.logErrors);
        this.express.use(ExceptionHandler.clientErrorHandler);
        this.express.use(ExceptionHandler.errorHandler);
        this.express = ExceptionHandler.notFoundHandler(this.express);
        // Start the server on the specified port
        this.express.listen(port, () => {
            return console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ 'http://localhost:${port}'`);
        }).on('error', (_error) => {
            return console.log('Error: ', _error.message);
        });
    }
}
