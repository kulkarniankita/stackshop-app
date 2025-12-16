import { Client, Account, Databases } from "appwrite";

const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("69412bf3001c53e39806");

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };

