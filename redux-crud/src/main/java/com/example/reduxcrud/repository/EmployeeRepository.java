package com.example.reduxcrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.reduxcrud.dto.Employee;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer>{

}
