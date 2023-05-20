package com.ajucodes.RegistrationDemo.MemberController;

import com.ajucodes.RegistrationDemo.Dto.MemberDTO;
import com.ajucodes.RegistrationDemo.Dto.RegisterDTO;
import com.ajucodes.RegistrationDemo.Response.RegistrationResponse;
import com.ajucodes.RegistrationDemo.Service.MemberService;
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

    @PostMapping( "/register")
    public ResponseEntity<?> registerEmployee(@RequestBody RegisterDTO memberDTO){
        RegistrationResponse registerResponse = memberService.registerMember(memberDTO);
        return ResponseEntity.ok(registerResponse);
    }

}
