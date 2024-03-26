package com.example.demo.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.AddLoan;
import com.example.demo.repository.AddLoanRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AddLoanService {

    @Autowired
    private AddLoanRepository addLoanRepository;

    public List<AddLoan> getAllAddLoan() {
        return addLoanRepository.findAll();
    }

    public AddLoan getAddLoanById(Long id) {
        Optional<AddLoan> addLoanOptional = addLoanRepository.findById(id);
        return addLoanOptional.orElse(null);
    }

    public AddLoan createAddLoan(AddLoan addLoan) {
        return addLoanRepository.save(addLoan);
    }

    public AddLoan updateAddLoan(Long id, AddLoan addLoan) {
        if (addLoanRepository.existsById(id)) {
            addLoan.setId(id);
            return addLoanRepository.save(addLoan);
        }
        return null;
    }

    public void deleteAddLoan(Long id) {
        addLoanRepository.deleteById(id);
    }
}
