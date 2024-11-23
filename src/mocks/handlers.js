import { http, HttpResponse } from "msw";

const mockedFollowersResponse = {
  data: {
    results: [
      {
        email: "viki@gmail.com",
        name: { first: "viki", last: "Ledger" },
        picture: { large: "" },
        login: { username: "vikiLeger" },
      },
    ],
  },
};

export const handlers = [
  http.get("https://randomuser.me/api/?results=5", () => {
    return HttpResponse.json(mockedFollowersResponse);
  }),
];
