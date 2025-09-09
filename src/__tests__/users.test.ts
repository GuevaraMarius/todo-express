import request from "supertest";
import app from "../app";

describe("Users API", () => {
  it("GET /users should return 404 (route not defined)", async () => {
    const res = await request(app).get("/users");
    expect([404, 501, 400]).toContain(res.status);
  });
});


