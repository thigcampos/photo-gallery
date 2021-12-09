export function getImages(pageIndex, perPage, setState) {
  fetch(
    `https://api.pexels.com/v1/curated?page=${pageIndex}&per_page=${perPage}`,
    {
      headers: {
        Authorization:
          "563492ad6f9170000100000144987a13b7ad460abf7f9e7dff3e7c4e",
      },
    }
  )
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      return setState(data.photos);
    });
}
