const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Exploiting",
        state: "In Game",
        startTimestamp: new Date(),
        largeImageKey: "big",
        largeImageText: "Sub to Minish on YouTube!"
    })

    console.log("Rich presence is enabled!");
});

rpc.login({
    clientId: "828783831095705680"
});