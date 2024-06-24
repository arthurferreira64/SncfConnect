const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const app = require("../app");

//Tester la page pour Retrouver un de vos titres
// https://www.sncf-connect.com/app/trips/search

describe("POST /api/ticket", () => {
  it("should return 400 if ticket number is less than 6 characters", (done) => {
    request(app)
      .post("/api/ticket")
      .send({ ticketNumber: "12345", personName: "NAME" })
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
      .send({ ticketNumber: "1234567890123", personName: "NAME" })
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
      .send({ ticketNumber: "nonexist", personName: "NAME" })
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
      .send({ ticketNumber: "123456", personName: "NAME" })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal("Ticket exists");
        done();
      });
  });
});
