package com.demo.crimereportingwebapp.service;

import java.util.List;

import com.demo.crimereportingwebapp.model.IncidentReport;

public interface IncidentReportService {
    IncidentReport createIncidentReport(IncidentReport incidentReport);
    IncidentReport getIncidentReportById(Long id);
    List<IncidentReport> getAllIncidentReports();
    IncidentReport updateIncidentReport(Long id, IncidentReport updatedIncidentReport);
    void deleteIncidentReport(Long id);
}