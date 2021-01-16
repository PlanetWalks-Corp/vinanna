package com.planetwalks.dynamicsinglepage.controllers;

import com.planetwalks.dynamicsinglepage.CloudinaryUploader;
import com.planetwalks.dynamicsinglepage.models.Album;
import com.planetwalks.dynamicsinglepage.models.Image;
import com.planetwalks.dynamicsinglepage.services.AlbumRepositoryImpl;
import com.planetwalks.dynamicsinglepage.services.ImageRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/image")
@CrossOrigin("*")
public class ImageController {

	private CloudinaryUploader cloudinaryUploader = new CloudinaryUploader();
	@Autowired
	private ImageRepositoryImpl imageRepository;
	@Autowired
	private AlbumRepositoryImpl albumRepository;

	public ImageController() {
	}

	@PostMapping("/save")
	public Image create(@RequestParam("imageName") String imageName,
	                    @RequestParam("albumId") Long albumId) throws IOException {
		String imagePath = "Uploads/"+imageName+".jpg";
		Album album = new Album();
		Optional<Album> album1= albumRepository.findByAlbumId(albumId);
		album.setAlbumId(album1.get().getAlbumId());
		album.setAlbumName(album1.get().getAlbumName());
		album.setCity(album1.get().getCity());

		Image image = new Image();
		image.setImageName(cloudinaryUploader.uploadImage(imagePath));
		image.setAlbum(album);
		return imageRepository.create(image);
	}

	@PutMapping("/update")
	public Image update(@RequestParam("imageId") Long imageId,
	                    @RequestParam("imageName") String imageName,
	                    @RequestParam("albumId") Long albumId) throws IOException {
		String imagePath = "Uploads/"+imageName+".jpg";
		Album album = new Album();
		Optional<Album> album1= albumRepository.findByAlbumId(albumId);
		album.setAlbumId(album1.get().getAlbumId());
		album.setAlbumName(album1.get().getAlbumName());
		album.setCity(album1.get().getCity());

		Image image = new Image();
		image.setImageId(imageId);
		image.setImageName(cloudinaryUploader.uploadImage(imagePath));
		image.setAlbum(album);
		return imageRepository.update(image);
	}
}
