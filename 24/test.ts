const serverNewConfig = {
    protocol: "https",
    port: 3001,
    role: 'admin',
    log: (msg: string): void => console.log(msg)
};

const backupConfig = {
    protocol: "http",
    port: 3000,
};

interface BasicConfig {
    protocol: string;
    port: number;
}

const startNewServer = (config: BasicConfig): "Server started" => {
    console.log(`Server started on ${config.protocol}://server:${config.port}`);
  
    return "Server started";
};
  
startNewServer(serverNewConfig);
startNewServer(backupConfig);