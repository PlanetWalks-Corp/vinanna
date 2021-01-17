package com.planetwalks.dynamicsinglepage.repositories;

import com.planetwalks.dynamicsinglepage.models.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CitiesRepositories extends JpaRepository<City, Long> {

	@Override
	Optional<City> findById(Long cityId);
	Optional<City> findBySlug(String slug);
}