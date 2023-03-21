export const fetchImages = async (inputValue, pageNumber) => {
    return await fetch(
      `https://pixabay.com/api/?key=34605024-7c953be56e187075574c7e205=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNumber}`
    )
      .then(async response => {
        if (!response.ok) {
          if (response.status === 404) {
            return [];
          }
          throw new Error(response.status);
        }
        return await response.json();
      })
      .catch(error => {
        console.error(error);
      });
  };