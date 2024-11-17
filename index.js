const crypto = require("crypto");
class UniqueIdMaker {
    static generate(length = 16) {
        const timestamp = Date.now().toString(36); // Encode timestamp to base36
        const randomBytes = crypto.randomBytes(Math.ceil(length / 2)).toString('hex'); // Generate random bytes
        return `${timestamp}-${randomBytes.slice(0, length)}`; // Combine and limit the length
    }
}
module.exports = UniqueIdMaker;
