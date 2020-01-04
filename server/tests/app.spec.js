const request = require("supertest");
const mongoose = require("mongoose");
const config = require("config").get("db");
const app = require("../src/app");

describe('Express app', () => {
  // DB connection
  beforeAll(() => {
    mongoose.connect(`mongodb://${config.host}:${config.port}/${config.name}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if(err) throw err;
    });
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await app.close();
  });

  it('should return 200', () => {
    return request(app).get("/apartments").then(res => {
      expect(res.statusCode).toBe(200);
    });
  });

  it('should return the apartments whose title contains "el"', () => {
    return request(app).get("/apartments?title=el").then(res => {
      res.body.forEach(apartment => {
        expect(apartment.title.toLowerCase().includes("el"));
      });
    });
  });
  
  it('should return the apartments whose price is between 150000€ and 250000€', () => {
    return request(app).get("/apartments?minPrice=150000&maxPrice=250000").then(res => {
      res.body.forEach(apartment => {
        expect(apartment.price).toBeGreaterThanOrEqual(150000);
        expect(apartment.price).toBeLessThanOrEqual(250000);
      });
    });
  });

  it('should return the apartments whose sqm is between 70m2 and 103m2', () => {
    return request(app).get("/apartments?minSqm=70&maxSqm=103").then(res => {
      res.body.forEach(apartment => {
        expect(apartment.sqm).toBeGreaterThanOrEqual(70);
        expect(apartment.sqm).toBeLessThanOrEqual(103);
      });
    });
  });

  it('should return the apartments whose number of bedrooms is at least 2', () => {
    return request(app).get("/apartments?minBedroomsCount=2").then(res => {
      res.body.forEach(apartment => {
        expect(apartment.bedroomsCount).toBeGreaterThanOrEqual(2);
      });
    });
  });

  it('should return the apartments whose number of bathrooms is at least 2', () => {
    return request(app).get("/apartments?minBathroomsCount=2").then(res => {
      res.body.forEach(apartment => {
        expect(apartment.bathroomsCount).toBeGreaterThanOrEqual(2);
      });
    });
  });

});