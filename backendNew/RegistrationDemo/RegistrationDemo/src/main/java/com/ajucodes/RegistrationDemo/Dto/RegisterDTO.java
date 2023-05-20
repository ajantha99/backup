package com.ajucodes.RegistrationDemo.Dto;

public class RegisterDTO {
    private String name;
    private String password;
    private String cpassword;
    private String aiesecemail;

    public RegisterDTO() {
    }

    public RegisterDTO(String name, String password, String cpassword, String aiesecemail) {
        this.name = name;
        this.password = password;
        this.cpassword = cpassword;
        this.aiesecemail = aiesecemail;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCpassword() {
        return cpassword;
    }

    public void setCpassword(String cpassword) {
        this.cpassword = cpassword;
    }

    public String getAiesecemail() {
        return aiesecemail;
    }

    public void setAiesecemail(String aiesecemail) {
        this.aiesecemail = aiesecemail;
    }

    @Override
    public String toString() {
        return "RegisterDTO{" +
                "name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", cpassword='" + cpassword + '\'' +
                ", aiesecemail='" + aiesecemail + '\'' +
                '}';
    }
}
