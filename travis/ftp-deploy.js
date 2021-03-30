var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

const NAME = process.env.PEBIO_FTP_NAME;
const PASSWD = process.env.PEBIO_FTP_PASSWD;
const HOST = process.env.PEBIO_FTP_HOST;

const config={
    
    host:HOST,
    user:NAME,
    password:PASSWD,

    localRoot: __dirname + "/../public",
    remoteRoot: "pebo.io/public_html/",
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: true,
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["*"],
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
    // use sftp or ftp
    sftp: false
}

console.log("Uploading build to pebo.io...")
ftpDeploy
    .deploy(config)
    .then(res => console.log("Build upload finished!"))
    .catch(err => console.log(err));

