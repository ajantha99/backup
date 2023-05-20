package com.ajucodes.RegistrationDemo.Service.Impl;

import com.ajucodes.RegistrationDemo.Dto.MemberDTO;
import com.ajucodes.RegistrationDemo.Dto.RegisterDTO;
import com.ajucodes.RegistrationDemo.Entity.Member;
import com.ajucodes.RegistrationDemo.Repo.MemberRepo;
import com.ajucodes.RegistrationDemo.Response.RegistrationResponse;
import com.ajucodes.RegistrationDemo.Service.MemberService;
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
    public  String addMember(MemberDTO memberDTO){
        Member member = new Member(
          memberDTO.getName(),
          memberDTO.getPassword(),
          memberDTO.getCpassword(),
          memberDTO.getAiesecemail(),

          this.passwordEncoder.encode(memberDTO.getPassword())
        );

        return  member.getMembername();
    }

    @Override
    public RegistrationResponse registerMember(RegisterDTO memberDTO) {
        String msg = "";
        Member member1 = memberRepo.findByEmail(memberDTO.getAiesecemail());
        if(member1 != null){
            String password = memberDTO.getPassword();
            String encodedPassword = member1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if(isPwdRight){
                Optional<Member> member = memberRepo.findOneByEmailAndPassword(memberDTO.getAiesecemail(), encodedPassword);
                if(member.isPresent()){
                    return new RegistrationResponse("Registration Success", true);
                }else{
                    return new RegistrationResponse("Registration Failed", false);
                }
            }else{
                return new RegistrationResponse("password Not Match", false);
            }
        }else{
            return new RegistrationResponse("Email not exits", false);
        }
    }

}
