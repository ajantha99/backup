package com.ajucodes.Onboarding.MemberController;


import com.ajucodes.Onboarding.Dto.LoginDTO;
import com.ajucodes.Onboarding.Dto.MemberDTO;
import com.ajucodes.Onboarding.Response.LoginResponse;
import com.ajucodes.Onboarding.Service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Path;

@RestController
@CrossOrigin
@RequestMapping("member")


public class MemberController {


    @Autowired
    private MemberService memberService;


    @PostMapping("/save")
    public String saveMember(@RequestBody MemberDTO memberDTO){
        String id = memberService.addMember(memberDTO);
        return id;
    }

    @PostMapping( "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO){
        LoginResponse loginResponse = memberService.loginMember(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

}
