describe("API is working", () =>{

  before(() => {
    cy.visit("https://easysource-dev.hirequotient.com/signin");

    cy.get('#root > div > div.Signin_leftContainer__XvALG > form > div:nth-child(1) > input[type=email]')
      .type('harshy2026@gmail.com');

    cy.get('#root > div > div.Signin_leftContainer__XvALG > form > div:nth-child(2) > input[type=password]')
      .type('mathewhyden7');

    // cy.get('#root > div > div.Signin_leftContainer__XvALG > form > div.Signin_btnBox__JM5Ty > button').click();
    cy.wait(3000);
  });

  it("Login Successful", ()=>{
    cy.url().should("include", "https://easysource-dev.hirequotient.com/");
  });


// TEST - 1 

  it("Input link is not clickable", () =>{

    // ARRANGE 

    // open dashboard
    cy.visit("https://easysource-uat.hirequotient.com");
    cy.wait(2000);

    // selecting project
    cy.get('#root > div.AppContainer_app__8pxgq > div:nth-child(1) > div.AppContainer_mainContainer__BScPy > div > div.table_table__cfvQp > div > div > div > div > div > div > div.ant-table-body > table > tbody > tr.ant-table-row.ant-table-row-level-0.allProjectRow > td:nth-child(1)')
      .click();
    cy.wait(2000);

    // selecting candidate profile
    cy.get("#card0 > div > div > div > div:nth-child(1)").click();
    cy.wait(2000);

    // selecting notes button
    cy.get('body > div.MuiModal-root.css-8ndowl > div.css-1ess5mh > div > div.candidateModal_spcard__container__oWbPh > div.candidateModal_spcard__tabs__RBQdr > div:nth-child(2) > p')
      .click();
    cy.wait(2000);


    // ACT 

    const payload = {
        "candidateId": "64def2f71bdbc4e8809c88d2",
        "title": "Note",
        "body": "<p><a href=\"http://hy.lipsum.com/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 0, 0);\">Հայերեն</a>&nbsp;<a href=\"http://sq.lipsum.com/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 0, 0);\">Shqip</a>&nbsp;<a href=\"http://ar.lipsum.com/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 0, 0);\">‫العربية</a>&nbsp;<a href=\"http://bg.lipsum.com/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 0, 0);\">Български</a></p>"
        }

    cy.request({
      method: "POST",
      url:"https://easysource-dev.hirequotient.com/api/notes/create/",
      body: payload,
      headers: {
        // "Content-Length": 82,
        "Content-Type": "application/json",
        "Host": "easysource-dev.hirequotient.com",
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "x-webAuthorization" : "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFhMDhlN2M3ODNkYjhjOGFjNGNhNzJhZjdmOWRkN2JiMzk4ZjE2ZGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaHEtc291cmNpbmctc3RhZyIsImF1ZCI6ImhxLXNvdXJjaW5nLXN0YWciLCJhdXRoX3RpbWUiOjE2OTUyODM1MzUsInVzZXJfaWQiOiJPQlI2MEtuWHZ0YVE2aWp0dkd2Z0VHMzA3aWUyIiwic3ViIjoiT0JSNjBLblh2dGFRNmlqdHZHdmdFRzMwN2llMiIsImlhdCI6MTY5NTM2MTExNSwiZXhwIjoxNjk1MzY0NzE1LCJlbWFpbCI6ImhhcnNoeTIwMjZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImhhcnNoeTIwMjZAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.gu12i8YGPRycZMSNGxRoS_RhRSdrRh0OV-6xy0dY5mtHbU9i5O4fWgtLQ_7J0MnG1a1_e6Gzbt_40ff-Cv_Kbh31vXZb5RwNfNmHt8tK6s0FFVYTAdMcizw6BsiNnS1uTyrFDMP8sgxJ9GKXvBMqADWiqHcArK5omjUoKQFjHTBUAnZmMs7z3JybxWBHgI5ZO5veDmjjYJm6xVyBB2YOaN0HQDog4XVxtt7sXa4iNKbY3l5llKP28oibDjoe03OY1WW1P52o5kpHE5H8qGBIK3eAH1nsrpvva9KRWODRuh11Coyhdn0Hv90HxU4Idh73yDQ_55d3P6zJuGakzaEiZw"
      },


    // ASSERT 

    }).then((response) =>{
        const jsonData = response.body;
        const input = jsonData.data.body;
        expect(input).to.include("<a href=");
      });
  });



// TEST - 2 


  it ("Only spaces input is rejected", ()=>{

    // ARRANGE 

    // open dashboard
    cy.visit("https://easysource-uat.hirequotient.com");
    cy.wait(2000);

    // selecting project
    cy.get('#root > div.AppContainer_app__8pxgq > div:nth-child(1) > div.AppContainer_mainContainer__BScPy > div > div.table_table__cfvQp > div > div > div > div > div > div > div.ant-table-body > table > tbody > tr.ant-table-row.ant-table-row-level-0.allProjectRow > td:nth-child(1)')
      .click();
    cy.wait(2000);

    // selecting candidate profile
    cy.get("#card0 > div > div > div > div:nth-child(1)").click();
    cy.wait(2000);

    // selecting notes button
    cy.get('body > div.MuiModal-root.css-8ndowl > div.css-1ess5mh > div > div.candidateModal_spcard__container__oWbPh > div.candidateModal_spcard__tabs__RBQdr > div:nth-child(2) > p')
      .click();
    cy.wait(2000);


    // ACT 

    const payload = {
        "candidateId": "64def2f71bdbc4e8809c88d2",
        "title": "Note",
        "body": "     "
        }

    cy.request({
      method: "POST",
      url:"https://easysource-dev.hirequotient.com/api/notes/create/",
      body: payload,
      headers: {
        "Content-Type": "application/json",
        "Host": "easysource-dev.hirequotient.com",
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "x-webAuthorization" : "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFhMDhlN2M3ODNkYjhjOGFjNGNhNzJhZjdmOWRkN2JiMzk4ZjE2ZGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaHEtc291cmNpbmctc3RhZyIsImF1ZCI6ImhxLXNvdXJjaW5nLXN0YWciLCJhdXRoX3RpbWUiOjE2OTUyODM1MzUsInVzZXJfaWQiOiJPQlI2MEtuWHZ0YVE2aWp0dkd2Z0VHMzA3aWUyIiwic3ViIjoiT0JSNjBLblh2dGFRNmlqdHZHdmdFRzMwN2llMiIsImlhdCI6MTY5NTM2MTExNSwiZXhwIjoxNjk1MzY0NzE1LCJlbWFpbCI6ImhhcnNoeTIwMjZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImhhcnNoeTIwMjZAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.gu12i8YGPRycZMSNGxRoS_RhRSdrRh0OV-6xy0dY5mtHbU9i5O4fWgtLQ_7J0MnG1a1_e6Gzbt_40ff-Cv_Kbh31vXZb5RwNfNmHt8tK6s0FFVYTAdMcizw6BsiNnS1uTyrFDMP8sgxJ9GKXvBMqADWiqHcArK5omjUoKQFjHTBUAnZmMs7z3JybxWBHgI5ZO5veDmjjYJm6xVyBB2YOaN0HQDog4XVxtt7sXa4iNKbY3l5llKP28oibDjoe03OY1WW1P52o5kpHE5H8qGBIK3eAH1nsrpvva9KRWODRuh11Coyhdn0Hv90HxU4Idh73yDQ_55d3P6zJuGakzaEiZw"
      },

      // ASSERT 
    }).then((response) =>{
      expect(response.data).to.be.null;
    });
  });



  // TEST - 3

  it ("Overflow wrap for long unbreakable strings", ()=>{

    // ARRANGE 

    // open dashboard
    cy.visit("https://easysource-uat.hirequotient.com");
    cy.wait(2000);

    // selecting project
    cy.get('#root > div.AppContainer_app__8pxgq > div:nth-child(1) > div.AppContainer_mainContainer__BScPy > div > div.table_table__cfvQp > div > div > div > div > div > div > div.ant-table-body > table > tbody > tr.ant-table-row.ant-table-row-level-0.allProjectRow > td:nth-child(1)')
      .click();
    cy.wait(2000);

    // selecting candidate profile
    cy.get("#card0 > div > div > div > div:nth-child(1)").click();
    cy.wait(2000);

    // selecting notes button
    cy.get('body > div.MuiModal-root.css-8ndowl > div.css-1ess5mh > div > div.candidateModal_spcard__container__oWbPh > div.candidateModal_spcard__tabs__RBQdr > div:nth-child(2) > p')
      .click();
    cy.wait(2000);


    // ACT 

    const payload = {
        "candidateId": "64def2f71bdbc4e8809c88d2",
        "title": "Note",
        "body": "https://www.google.com/search?q=dfsdfsd&oq=dfsdfsd&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQABiDARixAxiABDINCAIQABiDARixAxiABDINCAMQABiDARixAxiABDIQCAQQLhjHARixAxjRAxiABDITCAUQLhiDARjHARixAxjRAxiKBTINCAYQABiDARixAxiABDIKCAcQABixAxiABDINCAgQABiDARixAxiABDINCAkQABiDARixAxiABNIBBzY2OGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
        }

    cy.request({
      method: "POST",
      url:"https://easysource-dev.hirequotient.com/api/notes/create/",
      body: payload,
      headers: {
        "Content-Type": "application/json",
        "Host": "easysource-dev.hirequotient.com",
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "x-webAuthorization" : "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFhMDhlN2M3ODNkYjhjOGFjNGNhNzJhZjdmOWRkN2JiMzk4ZjE2ZGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaHEtc291cmNpbmctc3RhZyIsImF1ZCI6ImhxLXNvdXJjaW5nLXN0YWciLCJhdXRoX3RpbWUiOjE2OTUyODM1MzUsInVzZXJfaWQiOiJPQlI2MEtuWHZ0YVE2aWp0dkd2Z0VHMzA3aWUyIiwic3ViIjoiT0JSNjBLblh2dGFRNmlqdHZHdmdFRzMwN2llMiIsImlhdCI6MTY5NTM2MTExNSwiZXhwIjoxNjk1MzY0NzE1LCJlbWFpbCI6ImhhcnNoeTIwMjZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImhhcnNoeTIwMjZAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.gu12i8YGPRycZMSNGxRoS_RhRSdrRh0OV-6xy0dY5mtHbU9i5O4fWgtLQ_7J0MnG1a1_e6Gzbt_40ff-Cv_Kbh31vXZb5RwNfNmHt8tK6s0FFVYTAdMcizw6BsiNnS1uTyrFDMP8sgxJ9GKXvBMqADWiqHcArK5omjUoKQFjHTBUAnZmMs7z3JybxWBHgI5ZO5veDmjjYJm6xVyBB2YOaN0HQDog4XVxtt7sXa4iNKbY3l5llKP28oibDjoe03OY1WW1P52o5kpHE5H8qGBIK3eAH1nsrpvva9KRWODRuh11Coyhdn0Hv90HxU4Idh73yDQ_55d3P6zJuGakzaEiZw"
      },

      // ASSERT 
    }).then((response) =>{
        const jsonData = response.body;
        const input = jsonData.data.body;
        expect(input).to.include("style=\"overflow-wrap: break-word;\"");
    });
  });


});
