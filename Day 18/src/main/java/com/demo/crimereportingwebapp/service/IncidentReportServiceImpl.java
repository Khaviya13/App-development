package com.demo.crimereportingwebapp.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.crimereportingwebapp.model.IncidentReport;
import com.demo.crimereportingwebapp.repository.IncidentReportRepository;

@Service
public class IncidentReportServiceImpl implements IncidentReportService {

    private final IncidentReportRepository incidentReportRepository;

    @Autowired
    public IncidentReportServiceImpl(IncidentReportRepository incidentReportRepository) {
        this.incidentReportRepository = incidentReportRepository;
    }

    @Override
    public IncidentReport createIncidentReport(IncidentReport incidentReport) {
        return incidentReportRepository.save(incidentReport);
    }

    @Override
    public IncidentReport getIncidentReportById(Long id) {
        return incidentReportRepository.findById(id).orElse(null);
    }

    @Override
    public List<IncidentReport> getAllIncidentReports() {
        return incidentReportRepository.findAll();
    }

    @Override
    public IncidentReport updateIncidentReport(Long id, IncidentReport updatedIncidentReport) {
        if (incidentReportRepository.existsById(id)) {
            updatedIncidentReport.setId(id);
            return incidentReportRepository.save(updatedIncidentReport);
        }
        return null;
    }

    @Override
    public void deleteIncidentReport(Long id) {
        incidentReportRepository.deleteById(id);
    }
}