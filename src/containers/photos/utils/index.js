export function getImages(pageIndex, setState) {
  fetch(`https://api.pexels.com/v1/curated?page=${pageIndex}&per_page=20`, {
    headers: {
      Authorization: "563492ad6f9170000100000144987a13b7ad460abf7f9e7dff3e7c4e",
    },
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      return setState(data);
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

export function nextPage(setState, state) {
  return setState(state + 1);
}

export function prevPage(setState, state) {
  return setState(state - 1);
}
