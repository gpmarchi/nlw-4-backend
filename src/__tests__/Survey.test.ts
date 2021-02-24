import request from 'supertest';
import { app } from '../app';

import createConnection from '../database/';

describe("Surveys", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it("should be able to create a new survey", async () => {
    const response = await request(app)
      .post("/surveys")
      .send({
        title: "test survey",
        description: "some test survey",
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  it("should be able to list all created surveys", async () => {
    await request(app)
      .post("/surveys")
      .send({
        title: "test survey 2",
        description: "some test survey 2",
      });

    const response = await request(app)
      .get("/surveys");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
  });
});