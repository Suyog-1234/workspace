import { createClient } from 'redis';

const client = createClient({
    password: 'workspace',
    socket: {
        host: 'redis-16736.c323.us-east-1-2.ec2.cloud.redislabs.com',
        port: 16736
    }
});

client.on('errpr',(err)=>console.log(err))

if(!client.isOpen){
   client.connect()   
}

export {client as redisClient}