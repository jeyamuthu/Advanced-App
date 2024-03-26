package com.example.demo.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.ApplyLoan;
import com.example.demo.repository.ApplyLoanRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ApplyLoanService {

    @Autowired
    private ApplyLoanRepository applyLoanRepository;

    public List<ApplyLoan> getAllApplyLoan() {
        return applyLoanRepository.findAll();
    }

    public ApplyLoan getApplyLoanById(Long id) {
        Optional<ApplyLoan> applyLoanOptional = applyLoanRepository.findById(id);
        return applyLoanOptional.orElse(null);
    }

    public ApplyLoan createApplyLoan(ApplyLoan applyLoan) {
        return applyLoanRepository.save(applyLoan);
    }

    public ApplyLoan updateApplyLoan(Long id, ApplyLoan applyLoan) {
        applyLoan.setId(id);
        return applyLoanRepository.save(applyLoan);
    }

    public void deleteApplyLoan(Long id) {
        applyLoanRepository.deleteById(id);
    }
}
