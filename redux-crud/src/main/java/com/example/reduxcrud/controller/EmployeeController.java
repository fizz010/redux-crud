package com.example.reduxcrud.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.reduxcrud.dto.Employee;
import com.example.reduxcrud.repository.EmployeeRepository;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
//@RequestMapping("/api.v1")
public class EmployeeController {

	@Autowired
	EmployeeRepository employeeRepository;
	
	@PostMapping("/emp")
	public String saveEmpById(@RequestBody Employee employee) {
		employeeRepository.save(employee);
		return "Employee Saved";
	}
	
	@GetMapping("/emps")
	public List<Employee> viewAll() {
		return employeeRepository.findAll();
	}
	
	@GetMapping("emp/{id}")
	public Optional<Employee> viewById(@PathVariable int id) {
		return employeeRepository.findById(id);
	}
	
	@DeleteMapping("emp/{id}")
	public String deleteById(@PathVariable int id) {
		employeeRepository.deleteById(id);
		return "Employee Deleted";
	}
	
	@PutMapping("/emp/{id}")
	public Employee userUpdate(@PathVariable("id") int id,@RequestBody Employee employee) {
		System.out.println(id);
		Employee existEmployee=employeeRepository.findById(id).get();
		existEmployee.setName(employee.getName());
		existEmployee.setAddresss(employee.getAddresss());
		existEmployee.setStream(employee.getStream());
		existEmployee.setEmail(employee.getEmail());
		employeeRepository.save(existEmployee);
		return existEmployee;
	} 
}

















	
	

