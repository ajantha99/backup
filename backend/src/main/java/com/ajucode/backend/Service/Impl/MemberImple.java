package com.ajucode.backend.Service.Impl;


import com.ajucode.backend.Dto.LoginDTO;
import com.ajucode.backend.Dto.MemberDTO;
import com.ajucode.backend.Entity.Member;
import com.ajucode.backend.Repo.MemberRepo;
import com.ajucode.backend.Response.LoginResponse;
import com.ajucode.backend.Service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemberImple implements MemberService {

    @Autowired
    private MemberRepo memberRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addMember(MemberDTO memberDTO) {

        Member member = new Member(
                memberDTO.getMemberId(),
                memberDTO.getMemberfname(),
                memberDTO.getMembermname(),
                memberDTO.getMemberlname(),
                memberDTO.getBdate(),
                memberDTO.getGender(),
                memberDTO.getUsername(),
                this.passwordEncoder.encode(memberDTO.getPassword()),
                this.passwordEncoder.encode(memberDTO.getCpassword()),
                memberDTO.getPemail(),
                memberDTO.getEmail(),
                memberDTO.getStreetAddress(),
                memberDTO.getLine2(),
                memberDTO.getCity(),
                memberDTO.getProvince(),
                memberDTO.getFaculty(),
                memberDTO.getWappnum(),
                memberDTO.getFofunction(),
                memberDTO.getFoposition(),
                memberDTO.getBofunction(),
                memberDTO.getBoposition(),
                memberDTO.getJoindate(),
                memberDTO.getOevpname(),
                memberDTO.getTlmname(),
                memberDTO.getPfimageUrl()
        );

        memberRepo.save(member);

        return member.getMemberfname();
    }

    @Override
    public LoginResponse loginMember(LoginDTO loginDTO) {
        String msg = "";
        Member member1 = memberRepo.findByEmail(loginDTO.getUsername());
        if(member1 != null){
            String password = loginDTO.getPassword();
            String encodedPassword = member1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if(isPwdRight){
                Optional<Member> member = memberRepo.findOneByEmailAndPassword(loginDTO.getUsername(), encodedPassword);
                if(member.isPresent()){
                    return new LoginResponse("Login Success", true);
                }else{
                    return new LoginResponse("Login Failed", false);
                }
            }else{
                return new LoginResponse("password Not Match", false);
            }
        }else{
            return new LoginResponse("Email not exits", false);
        }
    }
}
