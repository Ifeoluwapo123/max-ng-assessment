import BASE_URL from "./baseurl.api";
import apiAxiosCalls from "./httpmethods.api";

export default {
  getAllFilms: async () => {
    try {
      return await apiAxiosCalls({
        url: `${BASE_URL}/films`,
        method: "GET",
      });
    } catch (error) {
      console.log(error);
    }
  },
  getFilmById: (filmId: number) => {
    try {
      return apiAxiosCalls({
        url: `${BASE_URL}/films/${filmId}`,
        method: "GET",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
