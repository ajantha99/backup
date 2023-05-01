package com.ajucodes.Onboarding.Service.Impl;

import com.ajucodes.Onboarding.Dto.LoginDTO;
import com.ajucodes.Onboarding.Dto.MemberDTO;
import com.ajucodes.Onboarding.Entity.Member;
import com.ajucodes.Onboarding.Repo.MemberRepo;
import com.ajucodes.Onboarding.Response.LoginResponse;
import com.ajucodes.Onboarding.Service.MemberService;
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
                memberDTO.getMemberid(),
                memberDTO.getMembername(),
                memberDTO.getEmail(),

                this.passwordEncoder.encode(memberDTO.getPassword())
        );

        memberRepo.save(member);

        return member.getMembername();
    }

    @Override
    public LoginResponse loginMember(LoginDTO loginDTO) {
        String msg = "";
        Member member1 = memberRepo.findByEmail(loginDTO.getEmail());
        if(member1 != null){
            String password = loginDTO.getPassword();
            String encodedPassword = member1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if(isPwdRight){
                Optional<Member> member = memberRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
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
