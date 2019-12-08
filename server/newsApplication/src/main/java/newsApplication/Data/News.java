package newsApplication.Data;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class News {

	@Id
	@GeneratedValue
	private Integer id;
	private String authorName;
	private String newsTitle;
	@Column(columnDefinition="TEXT")
	private String content;
	private String creationDate = setCreationDate();
	

	public News() {
		
	}
	
	public News(Integer id, String authorName, String newsTitle, String content, String creationDate) {
		super();
		this.id = id;
		this.authorName = authorName;
		this.newsTitle = newsTitle;
		this.content = content;
		this.creationDate = creationDate;
	}
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getauthorName() {
		return authorName;
	}
	public void setauthorName(String authorName) {
		this.authorName = authorName;
	}
	public String getcontent() {
		return content;
	}
	public void setcontent(String content) {
		this.content = content;
	}

	public String getNewsTitle() {
		return newsTitle;
	}

	public void setNewsTitle(String newsTitle) {
		this.newsTitle = newsTitle;
	}

	public String getCreationDate() {
		return creationDate;
	}
	
	private String setCreationDate(){
		DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
	    Date date = new Date();
	    return dateFormat.format(date);
	}
}