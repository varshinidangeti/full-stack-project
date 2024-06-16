

document.getElementById('searchButton').addEventListener('click', function() {
    let query = document.getElementById('searchInput').value.toLowerCase();
    handleSearch(query);
  });
  
  document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById('searchButton').click();
    }
  });
  function handleSearch(query) {
    if (query.includes('horror')) {
      window.location.href = 'horror.html';
      console.log("called horror");
    } else if (query.includes('comedy')) {
      window.location.href = 'comedy movies.html';
    } else if (query.includes('action')) {
      window.location.href = 'action movies.html';
    } 
    else if (query.includes('latest')) {
        window.location.href = 'latest movies.html';
      } 
      else if (query.includes('upcoming')) {
        window.location.href = 'upcoming movies.html';
      } 
      else if (query.includes('romantic')) {
        window.location.href = 'romantic movies.html';
      } 
      else if (query.includes('bollywood')) {
        window.location.href = 'bollywood movies.html';
      } 
      else if (query.includes('hollywood')) {
        window.location.href = 'hollywood movies.html';
      } 
    
    else {
      alert('No matching page found.');
    }
  }
  
 