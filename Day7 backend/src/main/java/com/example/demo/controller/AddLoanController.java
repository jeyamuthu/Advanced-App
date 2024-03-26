package com.example.demo.controller;

import com.example.demo.entity.AddLoan;
import com.example.demo.services.AddLoanService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/addloan-details")
public class AddLoanController {

    @Autowired
    private AddLoanService addLoanService;

    @GetMapping
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public List<AddLoan> getAllAddLoan() {
        return addLoanService.getAllAddLoan();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public AddLoan getAddLoanById(@PathVariable Long id) {
        return addLoanService.getAddLoanById(id);
    }

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public AddLoan createAddLoan(@RequestBody AddLoan addLoan) {
        return addLoanService.createAddLoan(addLoan);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public AddLoan updateAddLoan(@PathVariable Long id, @RequestBody AddLoan addLoan) {
        return addLoanService.updateAddLoan(id, addLoan);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public void deleteAddLoan(@PathVariable Long id) {
        addLoanService.deleteAddLoan(id);
    }
}
