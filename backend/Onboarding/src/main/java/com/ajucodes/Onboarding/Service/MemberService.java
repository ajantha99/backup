package com.ajucodes.Onboarding.Service;

import com.ajucodes.Onboarding.Dto.LoginDTO;
import com.ajucodes.Onboarding.Dto.MemberDTO;
import com.ajucodes.Onboarding.Response.LoginResponse;

public interface MemberService {

    String addMember(MemberDTO memberDTO);

    LoginResponse loginMember(LoginDTO loginDTO);
}
