# Testing “reach out”

Status: Hire Quotient

### API 2 -

### API 1 - get (https://easysource-dev.hirequotient.com/api/base-template/get)

1. functionality - get base template 
2. type - POST 
3. test scenarios - base case 
    1. ~~response code 200~~ 
4. test scenarios - request header 
    1. ~~web auth is passed~~ 
    2. ~~wrong http request type~~ 
    3. non preferred form of response (via accept) 
    4. content-type (of request body) is wrongly specified (refer post man for content types) 
5. test scenarios - payload 
    1. ~~no payload value is sent~~ 
    2. ~~whole payload is missing~~ 
    3. ~~invalid data type of value~~ 
    4. ~~multiple / duplicate values are sent~~ 
    5. ~~exceed field limit~~ 
6. test scenarios - response 
    1. ~~check for incomplete list of properties~~  

| Status | Input | Response (frontend) | Response (backend) | Expected outcome | Corollary / Note |
| --- | --- | --- | --- | --- | --- |
| DONE | Base case  |  | as expected  | Same  |  |
| DONE  | web auth missing  |  | 500 Internal error  | 401 Unauthorized |  |
| DONE | Wrong HTTP method  |  | 404 Not found  | 405 Method not allowed  |  |
| DONE  | [positive test] 
complete properties in response  |  | positive test |  |  |
| DONE | Payload value missing  |  | 500 Internal error | Same |  |
| skip | Payload property is missing  |  | 500 Internal error | Same |  |
| skip | Payload value is different datatype  |  | 500 Internal error | Same |  |
| skip  | Multiple payload sent  |  | 500 Internal error | Same |  |
| skip  | exceed field limit  |  | 500 Internal error | Same |  |