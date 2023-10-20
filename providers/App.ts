
import * as express from 'express';
import {userHandler, nftHandler} from './suiController'
class App {
    StartServer(){
        const port: number = 3002;

		// Registering Exception / Error Handlers
		const exp = express.application
        const handler = new userHandler();
        const nft = new nftHandler();
        exp.use("/addUser", handler.addUser)
        exp.use("/createUser", handler.createUser)
        exp.use("/createNftByUser", nft.createNftOnNetwork)
        exp.use("/getNftByUser", handler.getNfts)


		exp.listen(port, () => {
			return console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ 'http://localhost:${port}'`);
		}).on('error', (_error) => {
			return console.log('Error: ', _error.message);
		});
    }
}

export default new App;