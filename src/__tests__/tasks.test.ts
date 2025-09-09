import request from "supertest";
import app from "../app";

describe("Tasks API", () => {
  it("GET /tasks should return 200 and a string", async () => {
    const res = await request(app).get("/tasks");
    expect(res.status).toBe(200);
    expect(typeof res.text).toBe("string");
    expect(res.text).toContain("Get all tasks");
  });
});
