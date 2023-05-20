package com.ajucodes.RegistrationDemo.Response;

public class RegistrationResponse {
    String message;
    Boolean status;

    public RegistrationResponse() {
    }

    public RegistrationResponse(String message, Boolean status) {
        this.message = message;
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "RegistrationResponse{" +
                "message='" + message + '\'' +
                ", status=" + status +
                '}';
    }
}
