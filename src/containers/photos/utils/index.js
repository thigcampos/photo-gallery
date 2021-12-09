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
      let prevPage = data.prev_page;
      let nextPage = data.next_page;
      setState(data.photos);
      return [prevPage, nextPage, setState];
    });
}

export const darkTheme = {
  state: "dark-theme",
  btnName: "Modo Claro",
  iconName: "bx:bxs-sun",
  logoColor: "#f1fafc",
};

export const lightTheme = {
  state: "light-theme",
  btnName: "Modo Escuro",
  iconName: "bx:bxs-moon",
  logoColor: "#1c1c1e",
};
