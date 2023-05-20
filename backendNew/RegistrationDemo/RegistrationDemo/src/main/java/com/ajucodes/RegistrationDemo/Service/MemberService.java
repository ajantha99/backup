package com.ajucodes.RegistrationDemo.Service;

import com.ajucodes.RegistrationDemo.Dto.MemberDTO;
import com.ajucodes.RegistrationDemo.Dto.RegisterDTO;
import com.ajucodes.RegistrationDemo.Response.RegistrationResponse;

public interface MemberService {
    String addMember(MemberDTO memberDTO);

    RegistrationResponse registerMember(RegisterDTO MemberDTO);
}
