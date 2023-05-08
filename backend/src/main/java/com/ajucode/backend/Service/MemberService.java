package com.ajucode.backend.Service;

import com.ajucode.backend.Dto.LoginDTO;
import com.ajucode.backend.Dto.MemberDTO;
import com.ajucode.backend.Response.LoginResponse;

public interface MemberService {

    String addMember(MemberDTO memberDTO);

    LoginResponse loginMember(LoginDTO loginDTO);
}
