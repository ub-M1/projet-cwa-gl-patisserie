package com.ub.apicwa.models;

import java.util.Objects;

import javax.persistence.*;

import org.hibernate.annotations.ColumnTransformer;

//import org.hibernate.annotations.ColumnTransformer;

@Entity
@Table(name="user")
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idUser;
	private String username;
	@ColumnTransformer(
			read = "TRIM(CHAR(0) FROM UTF8TOSTRING(DECRYPT('AES', HASH('SHA256', STRINGTOUTF8('secret-key-12345'), 1), password)))",
			write = "ENCRYPT('AES', HASH('SHA256', STRINGTOUTF8('secret-key-12345'), 1), STRINGTOUTF8(?))")
	private String password;
	private String role;
	
	public int getIdUser() {
		return idUser;
	}
	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	@Override
	public int hashCode() {
		return Objects.hash(password, username);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return Objects.equals(password, other.password) && Objects.equals(username, other.username);
	}
    
	
	
	

}
