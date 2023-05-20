package com.ajucodes.RegistrationDemo.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="member")
public class Member{
    @Id
    @Column(name="member_id", length = 255)
    @GeneratedValue(strategy =  GenerationType.AUTO)
    private Integer memberId;

    @Column(name="Member_name", length = 255)
    private String membername;

    @Column(name = "password", length = 255)
    private String password;

    @Column(name = "cpassword", length = 255)
    private String cpassword;

    @Column(name="aiesecemail", length = 255)
    private  String aisecemail;

    public Member(String name, String password, String cpassword, String aiesecemail, String encode) {
    }

    public Member() {
    }

    public Member(Integer memberId, String membername, String password, String cpassword, String aisecemail) {
        this.memberId = memberId;
        this.membername = membername;
        this.password = password;
        this.cpassword = cpassword;
        this.aisecemail = aisecemail;
    }

    public Integer getMemberId() {
        return memberId;
    }

    public void setMemberId(Integer memberId) {
        this.memberId = memberId;
    }

    public String getMembername() {
        return membername;
    }

    public void setMembername(String membername) {
        this.membername = membername;
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

    public String getAisecemail() {
        return aisecemail;
    }

    public void setAisecemail(String aisecemail) {
        this.aisecemail = aisecemail;
    }

    @Override
    public String toString() {
        return "Member{" +
                "memberId=" + memberId +
                ", membername='" + membername + '\'' +
                ", password='" + password + '\'' +
                ", cpassword='" + cpassword + '\'' +
                ", aisecemail='" + aisecemail + '\'' +
                '}';
    }
}
