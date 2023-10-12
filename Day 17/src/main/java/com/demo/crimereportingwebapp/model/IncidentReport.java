package com.demo.crimereportingwebapp.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

import java.util.Date;

@Entity
@Table(name = "incident_reports")
public class IncidentReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getCrimeType() {
		return crimeType;
	}
	public void setCrimeType(String crimeType) {
		this.crimeType = crimeType;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public boolean isVictimOrWitness() {
		return isVictimOrWitness;
	}
	public void setVictimOrWitness(boolean isVictimOrWitness) {
		this.isVictimOrWitness = isVictimOrWitness;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	@Temporal(TemporalType.DATE)
    private Date date;

    private String time;
    private String location;
    private String crimeType;
    private String description;

    @Column(name = "is_victim_or_witness")
    private boolean isVictimOrWitness;

    private String name;
    private String contact;

 
}