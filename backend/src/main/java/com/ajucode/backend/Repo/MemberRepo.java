package com.ajucode.backend.Repo;


import com.ajucode.backend.Entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository

public interface MemberRepo extends JpaRepository<Member, Integer> {

    Optional<Member> findOneByEmailAndPassword(String email, String encodedPassword);
    Member findByEmail(String email);


}
