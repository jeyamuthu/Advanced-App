package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.ApplyLoan;



public interface ApplyLoanRepository extends JpaRepository<ApplyLoan, Long> {
}
