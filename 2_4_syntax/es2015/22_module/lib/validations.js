const max_length = 140;
function validate_message(message) {
    if (message.length > max_length) {
        return false;
    }
    return true;
}
export {max_length, validate_message};
