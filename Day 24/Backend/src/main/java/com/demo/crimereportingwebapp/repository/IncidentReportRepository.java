package com.demo.crimereportingwebapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.crimereportingwebapp.model.IncidentReport;

public interface IncidentReportRepository extends JpaRepository<IncidentReport, Long> {
}