package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.ApplyLoan;
import com.example.demo.services.ApplyLoanService;

import java.util.List;

@RestController
@RequestMapping("/api/applyloan-details")
public class ApplyLoanController {

    @Autowired
    private ApplyLoanService applyLoanService;

    @GetMapping
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public List<ApplyLoan> getAllApplyLoan() {
        return applyLoanService.getAllApplyLoan();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ApplyLoan getApplyLoanById(@PathVariable Long id) {
        return applyLoanService.getApplyLoanById(id);
    }

    @PostMapping
    public ApplyLoan createApplyLoan(@RequestBody ApplyLoan applyLoan) {
        return applyLoanService.createApplyLoan(applyLoan);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ApplyLoan updateApplyLoan(@PathVariable Long id, @RequestBody ApplyLoan applyLoan) {
        return applyLoanService.updateApplyLoan(id, applyLoan);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public void deleteApplyLoan(@PathVariable Long id) {
        applyLoanService.deleteApplyLoan(id);
    }
}
