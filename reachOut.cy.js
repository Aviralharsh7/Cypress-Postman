describe("Reachout button testing", ()=> {

  before(() => {
    cy.visit("https://easysource-dev.hirequotient.com/signin");

    cy.get('#root > div > div.Signin_leftContainer__XvALG > form > div:nth-child(1) > input[type=email]')
      .type('harshy2026@gmail.com');
    
    cy.get('#root > div > div.Signin_leftContainer__XvALG > form > div:nth-child(2) > input[type=password]')
      .type('mathewhyden7');

    cy.wait(3000);

  });

  it("Login successful", ()=>{
    cy.url().should("eq", "https://easysource-dev.hirequotient.com/");
  });



// // Path to target API 

//   it("Reach target API", () =>{

//     cy.visit("https://easysource-uat.hirequotient.com");
//     cy.wait(2000);

//     cy.get('#root > div.AppContainer_app__8pxgq > div:nth-child(1) > div.AppContainer_mainContainer__BScPy > div > div.table_table__cfvQp > div > div > div > div > div > div > div.ant-table-body > table > tbody > tr.ant-table-row.ant-table-row-level-0.allProjectRow > td:nth-child(1)')
//       .click();
//     cy.wait(2000);

//     cy.get('#root > div.AppContainer_app__8pxgq > div:nth-child(1) > div.AppContainer_mainContainer__BScPy > div > div > div.project_sp__body__rQlfZ > div.project_sp__bodyAction__NTq4m > label > span.ant-checkbox.css-1n7nwfa > input')
//       .click();
//     cy.wait(2000);

//     cy.get('#addToWorkflow > span')
//       .click();
//     cy.wait(2000);
//   });



// Base case -1 

  it("API status 200", () =>{

    // ACT
    cy.request({
      method: "POST",
      url:"https://easysource-dev.hirequotient.com/api/base-template/get",
      body: {
        "projectId": "9999"
      },
      headers: {
        "Content-Type": "application/json",
        "Host": "easysource-dev.hirequotient.com",
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "X-Webauthorization": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFhMDhlN2M3ODNkYjhjOGFjNGNhNzJhZjdmOWRkN2JiMzk4ZjE2ZGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaHEtc291cmNpbmctc3RhZyIsImF1ZCI6ImhxLXNvdXJjaW5nLXN0YWciLCJhdXRoX3RpbWUiOjE2OTUyODM1MzUsInVzZXJfaWQiOiJPQlI2MEtuWHZ0YVE2aWp0dkd2Z0VHMzA3aWUyIiwic3ViIjoiT0JSNjBLblh2dGFRNmlqdHZHdmdFRzMwN2llMiIsImlhdCI6MTY5NTM4MjkxNiwiZXhwIjoxNjk1Mzg2NTE2LCJlbWFpbCI6ImhhcnNoeTIwMjZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImhhcnNoeTIwMjZAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.S5BeQtxr1jSllIEQUHo9cObdtABGiTp49o2x8T906Sh3b8xMgYHVM3_tQYKQ_AFEqfoouYgNfAo8upFPmJS8mJnsKh21bsLcfpjLYd4HQ4_46dLiKjE-6p397HKL7axAPpaHohWOgxHNSQgJWw_fPxmEOqu1xL0F0aAYKTXlomftyuNZNwd81mfD-Q2L0XuERHwHm7hJBkatxZ551gwLOv1-8S32SvY5ymB5tCo9Vwhb45tmlwCCsdojhBff5LtDTUqkYPN2GGFjM9HfAzsmJQdLgYNxp15EQKeX1LfoRebX05H5SjDZ8Pjt6gbEwAccy4i9473B2IJskcme4hs2wg"
      },

    // ASSERT
    }).should((response) =>{
      expect(response.status).to.eq(200)
    })

  });

// Base case -2

  it("Web auth sent", () =>{

    // ACT
    cy.request({
      method: "POST",
      url:"https://easysource-dev.hirequotient.com/api/base-template/get",
      failOnStatusCode: false,
      body: {
        "projectId": "9999"
      },
      headers: {
        "Content-Type": "application/json",
        "Host": "easysource-dev.hirequotient.com",
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        // "X-Webauthorization": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFhMDhlN2M3ODNkYjhjOGFjNGNhNzJhZjdmOWRkN2JiMzk4ZjE2ZGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaHEtc291cmNpbmctc3RhZyIsImF1ZCI6ImhxLXNvdXJjaW5nLXN0YWciLCJhdXRoX3RpbWUiOjE2OTUyODM1MzUsInVzZXJfaWQiOiJPQlI2MEtuWHZ0YVE2aWp0dkd2Z0VHMzA3aWUyIiwic3ViIjoiT0JSNjBLblh2dGFRNmlqdHZHdmdFRzMwN2llMiIsImlhdCI6MTY5NTM4MjkxNiwiZXhwIjoxNjk1Mzg2NTE2LCJlbWFpbCI6ImhhcnNoeTIwMjZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImhhcnNoeTIwMjZAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.S5BeQtxr1jSllIEQUHo9cObdtABGiTp49o2x8T906Sh3b8xMgYHVM3_tQYKQ_AFEqfoouYgNfAo8upFPmJS8mJnsKh21bsLcfpjLYd4HQ4_46dLiKjE-6p397HKL7axAPpaHohWOgxHNSQgJWw_fPxmEOqu1xL0F0aAYKTXlomftyuNZNwd81mfD-Q2L0XuERHwHm7hJBkatxZ551gwLOv1-8S32SvY5ymB5tCo9Vwhb45tmlwCCsdojhBff5LtDTUqkYPN2GGFjM9HfAzsmJQdLgYNxp15EQKeX1LfoRebX05H5SjDZ8Pjt6gbEwAccy4i9473B2IJskcme4hs2wg"
      },

    // ASSERT
    }).should((response) =>{
      expect(response.status).to.equal(401)
    });

    // }).should((response) =>{
    //   const jsonData = response.body;
    //   const input = jsonData.message;
    //   expect(input).to.include('Access Denied')
    // });

  });



// Header case

it("Wrong HTTP Method", ()=> {

    cy.request({
        method: "GET",
        url: "https://easysource-dev.hirequotient.com/api/base-template/get",
        failOnStatusCode: false,
        body: {
        "projectId": "9999"
        },
        headers: {
        "Content-Type": "application/json",
        "Host": "easysource-dev.hirequotient.com",
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "X-Webauthorization": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFhMDhlN2M3ODNkYjhjOGFjNGNhNzJhZjdmOWRkN2JiMzk4ZjE2ZGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaHEtc291cmNpbmctc3RhZyIsImF1ZCI6ImhxLXNvdXJjaW5nLXN0YWciLCJhdXRoX3RpbWUiOjE2OTUyODM1MzUsInVzZXJfaWQiOiJPQlI2MEtuWHZ0YVE2aWp0dkd2Z0VHMzA3aWUyIiwic3ViIjoiT0JSNjBLblh2dGFRNmlqdHZHdmdFRzMwN2llMiIsImlhdCI6MTY5NTM4MjAxNywiZXhwIjoxNjk1Mzg1NjE3LCJlbWFpbCI6ImhhcnNoeTIwMjZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImhhcnNoeTIwMjZAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.QLPx8C_kP7fjhZeAYc3HQFP9cf5P0oknqzMZiIzLUy1INKj4RvpTuUH4rN1j1qbmmK7Wd3izDT_sC23Dzd6VIqRMmFtQTzCnG1tF5IGtQbVx-WZobttcGETA0RxbE-DOxihX8JFCIDU7p0vuWcdYFVlmWdT8cjIebNr9nfdJr-VOkUES8sg5RhFEDDXByAX8pPA_j5vpcEpbzMoHfl78qKji3FOn5XjAQhdc9xwjw9wVj_cLq8wZXly0vtqUgJChHPDLoFJSDxceAkgHOtPR7XNcdVx1VrPR0ogF7aUT2OxxNLObW8WkgSqBZCYPmC-DHDCXagIlHdH8iJ1dstD0Uw"
        },

    }).then((response) => {
      expect(response.status).to.eq('405')
    });


    // cy.intercept(
    //     'GET', 
    //     "https://easysource-dev.hirequotient.com/api/base-template/get", 
    // )
    // .as('getRequest');

    // cy.wait("@getRequest")
    // .then((interception) => {
    //     const response = interception.response;
    //     expect(response.status).to.eq(200);
    //     }
    // );

});



// Payload case

  it("Payload value is missing", () =>{

    // Act
    cy.request({
      method: "POST",
      url:"https://easysource-dev.hirequotient.com/api/base-template/get",
      failOnStatusCode: false,
      // body: {
      //   "projectId": "9999"
      // },
      headers: {
        "Content-Type": "application/json",
        "Host": "easysource-dev.hirequotient.com",
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "X-Webauthorization": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFhMDhlN2M3ODNkYjhjOGFjNGNhNzJhZjdmOWRkN2JiMzk4ZjE2ZGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaHEtc291cmNpbmctc3RhZyIsImF1ZCI6ImhxLXNvdXJjaW5nLXN0YWciLCJhdXRoX3RpbWUiOjE2OTUyODM1MzUsInVzZXJfaWQiOiJPQlI2MEtuWHZ0YVE2aWp0dkd2Z0VHMzA3aWUyIiwic3ViIjoiT0JSNjBLblh2dGFRNmlqdHZHdmdFRzMwN2llMiIsImlhdCI6MTY5NTM4MjkxNiwiZXhwIjoxNjk1Mzg2NTE2LCJlbWFpbCI6ImhhcnNoeTIwMjZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImhhcnNoeTIwMjZAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.S5BeQtxr1jSllIEQUHo9cObdtABGiTp49o2x8T906Sh3b8xMgYHVM3_tQYKQ_AFEqfoouYgNfAo8upFPmJS8mJnsKh21bsLcfpjLYd4HQ4_46dLiKjE-6p397HKL7axAPpaHohWOgxHNSQgJWw_fPxmEOqu1xL0F0aAYKTXlomftyuNZNwd81mfD-Q2L0XuERHwHm7hJBkatxZ551gwLOv1-8S32SvY5ymB5tCo9Vwhb45tmlwCCsdojhBff5LtDTUqkYPN2GGFjM9HfAzsmJQdLgYNxp15EQKeX1LfoRebX05H5SjDZ8Pjt6gbEwAccy4i9473B2IJskcme4hs2wg"
      },
    
    // Assert 
    }).then((response) =>{
      expect(response.status).to.eq(500)
    });
  });



// Response case

  it("Response has all properties", () =>{

    // Act
    cy.request({
      method: "POST",
      url:"https://easysource-dev.hirequotient.com/api/base-template/get",
      body: {
        "projectId": "9999"
      },
      headers: {
        "Content-Type": "application/json",
        "Host": "easysource-dev.hirequotient.com",
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "X-Webauthorization": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFhMDhlN2M3ODNkYjhjOGFjNGNhNzJhZjdmOWRkN2JiMzk4ZjE2ZGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaHEtc291cmNpbmctc3RhZyIsImF1ZCI6ImhxLXNvdXJjaW5nLXN0YWciLCJhdXRoX3RpbWUiOjE2OTUyODM1MzUsInVzZXJfaWQiOiJPQlI2MEtuWHZ0YVE2aWp0dkd2Z0VHMzA3aWUyIiwic3ViIjoiT0JSNjBLblh2dGFRNmlqdHZHdmdFRzMwN2llMiIsImlhdCI6MTY5NTM4MjkxNiwiZXhwIjoxNjk1Mzg2NTE2LCJlbWFpbCI6ImhhcnNoeTIwMjZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImhhcnNoeTIwMjZAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.S5BeQtxr1jSllIEQUHo9cObdtABGiTp49o2x8T906Sh3b8xMgYHVM3_tQYKQ_AFEqfoouYgNfAo8upFPmJS8mJnsKh21bsLcfpjLYd4HQ4_46dLiKjE-6p397HKL7axAPpaHohWOgxHNSQgJWw_fPxmEOqu1xL0F0aAYKTXlomftyuNZNwd81mfD-Q2L0XuERHwHm7hJBkatxZ551gwLOv1-8S32SvY5ymB5tCo9Vwhb45tmlwCCsdojhBff5LtDTUqkYPN2GGFjM9HfAzsmJQdLgYNxp15EQKeX1LfoRebX05H5SjDZ8Pjt6gbEwAccy4i9473B2IJskcme4hs2wg"
      },

    }).then((response) =>{
      const jsonData = response.body.data;

       for (let i = 0; i < jsonData.length; i++) {

        const item = jsonData[i];
        it(`All properties are present for candidate ${i + 1}`, () => {
          expect(item).to.have.property("_id");
          expect(item).to.have.property("userId");
          expect(item).to.have.property("type");
          expect(item).to.have.property("name");
          expect(item).to.have.property("subject");
          expect(item).to.have.property("body");
          expect(item).to.have.property("active");
          expect(item).to.have.property("__v");
          expect(item).to.have.property("createdAt");
          expect(item).to.have.property("updatedAt");
        });
      }
    });
  });
});