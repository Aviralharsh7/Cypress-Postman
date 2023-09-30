# API contract design

Status: Hire Quotient

1. What are we trying to do?
    1. make a mock contract of an API 
    2. try to connect multiple API calls into connections and create a test flow (e2e?)
2. How are we going to do? 
    1. thinking at product idea level, and try to understand -
        1. NOTE - that when it is UI testing and when it is API testing 
        2. use case and feature of application
        3. dependencies, input constraints or any special condition of application
        4. workflow from one place to another in the application
    2. mirror the production environment (nvm) 
    3. thinking at website level, and try to understand - 
        1. NOTE - to identify crucial components first 
        2. consider one page as a system and component is, say, a button - see the interface between system and its components and sub-components. 
        3. highlight the expected - response, input, output at each interface (this should be visible via multiple API calls) 
        4. have a clear picture of how components and then API (that is how interface and data) are flowing. 
            1. dependencies, input constraints or any special condition of application 
            2. use case and feature of application 
            3. idea is to cover functionality of the API 
    4. define test method
        1. NOTE - that we are going for bottom up approach 
        2. we write collection and chain of unit tests for each API 
        3. then we move to integrate multiple API together  - create a flow - automate it 
    5. define test cases 
        1. focus on payload, header, response 
        2. start with base case - then create scenarios (various input, various expected outcomes) - then try to automate the process (look up what it means) 
        3. monitor working of test case and debug any deviations 
        4. optionally, think about documentation of scenarios 
    6. record test results 
        1. recording the results and how they are deviating from expected outcome 
        2. inspire out additional scenarios from the results of previous test cases