package com.ajucode.backend.MemberController;


import com.ajucode.backend.Dto.LoginDTO;
import com.ajucode.backend.Dto.MemberDTO;
import com.ajucode.backend.Response.LoginResponse;
import com.ajucode.backend.Service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
