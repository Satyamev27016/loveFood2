class ApiResponse {
    constructor(success, message, data = null) {
        this.success = success;
        this.message = message;
        this.data = data;
    }

    static successResponse(message, data = null) {
        return new ApiResponse(true, message, data);
    }

    static errorResponse(message, data = null) {
        return new ApiResponse(false, message, data);
    }

    toJSON() {
        return {
            success: this.success,
            message: this.message,
            data: this.data
        };
    }
}


export {ApiResponse}