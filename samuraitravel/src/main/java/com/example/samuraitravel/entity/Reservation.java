package com.example.samuraitravel.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "reservations")
@Data
public class Reservation {
	@Id
	@GeneratedValue(strategy = GeberationType.IDENTITY)
	@Column(name = "id")private Integer id;
	
	@ManyToOne
	@JoinColumn(name = "house_id")
	private House house;
}
