package com.ajucode.backend.Entity;
import jakarta.persistence.*;

@Entity
@Table(name = "member")
public class Member {
    @Id
    @Column(name = "member_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int memberId;

    @Column(name = "Member_name", length = 255)
    private String membername;

    @Column(name = "email", length = 255)
    private String email;

    @Column(name = "password", length = 255)
    private String password;

    public Member(int memberId, String membername, String email, String password) {
        this.memberId = memberId;
        this.membername = membername;
        this.email = email;
        this.password = password;
    }

    public Member() {
    }

    public int getMemberId() {
        return memberId;
    }

    public void setMemberId(int memberId) {
        this.memberId = memberId;
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
        return "Member{" +
                "memberId=" + memberId +
                ", membername='" + membername + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
