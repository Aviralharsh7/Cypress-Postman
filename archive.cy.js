    // selecting project
    cy.get('#root > div.AppContainer_app__8pxgq > div:nth-child(1) > div.AppContainer_mainContainer__BScPy > div > div.table_table__cfvQp > div > div > div > div > div > div > div.ant-table-body > table > tbody > tr.ant-table-row.ant-table-row-level-0.allProjectRow > td:nth-child(1)').click();
    cy.wait(2000);

    // selecting candidate profile
    cy.get("#card0 > div > div > div > div:nth-child(1)").click();
    cy.wait(2000);

    // selecting notes button
    cy.get('body > div.MuiModal-root.css-8ndowl > div.css-1ess5mh > div > div.candidateModal_spcard__container__oWbPh > div.candidateModal_spcard__tabs__RBQdr > div:nth-child(2) > p').click();
    cy.wait(2000);


----------


    // ACT 

    // giving weird input 
    cy.get('body > div.MuiModal-root.css-8ndowl > div.css-1ess5mh > div > div.candidateModal_spcard__container__oWbPh > div.candidateModal_spcard__tab__QilVD > div > div > div.quill > div.ql-container.ql-snow > div.ql-editor.ql-blank > p')
      .type('https://www.google.com/search?q=csdsdvsd&oq=csdsdvsd&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg5MgYIAhBFGDsyBggDEEUYO9IBBzYxMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8');
    
    // submit the note 
    cy.get('body > div.MuiModal-root.css-8ndowl > div.css-1ess5mh > div > div.candidateModal_spcard__container__oWbPh > div.candidateModal_spcard__tab__QilVD > div > div > div.notesTab_nmodal__btnBox__4sEMP > button')
      .click();

    cy.wait(3000);

    // ASSERT 
    cy.expect()

--------

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
        "x-webAuthorization" : "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFhMDhlN2M3ODNkYjhjOGFjNGNhNzJhZjdmOWRkN2JiMzk4ZjE2ZGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaHEtc291cmNpbmctc3RhZyIsImF1ZCI6ImhxLXNvdXJjaW5nLXN0YWciLCJhdXRoX3RpbWUiOjE2OTUyOTQ0NjQsInVzZXJfaWQiOiJPQlI2MEtuWHZ0YVE2aWp0dkd2Z0VHMzA3aWUyIiwic3ViIjoiT0JSNjBLblh2dGFRNmlqdHZHdmdFRzMwN2llMiIsImlhdCI6MTY5NTI5ODg0MiwiZXhwIjoxNjk1MzAyNDQyLCJlbWFpbCI6ImhhcnNoeTIwMjZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImhhcnNoeTIwMjZAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.MfWJsJzGH_SQ9VxDd_9sIE0MI9rt5DXKfNU8Tsd6832KTLwq8GfrhQWoFZh5l34C0W7DO_EkAxtAP5L3sk9WZNOSL6y2ROBqSCoOcHdBaq5qScyod3BAC9pbFEKnOcHlplan2BsYPNCp4O0sjJf9WLpQchwayHLul4SNlGOku_FL2n9M0iYxt4Pyx2hXjXqv7VdsSZVxjc8_fES_hMMNMxTU13fdlT1Bihi_f8fSonalCfVaA3h9VC89edTmLZaoB0G3go2MGiWjkboM16X_FNc2DG_qZFGFJT7P23U9lq1kWUBl1yOv16IBkllr0f8vrRoRE34eNonGGiZ3ecIA7A"
      },


    // ASSERT 

    }).then((response) =>{
        const jsonData = response.body;
        const input = jsonData.data.body;
        expect(input).to.include("<a href=");
      });
  });


------ 

describe("Input Box tests", () =>{

  before(() => {

    cy.intercept('POST', 'https://easysource-dev.hirequotient.com/', (req) => {
      req.reply({
        statusCode: 500,
        body: 'Blocked Request',
      });
    });


    cy.visit('https://easysource-dev.hirequotient.com/signin');
    // cy.wait(1000);

    cy.get('#root > div > div.Signin_leftContainer__XvALG > form > div:nth-child(1) > input[type=email]')
      .type('harshy2026@gmail.com')
      .then(() => {
        cy.get('#root > div > div.Signin_leftContainer__XvALG > form > div:nth-child(2) > input[type=password]')
          .type('mathewhyden7')
          .then(() => {
            cy.get('#root > div > div.Signin_leftContainer__XvALG > form > div.Signin_btnBox__JM5Ty > button')
              .click();
          });
      });
  });


----------

cy.route("GET", "https://easysource-dev.hirequotient.com/api/base-template/get", {
  statusCode: 405,
  // Add any response data if needed
}).as("getRequest");

// Trigger an action that should make a GET request
cy.visit("https://your-website.com");

// Wait for the stubbed request to complete
cy.wait("@getRequest");

// Check the response status
cy.get("@getRequest").should("have.property", "status", 405);


---------

cy.request({
  method: "GET",
  url: "https://easysource-dev.hirequotient.com/api/base-template/get",
  body: {
    "projectId": "9999"
  },
  headers: {
    "Content-Type": "application/json",
    "Host": "easysource-dev.hirequotient.com",
    "Accept": "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "X-Webauthorization": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFhMDhlN2M3ODNkYjhjOGFjNGNhNzJhZjdmOWRkN2JiMzk4ZjE2ZGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaHEtc291cmNpbmctc3RhZyIsImF1ZCI6ImhxLXNvdXJjaW5nLXN0YWciLCJhdXRoX3RpbWUiOjE2OTUyODM1MzUsInVzZXJfaWQiOiJPQlI2MEtuWHZ0YVE2aWp0dkd2Z0VHMzA3aWUyIiwic3ViIjoiT0JSNjBLblh2dGFRNmlqdHZHdmdFRzMwN2llMiIsImlhdCI6MTY5NTM3NDcxNywiZXhwIjoxNjk1Mzc4MzE3LCJlbWFpbCI6ImhhcnNoeTIwMjZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImhhcnNoeTIwMjZAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.TM2J_h1p7NvfH6aewRDiFZ3n-JQ-y2bRq5P9vWypoe4gS3PIF8dSYU1siU8FNq0pMNRFh2dTFsrXgLrzTAjo1VzitPcNMdbmtoYT_itio3TR9Xcfs7BQIdeL2uP09FNfzYqgzFQ4EUfhQda7LSvs_28dXd_gZYPgfQzra1nXqafHGNkZq3mrbtN0nE55hil5UITc-AjteZitqijgACXlGmDhEgcrp2C50GmMKzfCeV3CsEqwF-xo44LYw81kKlaAzu79MmnfizllVvEqC8fO7qwz1YM-GTK5vzVTF_n4NYecEvMsVuLyWW82OdmwPbnDocWSo1uZvRboYDnltseTyg"
  },
}).then((response) => {
  // Access the intercepted response
  const interceptedResponse = response;

  // Make assertions on the response, such as checking the status code
  expect(interceptedResponse.status).to.eq(405);
});











