import dotenv from "dotenv";
dotenv.config();
export function fromEnv(key) {
    return process.env[key] || "";
}
export default {
    PORT: process.env.PORT,
    CLIENT_DOMAIN: process.env.CLIENT_DOMAIN,
};
//# sourceMappingURL=envConfig.js.map