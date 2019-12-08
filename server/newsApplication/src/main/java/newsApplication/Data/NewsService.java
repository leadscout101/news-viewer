package newsApplication.Data;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NewsService {
	
	@Autowired
	private NewsRepository newsRepository;
	
	public List<News> getAllNews() {
		List<News> newsList = new ArrayList<>();
		newsRepository.findAll().forEach(newsList::add);
		return newsList;
	}

	public News getIndividualNews(Integer id) {
		return newsRepository.findOne(id);
	}

	public void addNews(News news) {
		newsRepository.save(news);	
	}

	public void updateNews(Integer id, News news) {
		newsRepository.save(news);
	}

	public void deleteNews(Integer id) {
		newsRepository.delete(id);
		
	}
}