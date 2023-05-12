package com.ajucode.backend.Dto;

public class MemberDTO {

    private int memberid;
    private String membername;
    private String email;
    private String password;

    public MemberDTO(int memberid, String membername, String email, String password) {
        this.memberid = memberid;
        this.membername = membername;
        this.email = email;
        this.password = password;
    }

    public MemberDTO() {
    }

    public int getMemberid() {
        return memberid;
    }

    public void setMemberid(int memberid) {
        this.memberid = memberid;
    }

    public String getMembername() {
        return membername;
    }

    public void setMembername(String membername) {
        this.membername = membername;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "MemberDTO{" +
                "memberid=" + memberid +
                ", membername='" + membername + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
