package com.ajucode.backend.Dto;


public class MemberDTO {

    private int memberId;
    private String memberfname;
    private String membermname;
    private String memberlname;
    private int bdate;
    private String gender;
    private String username;
    private String password;
    private String cpassword;
    private String pemail;
    private String email;
    private String streetAddress;
    private String line2;
    private String city;
    private String province;
    private String faculty;
    private int wappnum;
    private String fofunction;
    private String foposition;
    private String bofunction;
    private String boposition;
    private int joindate;
    private String oevpname;
    private String tlmname;
    private String pfimageUrl;

    public MemberDTO(int memberId, String memberfname, String membermname, String memberlname, int bdate, String gender, String username, String password, String cpassword, String pemail, String email, String streetAddress, String line2, String city, String province, String faculty, int wappnum, String fofunction, String foposition, String bofunction, String boposition, int joindate, String oevpname, String tlmname, String pfimageUrl) {
        this.memberId = memberId;
        this.memberfname = memberfname;
        this.membermname = membermname;
        this.memberlname = memberlname;
        this.bdate = bdate;
        this.gender = gender;
        this.username = username;
        this.password = password;
        this.cpassword = cpassword;
        this.pemail = pemail;
        this.email = email;
        this.streetAddress = streetAddress;
        this.line2 = line2;
        this.city = city;
        this.province = province;
        this.faculty = faculty;
        this.wappnum = wappnum;
        this.fofunction = fofunction;
        this.foposition = foposition;
        this.bofunction = bofunction;
        this.boposition = boposition;
        this.joindate = joindate;
        this.oevpname = oevpname;
        this.tlmname = tlmname;
        this.pfimageUrl = pfimageUrl;
    }

    public MemberDTO() {
    }

    public int getMemberId() {
        return memberId;
    }

    public void setMemberId(int memberId) {
        this.memberId = memberId;
    }

    public String getMemberfname() {
        return memberfname;
    }

    public void setMemberfname(String memberfname) {
        this.memberfname = memberfname;
    }

    public String getMembermname() {
        return membermname;
    }

    public void setMembermname(String membermname) {
        this.membermname = membermname;
    }

    public String getMemberlname() {
        return memberlname;
    }

    public void setMemberlname(String memberlname) {
        this.memberlname = memberlname;
    }

    public int getBdate() {
        return bdate;
    }

    public void setBdate(int bdate) {
        this.bdate = bdate;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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

    public String getPemail() {
        return pemail;
    }

    public void setPemail(String pemail) {
        this.pemail = pemail;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getLine2() {
        return line2;
    }

    public void setLine2(String line2) {
        this.line2 = line2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getFaculty() {
        return faculty;
    }

    public void setFaculty(String faculty) {
        this.faculty = faculty;
    }

    public int getWappnum() {
        return wappnum;
    }

    public void setWappnum(int wappnum) {
        this.wappnum = wappnum;
    }

    public String getFofunction() {
        return fofunction;
    }

    public void setFofunction(String fofunction) {
        this.fofunction = fofunction;
    }

    public String getFoposition() {
        return foposition;
    }

    public void setFoposition(String foposition) {
        this.foposition = foposition;
    }

    public String getBofunction() {
        return bofunction;
    }

    public void setBofunction(String bofunction) {
        this.bofunction = bofunction;
    }

    public String getBoposition() {
        return boposition;
    }

    public void setBoposition(String boposition) {
        this.boposition = boposition;
    }

    public int getJoindate() {
        return joindate;
    }

    public void setJoindate(int joindate) {
        this.joindate = joindate;
    }

    public String getOevpname() {
        return oevpname;
    }

    public void setOevpname(String oevpname) {
        this.oevpname = oevpname;
    }

    public String getTlmname() {
        return tlmname;
    }

    public void setTlmname(String tlmname) {
        this.tlmname = tlmname;
    }

    public String getPfimageUrl() {
        return pfimageUrl;
    }

    public void setPfimageUrl(String pfimageUrl) {
        this.pfimageUrl = pfimageUrl;
    }

    @Override
    public String toString() {
        return "MemberDTO{" +
                "memberId=" + memberId +
                ", memberfname='" + memberfname + '\'' +
                ", membermname='" + membermname + '\'' +
                ", memberlname='" + memberlname + '\'' +
                ", bdate=" + bdate +
                ", gender='" + gender + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", cpassword='" + cpassword + '\'' +
                ", pemail='" + pemail + '\'' +
                ", email='" + email + '\'' +
                ", streetAddress='" + streetAddress + '\'' +
                ", line2='" + line2 + '\'' +
                ", city='" + city + '\'' +
                ", province='" + province + '\'' +
                ", faculty='" + faculty + '\'' +
                ", wappnum=" + wappnum +
                ", fofunction='" + fofunction + '\'' +
                ", foposition='" + foposition + '\'' +
                ", bofunction='" + bofunction + '\'' +
                ", boposition='" + boposition + '\'' +
                ", joindate=" + joindate +
                ", oevpname='" + oevpname + '\'' +
                ", tlmname='" + tlmname + '\'' +
                ", pfimageUrl='" + pfimageUrl + '\'' +
                '}';
    }
}
