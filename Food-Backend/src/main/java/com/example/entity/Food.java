package com.example.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table

public class Food {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
 private  int id;
 private String fname;
 private String fimage;
 private int fprice;
 private int star;
 private boolean favorite;
 private String cookTime;
public Food() {}
public Food(int id, String fname, String fimage, int fprice, int star, boolean favorite, String cookTime) {
	super();
	this.id = id;
	this.fname = fname;
	this.fimage = fimage;
	this.fprice = fprice;
	this.star = star;
	this.favorite = favorite;
	this.cookTime = cookTime;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getFname() {
	return fname;
}
public void setFname(String fname) {
	this.fname = fname;
}
public String getFimage() {
	return fimage;
}
public void setFimage(String fimage) {
	this.fimage = fimage;
}
public int getFprice() {
	return fprice;
}
public void setFprice(int fprice) {
	this.fprice = fprice;
}
public int getStar() {
	return star;
}
public void setStar(int star) {
	this.star = star;
}
public boolean isFavorite() {
	return favorite;
}
public void setFavorite(boolean favorite) {
	this.favorite = favorite;
}
public String getCookTime() {
	return cookTime;
}
public void setCookTime(String cookTime) {
	this.cookTime = cookTime;
}
@Override
public String toString() {
	return "Food [id=" + id + ", fname=" + fname + ", fimage=" + fimage + ", fprice=" + fprice + ", star=" + star
			+ ", favorite=" + favorite + ", cookTime=" + cookTime + "]";
}



 
}
