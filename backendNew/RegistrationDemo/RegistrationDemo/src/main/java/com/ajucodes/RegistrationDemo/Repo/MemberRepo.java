package com.ajucodes.RegistrationDemo.Repo;

import com.ajucodes.RegistrationDemo.Entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository

public interface MemberRepo extends JpaRepository<Member, String> {

    Optional<Member> findOneByEmailAndPassword(String aiesecemail, String encodedPassword);
    Member findByEmail(String aiesecemail);

}
