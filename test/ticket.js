import request from "supertest";
import { expect } from "chai";
import app from "../index.js";

describe("POST /api/ticket", () => {
  it("should return 400 if ticket number is less than 6 characters", (done) => {
    request(app)
      .post("/api/ticket")
      .send({ ticketNumber: "12345" })
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal(
          "Ticket number must be between 6 and 12 characters"
        );
        done();
      });
  });

  it("should return 400 if ticket number is more than 12 characters", (done) => {
    request(app)
      .post("/api/ticket")
      .send({ ticketNumber: "1234567890123" })
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal(
          "Ticket number must be between 6 and 12 characters"
        );
        done();
      });
  });

  it("should return 404 if ticket does not exist", (done) => {
    request(app)
      .post("/api/ticket")
      .send({ ticketNumber: "nonexist" })
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal("Ticket does not exist");
        done();
      });
  });

  it("should return 200 if ticket exists", (done) => {
    request(app)
      .post("/api/ticket")
      .send({ ticketNumber: "123456" })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal("Ticket exists");
        done();
      });
  });
});
