package com.demo.crimereportingwebapp.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.crimereportingwebapp.constant.Api;
import com.demo.crimereportingwebapp.model.IncidentReport;
import com.demo.crimereportingwebapp.service.IncidentReportService;

@RestController
@RequestMapping(Api.AUTH)
public class IncidentReportController {

    private final IncidentReportService incidentReportService;

    @Autowired
    public IncidentReportController(IncidentReportService incidentReportService) {
        this.incidentReportService = incidentReportService;
    }

    @PostMapping("/incident")
    public IncidentReport createIncidentReport(@RequestBody IncidentReport incidentReport) {
        return incidentReportService.createIncidentReport(incidentReport);
    }

    @GetMapping("/{id}")
    public IncidentReport getIncidentReportById(@PathVariable Long id) {
        return incidentReportService.getIncidentReportById(id);
    }

    @GetMapping
    public List<IncidentReport> getAllIncidentReports() {
        return incidentReportService.getAllIncidentReports();
    }

    @PutMapping("/{id}")
    public IncidentReport updateIncidentReport(@PathVariable Long id, @RequestBody IncidentReport updatedIncidentReport) {
        return incidentReportService.updateIncidentReport(id, updatedIncidentReport);
    }

    @DeleteMapping("/{id}")
    public void deleteIncidentReport(@PathVariable Long id) {
        incidentReportService.deleteIncidentReport(id);
    }
}