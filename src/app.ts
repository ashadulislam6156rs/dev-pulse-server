
import { initDB } from './config/db'
import { config } from './config/dotenv'
import app from './server'


const main = () => {
    initDB();
    app.listen(config.port, () => {
       
  console.log(`DevPulse server running on port ${config.port}`)
})
}
main();