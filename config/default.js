module.exports = {
  host: "localhost",
  port: 3000,
  public: "../public/",
  paginate: {
    default: 10,
    max: 50
  },
  postgres: "postgres://barbell-hero:pgpassword@db:5432/barbell-hero",
  authentication: {
    secret:
      "3fd4610593c5bda6d5a4f19a963c6eb6ad7c4aa6aad36f641f4a648b4abf7410f3910661753481e7d5890d9f4031e6f848e7b3b91c10f2459619d89eb838c14534cbc51cd2fd7ccd8ba9c7f0044e0e37e328e2b11364c6aff2b4033e79113fc0ddb3eaefef3a33aa5bd34369aebfbfc59fd593a8d5a418964d5a4c3e6b8984638619579f104e9bb89a773f697cde443afba27b139119833eca6dfef38bb48cb7bfc82cdb62437e21c044722cdbff6fb154835acdf296e329eda038f241301896e325d40e4822d41e527bd436040cadf9e65702f769e9265bae221f34954e985d7ac28d6eb59b699ddf34fb1f2418550c0ff3225223d3b7db4e3b86125171f018",
    strategies: ["jwt", "local"],
    path: "/api/authentication",
    service: "api/users",
    jwt: {
      header: {
        typ: "access"
      },
      audience: "barbell-hero",
      subject: "anonymous",
      issuer: "feathers",
      algorithm: "HS256",
      expiresIn: "1d"
    },
    local: {
      entity: "user",
      usernameField: "email",
      passwordField: "password"
    }
  },
  seeder: {
    services: [
      {
        path: "api/users",
        template: {
          email: "my@user.com",
          password: "Password2"
        }
      },
      {
        count: 20,
        path: "api/movement-type",
        template: {
          name: "{{random.word}}"
        },
        callback(movementType, seed) {
          console.log("Seeding movements for type id: " + movementType.id);
          return seed({
            count: 5,
            path: "api/movement",
            template: {
              name: "{{random.word}}",
              movementTypeId: `${movementType.id}`
            }
          });
        }
      }
    ]
  }
};
