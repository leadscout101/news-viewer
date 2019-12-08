package newsApplication.Data;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NewsController {
	
	@Autowired
	private NewsService newsService;
	
	@CrossOrigin
	@RequestMapping("/news")
	public List<News> getAllNews() {
		return newsService.getAllNews();
		}
	
	@RequestMapping("/news/{id}")
	public News getIndividualNews(@PathVariable Integer id){
		return newsService.getIndividualNews(id);
	}
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.POST, value="/news")
	public void addNews(@RequestBody News news){
		newsService.addNews(news);
	}
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.PUT, value="/news/{id}")
	public void updateNews(@RequestBody News news, @PathVariable Integer id){
		newsService.updateNews(id, news);
	}
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.DELETE, value="/news/{id}")
	public void deleteNews(@PathVariable Integer id){
		newsService.deleteNews(id);
	}
	
}